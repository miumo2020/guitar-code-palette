"use strict";

import { GuitarSound } from "./guitar-sound.js"

const e = React.createElement;

export class CodeIcon extends React.Component {
  constructor(props) {
    super(props);
    this.guitar_sound = new GuitarSound();
    this.checkSound = this.checkSound.bind(this);
  }

  displayFletNumber(max_flet, min_flet) {
    let start_flet;
    if (max_flet <= 4) {
      start_flet = 1;
    } else {
      start_flet = min_flet;
    }
    
    return [
      e("text", {key: "number-1", x: 14, y: 57, fontSize: 9}, start_flet),
      e("text", {key: "number-2", x: 26, y: 57, fontSize: 9}, start_flet+1),
      e("text", {key: "number-3", x: 37, y: 57, fontSize: 9}, start_flet+2),
      e("text", {key: "number-4", x: 48, y: 57, fontSize: 9}, start_flet+3),  
    ];
  }

  displayNut(max_flet) {
    if (max_flet <= 4) {
      return e("rect", {key: "nut", x: 10, y: 5, width: 3, height: 41, fill: "#888"})
    }
  }

  displayOpenString() {
    let format = [
      e("circle", {key: "open-string-1", cx: 5, cy: 5, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {key: "open-string-2", cx: 5, cy: 13, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {key: "open-string-3", cx: 5, cy: 21, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {key: "open-string-4", cx: 5, cy: 29, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {key: "open-string-5", cx: 5, cy: 37, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {key: "open-string-6", cx: 5, cy: 45, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),  
    ];

    let retval = [];
    for (let i = 0; i < 6; i++) {
      if (this.props.position[i] == 0) {
        retval.push(format[i]);
      }
    }
    return retval;
  }

  displayCloseString() {
    let format = [
      [e("line", {key: "close-string-11", x1: 2.5, y1: 3, x2: 7.5, y2: 8, stroke: "#333"}),
       e("line", {key: "close-string-12", x1: 7.5, y1: 3, x2: 2.5, y2: 8, stroke: "#333"})],
      [e("line", {key: "close-string-21", x1: 2.5, y1: 11, x2: 7.5, y2: 16, stroke: "#333"}),
       e("line", {key: "close-string-22", x1: 7.5, y1: 11, x2: 2.5, y2: 16, stroke: "#333"})],
      [e("line", {key: "close-string-31", x1: 2.5, y1: 19, x2: 7.5, y2: 24, stroke: "#333"}),
       e("line", {key: "close-string-32", x1: 7.5, y1: 19, x2: 2.5, y2: 24, stroke: "#333"})],
      [e("line", {key: "close-string-41", x1: 2.5, y1: 27, x2: 7.5, y2: 32, stroke: "#333"}),
       e("line", {key: "close-string-42", x1: 7.5, y1: 27, x2: 2.5, y2: 32, stroke: "#333"})],
      [e("line", {key: "close-string-51", x1: 2.5, y1: 35, x2: 7.5, y2: 40, stroke: "#333"}),
       e("line", {key: "close-string-52", x1: 7.5, y1: 35, x2: 2.5, y2: 40, stroke: "#333"})],
      [e("line", {key: "close-string-61", x1: 2.5, y1: 43, x2: 7.5, y2: 48, stroke: "#333"}),
       e("line", {key: "close-string-62", x1: 7.5, y1: 43, x2: 2.5, y2: 48, stroke: "#333"})]
    ];

    let retval = [];
    for (let i = 0; i < 6; i++) {
      if (this.props.position[i] == -1) {
        retval.push(format[i]);
      }
    }
    return retval;
  }

  displayPressPosition(max_flet, min_flet) {
    let format = [
      [
        e("circle", {key: "pos-1-1", cx: 18, cy: 5, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-2-1", cx: 18, cy: 13, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-3-1", cx: 18, cy: 21, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-4-1", cx: 18, cy: 29, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-5-1", cx: 18, cy: 37, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-6-1", cx: 18, cy: 45, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
      ],
      [
        e("circle", {key: "pos-1-2", cx: 29, cy: 5, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-2-2", cx: 29, cy: 13, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-3-2", cx: 29, cy: 21, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-4-2", cx: 29, cy: 29, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-5-2", cx: 29, cy: 37, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-6-2", cx: 29, cy: 45, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
      ],
      [
        e("circle", {key: "pos-1-3", cx: 40, cy: 5, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-2-3", cx: 40, cy: 13, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-3-3", cx: 40, cy: 21, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-4-3", cx: 40, cy: 29, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-5-3", cx: 40, cy: 37, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-6-3", cx: 40, cy: 45, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
      ],
      [
        e("circle", {key: "pos-1-4", cx: 51, cy: 5, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-2-4", cx: 51, cy: 13, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-3-4", cx: 51, cy: 21, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-4-4", cx: 51, cy: 29, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-5-4", cx: 51, cy: 37, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {key: "pos-6-4", cx: 51, cy: 45, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
      ]
    ];
    
    let fixed_position;
    // 最小フレット番号を基準に何フレット目を押さえているか
    if (max_flet > 4) {
      fixed_position = this.props.position.map((val)=>val-(min_flet-1));
    } else {
      // 最大フレット番号が4以下の場合、1～4フレットを表示するので補正しない
      fixed_position = this.props.position;
    }
    
    let retval = [];
    for (let i = 0; i < 6; i++) {
      let pos = fixed_position[i];
      if (pos >= 1) {
        retval.push(format[pos-1][i]);
      }
    }
    return retval;
  }

  makeSvg() {
    // 最大フレット番号と、開放弦・押弦なしを除いた最小フレット番号を取得
    let max_flet = this.props.position.reduce((a,b)=>a>b?a:b);
    let min_flet = this.props.position.filter((val)=>val>=1).reduce((a,b)=>a<b?a:b);
    
    // TODO: フレット間隔が3より大きいコードは表示できない
    if (max_flet - min_flet > 3) {
      return [
        e("svg", {key: "wrapper-svg", width: 80, height: 60}, [
          // 横線
          e("rect", {key: "h-line-1", x: 10, y: 5, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {key: "h-line-2", x: 10, y: 13, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {key: "h-line-3", x: 10, y: 21, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {key: "h-line-4", x: 10, y: 29, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {key: "h-line-5", x: 10, y: 37, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {key: "h-line-6", x: 10, y: 45, width: 50, height: 1, fill: "#CCC"}),
  
          // 縦線
          e("rect", {key: "v-line-1", x: 12, y: 5, width: 1, height: 41, fill: "#CCC"}),
          e("rect", {key: "v-line-2", x: 23, y: 5, width: 1, height: 41, fill: "#CCC"}),
          e("rect", {key: "v-line-3", x: 34, y: 5, width: 1, height: 41, fill: "#CCC"}),
          e("rect", {key: "v-line-4", x: 45, y: 5, width: 1, height: 41, fill: "#CCC"}),
          e("rect", {key: "v-line-5", x: 56, y: 5, width: 1, height: 41, fill: "#CCC"}),

          e("text", {key: "text-1", x: 0, y: 21, fontSize: 8}, "Sorry, your finger is"),
          e("text", {key: "text-2", x: 0, y: 29, fontSize: 8}, "too long to display..."),
        ])
      ]
    }

    return [
      e("svg", {key: "wrapper-svg", width: 70, height: 60}, [
        // 横線
        e("rect", {key: "h-line-1", x: 10, y: 5, width: 50, height: 1, fill: "#888"}),
        e("rect", {key: "h-line-2", x: 10, y: 13, width: 50, height: 1, fill: "#888"}),
        e("rect", {key: "h-line-3", x: 10, y: 21, width: 50, height: 1, fill: "#888"}),
        e("rect", {key: "h-line-4", x: 10, y: 29, width: 50, height: 1, fill: "#888"}),
        e("rect", {key: "h-line-5", x: 10, y: 37, width: 50, height: 1, fill: "#888"}),
        e("rect", {key: "h-line-6", x: 10, y: 45, width: 50, height: 1, fill: "#888"}),

        // 縦線
        this.displayNut(max_flet),
        e("rect", {key: "v-line-1", x: 12, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {key: "v-line-2", x: 23, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {key: "v-line-3", x: 34, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {key: "v-line-4", x: 45, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {key: "v-line-5", x: 56, y: 5, width: 1, height: 41, fill: "#888"}),

        // フレット番号
        this.displayFletNumber(max_flet, min_flet),

        // 開放弦
        this.displayOpenString(),

        // 押弦なし
        this.displayCloseString(),

        // 押弦
        this.displayPressPosition(max_flet, min_flet),
      ])
    ];
  }

  checkSound(e) {
    e.stopPropagation();
    this.guitar_sound.soundCord(this.props.position);
  }

  render() {
    if (this.props.position == null) return "";

    let code_name = this.props.codeName
    if (code_name == null) {
      code_name = "Unknown"
    }
    return [
      code_name, 
      e("img", {key: "sound-icon", src: "assets/image/sound-icon.svg", className: "palette-sound-icon", onClick: this.checkSound}),
      this.makeSvg()
    ];
  }
}