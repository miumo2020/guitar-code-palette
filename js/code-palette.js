"use strict";

const e = React.createElement;

export class CodePalette extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return [
      e("div", {key: "code-palette"}, ["Code Palette"]),         
    ];
  }
}