"use strict";

import { CodeIcon } from "./code-icon.js";

const e = React.createElement;

export class CodeScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: Array(16).fill({ code_name: null, position: null }),
    }
    this.getSelectedCodePalette = this.props.getSelectedCodePalette.bind(this);
  }

  drawCode(target_num) {
    // CodePaletteクラスから選択中のパレットのコードを取得
    let selected_code_palette = this.getSelectedCodePalette();
    let update_score = [...this.state.score];
    update_score[target_num] = selected_code_palette;
    this.setState({ score: update_score });
  }

  render() {
    let scores = [];
    for (let i = 0; i < 16; i++) {
      scores.push(
        e("div", { key: "score-code-" + String(i), className: "score-code", onClick: () => this.drawCode(i) }, [
          e(CodeIcon, { key: "code-" + String(i), codeName: this.state.score[i]["code_name"], position: this.state.score[i]["position"], })
        ]),
      );
    }

    return [
      "Code Score",
      e("div", { key: "score-line", className: "score-line" }, scores),
    ];
  }
}