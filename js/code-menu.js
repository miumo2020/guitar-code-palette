"use strict";

const e = React.createElement;

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      root: props.root,
      codename: props.codename,
      positions: props.positions,
      child: props.child,
    };
  }

  render() {
    return e("li", {}, [
      e("a", {}, this.state.root + this.state.codename),
      e("ul", {}, this.state.child),
    ]);
  }
}

export class CodeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  CODE_MENU = {
    C: {
      position: [[0, 1, 0, 2, 3, -1]],
      child: {
        C: {
          position: [[0, 1, 0, 2, 3, -1]],
          child: {
            C6: { position: [[0, 1, 2, 2, 3, -1]] },
            C7: { position: [[0, 1, 3, 2, 3, -1]] },
            Cmaj7: { position: [[0, 0, 0, 2, 3, -1]] },
            Cadd9: { position: [[0, 3, 0, 2, 3, -1]] },
          },
        },
      },
    },
  };

  render() {
    // return e("li", {}, [
    //   e("a", { href: "#" }, ["Code"]),
    //   e("ul", {}, [
    //       e("li", {}, [
    //           e(Code, {root:"C", codename:"", positions:""}, "")])],),
    // ]);

    // console.log(this.CODE_MENU["C"]["child"]);
    // Object.keys(this.CODE_MENU).forEach(function(root){
    //     Object.keys(this.CODE_MENU[root]["child"]).forEach(function(codes){
    //         console.log(codes);
    //     });
    // });

    return e("li", {}, [
      e("a", { href: "#" }, ["Code"]),
      e("ul", {}, [
        e(Code, {
          root: "C",
          codename: "",
          positions: [],
          child: [
            e(Code, {
              root: "C",
              codename: "",
              positions: [],
              child: [],
            }),
            e(Code, {
              root: "C",
              codename: "min",
              positions: [],
              child: ["asdf"],
            }),
          ],
        }),
      ]),
    ]);
  }
}
