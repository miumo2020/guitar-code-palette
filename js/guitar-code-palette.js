"use strict";

import { FingerBoard } from "./finger-board.js";
import { CodeMenu } from "./code-menu.js";
import { CodePalette } from "./code-palette.js";
import { CodeScore } from "./code-score.js";
import { GuitarSound } from "./guitar-sound.js";

const MAX_STRING = 6;
const MAX_FLET = 15;

const e = React.createElement;

class GuitarCodePalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tuning: [52, 47, 43, 38, 33, 28],
      position: [-1, -1, -1, -1, -1, -1], // -1:押弦なし　0:解放
    };
    this.code_name = null;

    this.setCode = this.setCode.bind(this);

    this.ref = React.createRef();
    this.register = this.register.bind(this);

    this.guitar_sound = new GuitarSound();
  }

  // コード構成音辞書
  //   度数表示との対応
  //   1  b2   2  b3   3   4  b5   5  #5   6   b7  7
  //      b9   9  #9      11  #11     b13  13  #13
  //  ------------------------------------------------
  //   0   1   2   3   4   5   6   7   8   9   10  11
  //
  SCALE_DICT = {
    // 2和音
    "0,7": "(omit3)",

    // 3和音
    "0,4,7": "maj",
    "0,3,7": "m",
    "0,4,6": "(b5)",
    "0,3,6": "dim",
    "0,4,8": "aug",
    "0,5,7": "sus4",
    "0,2,7": "sus2", // add9(omit3)

    // 4和音
    "0,4,7,9": "6",
    "0,4,9": "6", // 5th省略
    "0,3,7,9": "m6",
    "0,4,7,10": "7",
    "0,4,10": "7",　 // 5th省略
    "0,3,7,10": "m7",
    "0,4,7,11": "M7",
    "0,3,7,11": "mM7",
    "0,4,6,10": "7(b5)",
    "0,3,6,10": "m7(b5)",
    "0,4,6,11": "M7(b5)",
    "0,3,6,11": "mM7(b5)",
    "0,5,7,10": "7sus4",
    "0,3,6,9": "dim7",
    "0,2,4,7": "add9",
    "0,2,3,7": "m(add9)",
    "0,4,5,7": "add4",
    "0,4,8,10": "aug7",

    // 9th
    "0,1,4,7,10": "7(b9)",
    "0,2,4,7,10": "7(9)",
    "0,3,4,7,10": "7(#9)",
    "0,2,3,7,10": "m7(9)",
    "0,2,4,7,11": "M7(9)",
    "0,2,3,7,11": "mM7(9)",
    "0,2,3,11": "mM7(9)", // 5th省略
    "0,2,4,7,9": "6(9)",
    "0,2,4,9": "6(9)", // 5th省略
    "0,2,3,7,9": "m6(9)",
    "0,2,3,9": "m6(9)", // 5th省略

    // 11th
    "0,4,5,7,10": "7(11)",
    "0,4,5,10": "7(11)", // 5th省略
    "0,2,4,5,7,10": "7(9,11)",
    "0,1,4,5,7,10": "7(b9,11)",
    "0,3,5,7,10": "m7(11)",
    "0,2,3,5,7,10": "m7(9,11)",
    // "0,1,3,5,7,10": "m7(b9,11)",
    "0,3,5,7,11": "mM7(11)",
    "0,2,3,5,7,11": "mM7(9,11)",
    "0,4,6,7,10": "7(#11)",
    "0,2,4,6,7,10": "7(9,#11)",
    "0,1,4,6,7,10": "7(b9,#11)",
    "0,3,6,7,11": "mM7(#11)",
    
    // 13th

  };

  NOTE_DICT = {
    0: "C",
    1: "C#",
    2: "D",
    3: "D#",
    4: "E",
    5: "F",
    6: "F#",
    7: "G",
    8: "G#",
    9: "A",
    10: "A#",
    11: "B",
  };

  setPosition = (string, point) => {
    let new_point = -1;
    if (this.state.position[string - 1] != point) {
      new_point = point;
    }
    let new_position = [...this.state.position];
    new_position[string - 1] = new_point;
    this.setState({ position: new_position });
  };

  setCode = (position) => {
    let new_position = [...position];
    this.setState({ position: new_position });
  }

  predictCode() {
    let root = this.getRoot();
    let scale = this.getNowScale();
    const code = this.SCALE_DICT[scale.join(',')];
    if (code != null) {
      this.code_name =  root + code;
    } else {
      this.code_name = "Unknown";
    }
    return this.code_name;
  }

  getRoot() {
    let scale = [];
    for (let j = 0; j <= MAX_STRING - 1; j++) {
      if (this.state.position[j] >= 0) {
        scale.push(this.state.tuning[j] + this.state.position[j]);
      }
    }
    scale.sort(function (a, b) {
      return a < b ? -1 : 1;
    });
    let root = scale[0];
    root = root % 12;
    return this.NOTE_DICT[root];
  }

  getNowScale() {
    let scale = [];
    for (let j = 0; j <= MAX_STRING - 1; j++) {
      if (this.state.position[j] >= 0) {
        scale.push(this.state.tuning[j] + this.state.position[j]);
      }
    }
    scale.sort(function (a, b) {
      return a < b ? -1 : 1;
    });
    let root = scale[0];
    for (let i = 0; i < scale.length; i++) {
      scale[i] = scale[i] - root;
    }
    for (let i = 0; i < scale.length; i++) {
      const octave_down = scale[i] - 12;
      if (12 > octave_down && octave_down >= 0) {
        scale[i] = scale[i] - 12;
      } else if (24 > octave_down && octave_down >= 12) {
        scale[i] = scale[i] - 24;
      }
    }
    scale = Array.from(new Set(scale));
    scale.sort(function (a, b) {
      return a < b ? -1 : 1;
    });
    return scale;
  }

  reset() {
    this.setState({ position: [-1, -1, -1, -1, -1, -1] });
  }
  
  shiftDown() {
    if (this.state.position.some((element) => element == 0) == true) return;
    let new_position = [...this.state.position];
    for (let j = 0; j <= MAX_STRING - 1; j++) {
      if (new_position[j] >= 0) {
        new_position[j] = new_position[j] - 1;
      }
    }
    this.setState({ position: new_position });
  }

  shiftUp() {
    if (this.state.position.some((element) => element == MAX_FLET) == true) return;
    let new_position = [...this.state.position];
    for (let j = 0; j <= MAX_STRING - 1; j++) {
      if (new_position[j] >= 0) {
        new_position[j] = new_position[j] + 1;
      }
    }
    this.setState({ position: new_position });
  }

  register() {
    this.ref.current.registerPalette(this.code_name, this.state.position);
  }

  getSelectedCodePalette = () => {
    return this.ref.current.getSelectedCodePalette();
  }

  render() {
    return [
      e("div", {key: "container", className: "container"}, [
        e("div", {key: "layout-side", id: "layout-side"}, [
          e(CodePalette, {key: "code-palette", ref: this.ref}, []),
        ]),
        e("div", {key: "layout-main", id: "layout-main"}, [
          e("div", {key: "layout-row-1", id: "layout-row-1"}, [
            e("ul", { key: "code-menu-wrapper", className: "dropmenu" }, [
              e(CodeMenu, { key: "code-menu", setCode: this.setCode }, []),
            ]),
            e("div", { key: "display-press-point" }, [this.state.position]),
            e("div", { key: "code-display" }, [this.predictCode()]),
          ]),
          e("div", {key: "layout-row-2", id: "layout-row-2"}, [
            e(FingerBoard, { key: "finger-board", position: this.state.position, setPosition: this.setPosition }, []),
          ]),
          e("div", {key: "layout-row-3", id: "layout-row-3"}, [
            e("div", {key: "reset-button", className: "btn btn--green btn--cubic", onClick: ()=>{this.reset()}}, ["Reset"]),
            e("div", {key: "shift-down-button", className: "btn btn--green btn--cubic", onClick: ()=>{this.shiftDown()}}, ["<"]),
            e("div", {key: "shift-up-button", className: "btn btn--green btn--cubic", onClick: ()=>{this.shiftUp()}}, [">"]),
            e("div", {key: "sound-button", className: "btn btn--green btn--cubic", onClick: ()=>{this.guitar_sound.soundCord(this.state.position)}}, ["♪"]),
            e("div", {key: "regist-button", className: "btn btn--green btn--cubic", onClick: ()=>{this.register()}}, ["Register"]),
          ]),
          e("div", {key: "layout-row-4", id: "layout-row-4"}, [
            e(CodeScore, {key: "code-score", getSelectedCodePalette: this.getSelectedCodePalette}, []),
          ]),
        ]),
      ])
    ];
  }
}

ReactDOM.render(e(GuitarCodePalette), document.getElementById("app"));
