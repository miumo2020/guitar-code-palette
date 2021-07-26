"use strict";

const e = React.createElement;

export class CodeIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  displayNut(min_flet) {
    if (min_flet == 1) {
      return e("rect", {x: 10, y: 5, width: 3, height: 41, fill: "#888"})
    }
  }

  displayFlet0() {
    let format = [
      e("circle", {cx: 5, cy: 5, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {cx: 5, cy: 13, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {cx: 5, cy: 21, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {cx: 5, cy: 29, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {cx: 5, cy: 37, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
      e("circle", {cx: 5, cy: 45, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),  
    ];

    let retval = [];
    for (let i = 0; i < 6; i++) {
      if (this.props.position[i] == 0) {
        retval.push(format[i]);
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
        e("svg", {}, [
          // 横線
          e("rect", {x: 10, y: 5, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {x: 10, y: 13, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {x: 10, y: 21, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {x: 10, y: 29, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {x: 10, y: 37, width: 50, height: 1, fill: "#CCC"}),
          e("rect", {x: 10, y: 45, width: 50, height: 1, fill: "#CCC"}),
  
          // 縦線
          e("rect", {x: 12, y: 5, width: 1, height: 41, fill: "#CCC"}),
          e("rect", {x: 23, y: 5, width: 1, height: 41, fill: "#CCC"}),
          e("rect", {x: 34, y: 5, width: 1, height: 41, fill: "#CCC"}),
          e("rect", {x: 45, y: 5, width: 1, height: 41, fill: "#CCC"}),
          e("rect", {x: 56, y: 5, width: 1, height: 41, fill: "#CCC"}),

          e("text", {x: 0, y: 21, fontSize: 8}, "Sorry, your finger is"),
          e("text", {x: 0, y: 29, fontSize: 8}, "too long to display..."),
        ])
      ]
    }

    return [
      e("svg", {}, [
        // 横線
        e("rect", {x: 10, y: 5, width: 50, height: 1, fill: "#888"}),
        e("rect", {x: 10, y: 13, width: 50, height: 1, fill: "#888"}),
        e("rect", {x: 10, y: 21, width: 50, height: 1, fill: "#888"}),
        e("rect", {x: 10, y: 29, width: 50, height: 1, fill: "#888"}),
        e("rect", {x: 10, y: 37, width: 50, height: 1, fill: "#888"}),
        e("rect", {x: 10, y: 45, width: 50, height: 1, fill: "#888"}),

        // 縦線
        this.displayNut(min_flet),
        e("rect", {x: 12, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {x: 23, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {x: 34, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {x: 45, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {x: 56, y: 5, width: 1, height: 41, fill: "#888"}),

        // フレット番号
        e("text", {x: 14, y: 57, fontSize: 9}, min_flet),
        e("text", {x: 26, y: 57, fontSize: 9}, min_flet+1),
        e("text", {x: 37, y: 57, fontSize: 9}, min_flet+2),
        e("text", {x: 48, y: 57, fontSize: 9}, min_flet+3),

        // 開放弦
        this.displayFlet0(),

        // 押弦なし
        // e("line", {x1: 2.5, y1: 3, x2: 7.5, y2: 8, stroke: "#333"}),
        // e("line", {x1: 7.5, y1: 3, x2: 2.5, y2: 8, stroke: "#333"}),
        // e("line", {x1: 2.5, y1: 11, x2: 7.5, y2: 16, stroke: "#333"}),
        // e("line", {x1: 7.5, y1: 11, x2: 2.5, y2: 16, stroke: "#333"}),
        // e("line", {x1: 2.5, y1: 19, x2: 7.5, y2: 24, stroke: "#333"}),
        // e("line", {x1: 7.5, y1: 19, x2: 2.5, y2: 24, stroke: "#333"}),
        // e("line", {x1: 2.5, y1: 27, x2: 7.5, y2: 32, stroke: "#333"}),
        // e("line", {x1: 7.5, y1: 27, x2: 2.5, y2: 32, stroke: "#333"}),
        // e("line", {x1: 2.5, y1: 35, x2: 7.5, y2: 40, stroke: "#333"}),
        // e("line", {x1: 7.5, y1: 35, x2: 2.5, y2: 40, stroke: "#333"}),
        e("line", {x1: 2.5, y1: 43, x2: 7.5, y2: 48, stroke: "#333"}),
        e("line", {x1: 7.5, y1: 43, x2: 2.5, y2: 48, stroke: "#333"}),

        // 押弦
        // e("circle", {cx: 18, cy: 5, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {cx: 18, cy: 13, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 18, cy: 21, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 18, cy: 29, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 18, cy: 37, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 18, cy: 45, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),

        // e("circle", {cx: 29, cy: 5, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 29, cy: 13, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 29, cy: 21, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {cx: 29, cy: 29, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 29, cy: 37, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 29, cy: 45, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),

        // e("circle", {cx: 40, cy: 5, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 40, cy: 13, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 40, cy: 21, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 40, cy: 29, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {cx: 40, cy: 37, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 40, cy: 45, r: 3, fill: "#333", stroke: "#333", strokeWidth: "1px"}),

      ])
    ];
  }

  render() {
    if (this.props.position == null) return "";

    let code_name = this.props.codeName
    if (code_name == null) {
      code_name = "Unknown"
    }
    return [code_name, this.makeSvg()];
  }
}