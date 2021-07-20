"use strict";

const e = React.createElement;

const MAX_PALETTE = 16;

class Code extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.position == null) return "";

    let code_name = this.props.codeName
    if (code_name == null) {
      code_name = "Unknown Code"
    }
    return [code_name, e("br", { key: "br" }), this.props.position];
  }
}

export class CodePalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_palette: 0,
      code_palette: Array(MAX_PALETTE).fill({ code_name: null, position: null }),
    };
    this.selectPalette = this.selectPalette.bind(this);
  }

  selectPalette(num) {
    this.setState({ selected_palette: num });
  }

  renderPalettes() {
    let result = [];
    for (let i = 0; i < MAX_PALETTE; i++) {
      let class_name = "palette";
      if (i == this.state.selected_palette) {
        class_name = "selected-palette";
      }
      result.push(
        e("div", { key: "palette-" + String(i), className: class_name, onClick: () => this.selectPalette(i) }, [
          e(Code, { key: "palette-code-" + String(i), codeName: this.state.code_palette[i]["code_name"], position: this.state.code_palette[i]["position"] })
        ])
      );
    }
    return result;
  }

  registerPalette(code_name, position) {
    // 全弦押弦なしの場合、処理終了
    if (position.every((element) => { return element == -1; })) return;

    // 1弦でも押弦がある場合、パレット登録
    // パレット0から順番に参照し、空いているパレットに登録する
    let new_code_palette = [...this.state.code_palette];
    for (let i = 0; i < MAX_PALETTE; i++) {
      if ((this.state.code_palette[i]["code_name"] == null) && (this.state.code_palette[i]["position"] == null)) {
        new_code_palette[i] = { code_name: code_name, position: position };
        break;
      }
    }
    this.setState({ code_palette: new_code_palette });
  }

  render() {
    return [
      e("div", { key: "code-palette" }, ["Code Palette"]),
      e("div", { key: "palette-wrapper", className: "wrapper-flex" }, this.renderPalettes()),
    ];
  }
}