"use strict";

const e = React.createElement;

export class CodePalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selected_palette: 1,
    };
    this.selectPalette = this.selectPalette.bind(this);
  }

  selectPalette(num) {
    this.setState({ selected_palette: num });
  }

  renderPalettes() {
    let result = [];
    for (let i=1; i<=16; i++) {
      let class_name = "palette";
      if (i == this.state.selected_palette) {
        class_name = "selected-palette";
      }
      result.push(
        e("div", {key: "palette-"+String(i), className: class_name, onClick: () => this.selectPalette(i)}, [])
      );
    }
    return result;
  }

  render() {
    return [
      e("div", {key: "code-palette"}, ["Code Palette"]),
      e("div", {key: "palette-wrapper", className: "wrapper-flex"}, this.renderPalettes()),          
    ];
  }
}