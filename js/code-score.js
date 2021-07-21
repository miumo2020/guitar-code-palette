"use strict";

const e = React.createElement;

// TODO: 共通化
class Code extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.position == null) return "";

    let code_name = this.props.codeName
    if (code_name == null) {
      code_name = "Unknown"
    }
    return [code_name, e("br", { key: "br" }), this.props.position];
  }
}

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
          e(Code, { key: "code-" + String(i), codeName: this.state.score[i]["code_name"], position: this.state.score[i]["position"], })
        ]),
      );
    }

    return [
      "Code Score",
      e("div", { key: "score-line", className: "score-line" }, scores),
    ];
  }
}