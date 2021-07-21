"use strict";

const e = React.createElement;

export class CodeScore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let lines = [];
    for (let i = 0; i < 4; i++) {
      lines.push(
        e("div", { key: "score-line-" + String(i), className: "score-line" }, [
          e("div", { key: "score-line-" + String(i) + "-code-0", className: "score-code" }),
          e("div", { key: "score-line-" + String(i) + "-code-1", className: "score-code" }),
          e("div", { key: "score-line-" + String(i) + "-code-2", className: "score-code" }),
          e("div", { key: "score-line-" + String(i) + "-code-3", className: "score-code" }),
        ])
      );
      lines.push(
        e("br", { key: "br" + String(i) })
      );
    }
    return [
      "Code Score",
      lines
    ];
  }
}