"use strict";

const e = React.createElement;

export class CodeIcon extends React.Component {
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