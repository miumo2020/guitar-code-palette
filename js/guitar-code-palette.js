"use strict";

import { FingerBoard2 } from "./finger-board.js";
import { CodeMenu } from "./code-menu.js";

const MAX_STRING = 6;
const MAX_FLET = 15;

class FingerBoard {
  constructor() {
    this.tuning = [52, 47, 43, 38, 33, 28];
    // -1:押弦なし　0:解放
    this.press_point = [-1, -1, -1, -1, -1, -1];

    this.code_display = "---";
  }

  SCALE_DICT = {
    "(omit3)": [0, 7],
    maj: [0, 4, 7],
    m: [0, 3, 7],
    "(♭5)": [0, 4, 6],
    "m(♭5)": [0, 3, 6],
    aug: [0, 4, 8],
    sus4: [0, 5, 7],
    sus2: [0, 2, 7],

    6: [0, 4, 7, 9],
    m6: [0, 3, 7, 9],
    7: [0, 4, 7, 10],
    m7: [0, 3, 7, 10],
    M7: [0, 4, 7, 11],
    mM7: [0, 3, 7, 11],
    "7(♭5)": [0, 4, 6, 10],
    "m7(♭5)": [0, 3, 6, 10],
    "M7(♭5)": [0, 4, 6, 11],
    "mM7(♭5)": [0, 3, 6, 11],
    "7sus4": [0, 5, 7, 10],
    dim7: [0, 3, 6, 9],
    add9: [0, 2, 4, 7],
    "m(add9)": [0, 2, 3, 7],
    add4: [0, 4, 5, 7],
    aug7: [0, 4, 8, 10],
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

  pressString(string, flet) {
    if (this.press_point[string - 1] == flet) {
      this.press_point[string - 1] = -1;
    } else {
      this.press_point[string - 1] = flet;
    }
    this.predictCode();
    this.update();
  }

  update() {
    for (let i = 0; i <= MAX_FLET; i++) {
      for (let j = 1; j <= MAX_STRING; j++) {
        let p = document.getElementById("string-press-" + j + "-flet-" + i);
        if (this.press_point[j - 1] == i) {
          p.style.visibility = "visible";
        } else {
          p.style.visibility = "hidden";
        }
      }
    }
    document.getElementById("code-display").textContent = this.code_display;
  }

  predictCode() {
    let root = this.getRoot();
    let scale = this.getNowScale();
    console.log(scale);
    const code = Object.keys(this.SCALE_DICT).filter((key) => {
      return this.SCALE_DICT[key].toString() === scale.toString();
    });
    if (code != "") {
      this.code_display = root + code;
    } else {
      this.code_display = "---";
    }
  }

  getRoot() {
    let scale = [];
    for (let j = 0; j <= MAX_STRING - 1; j++) {
      if (this.press_point[j] >= 0) {
        scale.push(this.tuning[j] + this.press_point[j]);
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
      if (this.press_point[j] >= 0) {
        scale.push(this.tuning[j] + this.press_point[j]);
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
    this.press_point = [-1, -1, -1, -1, -1, -1];
    this.code_display = "---";
    this.update();
  }

  shiftDown() {
    if (this.press_point.some((element) => element == 0) == true) return;
    for (let j = 0; j <= MAX_STRING - 1; j++) {
      if (this.press_point[j] >= 0) {
        this.press_point[j] = this.press_point[j] - 1;
      }
    }
    this.predictCode();
    this.update();
  }

  shiftUp() {
    if (this.press_point.some((element) => element == MAX_FLET) == true) return;
    for (let j = 0; j <= MAX_STRING - 1; j++) {
      if (this.press_point[j] >= 0) {
        this.press_point[j] = this.press_point[j] + 1;
      }
    }
    this.predictCode();
    this.update();
  }

  sound() {
    let delay_time = 40.0; // msec
    let delay = 0;
    for (let j = MAX_STRING; j >= 1; j--) {
      const func = () => {
        if (this.press_point[j - 1] >= 0) {
          let audio = new Audio(
            "js/mp3/tone_" + j + "-" + this.press_point[j - 1] + ".mp3"
          );
          audio.play();
        }
      };
      setTimeout(func, delay);
      delay = delay + delay_time;
    }
  }
}

let fg = new FingerBoard();

const app = document.getElementById("app");

//////////////////// DOM階層構造作成 ////////////////////

let finger_board = document.createElement("div");
finger_board.className = "finger-board";
app.appendChild(finger_board);

// 開放弦
var div = document.createElement("div");
finger_board.appendChild(div);
for (let j = 1; j <= MAX_STRING; j++) {
  let string_press = document.createElement("div");
  string_press.className = "open-string";
  string_press.id = "string-press-" + j + "-flet-" + "0";

  let string_area = document.createElement("div");
  string_area.className = "string-area";
  string_area.appendChild(string_press);

  string_area.addEventListener("click", function () {
    fg.pressString(j, 0);
  });

  div.appendChild(string_area);
}

// ナット
let nut = document.createElement("div");
nut.className = "nut";
finger_board.appendChild(nut);

// 弦/フレット
// 15fletループ
for (let i = 1; i <= MAX_FLET; i++) {
  var div = document.createElement("div");
  finger_board.appendChild(div);
  // 6stringループ
  for (let j = 1; j <= MAX_STRING; j++) {
    let string = document.createElement("div");
    string.className = "string";
    string.id = "string-" + j + "-flet-" + i;

    let string_press = document.createElement("div");
    string_press.className = "string-press";
    string_press.id = "string-press-" + j + "-flet-" + i;

    let string_area = document.createElement("div");
    string_area.className = "string-area";
    string_area.appendChild(string);
    string_area.appendChild(string_press);

    string_area.addEventListener("click", function () {
      fg.pressString(j, i);
    });

    div.appendChild(string_area);
  }
  let flet = document.createElement("div");
  flet.className = "flet";
  finger_board.appendChild(flet);
}

// ピッキングエリア
var div = document.createElement("div");
for (let j = 1; j <= MAX_STRING; j++) {
  let picking_string = document.createElement("div");
  picking_string.className = "picking-string";

  let picking_string_area = document.createElement("div");
  picking_string_area.className = "picking-string-area";

  picking_string_area.appendChild(picking_string);
  div.appendChild(picking_string_area);
}
finger_board.appendChild(div);

//////////////////// イベント設定 ////////////////////

let reset_btn = document.getElementById("reset");
reset_btn.addEventListener("click", function (event) {
  fg.reset();
});

let shift_down_btn = document.getElementById("shift-down");
shift_down_btn.addEventListener("click", function (event) {
  fg.shiftDown();
});

let shift_up_btn = document.getElementById("shift-up");
shift_up_btn.addEventListener("click", function (event) {
  fg.shiftUp();
});

let sound_btn = document.getElementById("sound");
sound_btn.addEventListener("click", function (event) {
  fg.sound();
});

//////////////////// React.js ////////////////////

const e = React.createElement;

class GuitarCodePalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tuning: [52, 47, 43, 38, 33, 28],
      press_point: [-1, -1, -1, -1, -1, -1], // -1:押弦なし　0:解放
      code_display: "---",
    };
    this.setPressPoint = this.setPressPoint.bind(this);
  }

  setPressPoint = (string, point) => {
    let new_point = -1;
    if (this.state.press_point[string - 1] != point) {
      new_point = point;
    }
    let new_press_point = [...this.state.press_point];
    new_press_point[string - 1] = new_point;
    this.setState({ press_point: new_press_point });
  };

  render() {
    return [
      e("ul", { key: "code-menu-wrapper", className: "dropmenu" }, [
        e(CodeMenu, { key: "code-menu" }, []),
      ]),
      e("div", { key: "display-press-point" }, [this.state.press_point]),
      e(FingerBoard2, { key: "finger-board-2", press_point: this.state.press_point, setPressPoint: this.setPressPoint }, []),
    ];
  }
}

ReactDOM.render(e(GuitarCodePalette), document.getElementById("app2"));
