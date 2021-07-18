"use strict";

const e = React.createElement;

export class CodePalette extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return [
      e("div", {key: "code-palette"}, ["Code Palette"]),
      e("div", {key: "code-palette-row1", className: "wrapper-flex"}, [
        e("div", {key: "palette-1", className: "palette"}, []),
        e("div", {key: "palette-2", className: "palette"}, []),
        e("div", {key: "palette-3", className: "palette"}, []),
        e("div", {key: "palette-4", className: "palette"}, []),
        e("div", {key: "palette-5", className: "palette"}, []),
        e("div", {key: "palette-6", className: "palette"}, []),
        e("div", {key: "palette-7", className: "palette"}, []),
        e("div", {key: "palette-8", className: "palette"}, []),
        e("div", {key: "palette-9", className: "palette"}, []),
        e("div", {key: "palette-10", className: "palette"}, []),
        e("div", {key: "palette-11", className: "palette"}, []),
        e("div", {key: "palette-12", className: "palette"}, []),
        e("div", {key: "palette-13", className: "palette"}, []),
        e("div", {key: "palette-14", className: "palette"}, []),
        e("div", {key: "palette-15", className: "palette"}, []),
        e("div", {key: "palette-16", className: "palette"}, []),
      ]),          
    ];
  }
}