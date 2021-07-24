"use strict";

const e = React.createElement;

export class CodeIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  makeSvg() {
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
        e("rect", {x: 10, y: 5, width: 3, height: 41, fill: "#888"}), // ナット部
        e("rect", {x: 23, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {x: 34, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {x: 45, y: 5, width: 1, height: 41, fill: "#888"}),
        e("rect", {x: 56, y: 5, width: 1, height: 41, fill: "#888"}),

        // フレット番号
        e("text", {x: 14, y: 57, fontSize: 9}, "1"),
        e("text", {x: 26, y: 57, fontSize: 9}, "2"),
        e("text", {x: 37, y: 57, fontSize: 9}, "3"),
        e("text", {x: 48, y: 57, fontSize: 9}, "4"),

        // 開放弦
        e("circle", {cx: 5, cy: 5, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 5, cy: 13, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
        e("circle", {cx: 5, cy: 21, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 5, cy: 29, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 5, cy: 37, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),
        // e("circle", {cx: 5, cy: 45, r: 3, fill: "transparent", stroke: "#333", strokeWidth: "1px"}),

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