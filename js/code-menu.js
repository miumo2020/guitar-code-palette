"use strict";

const e = React.createElement;

class Code extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: props.name,
        positions: props.positions,
        children: props.children,
      };
      this.call = props.call;
    }
    
    render() {
      if (this.state.children.length != 0) {
        return e("li", {}, [
          e("a", { href: "#", onClick: () => this.call(this.state.name, 
            this.state.positions[0])}, this.state.name),
          e("ul", {}, this.state.children),
        ]);
      } else {
        return e("li", {}, [
          e("a", { href: "#" , onClick: () => this.call(this.state.name, 
            this.state.positions[0])}, this.state.name)
        ]);
      }
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

  // TODO: 一時的にCODEクラスに本関数を渡しているが、押弦を直接操作する関数に変更する
  call(name, position) {
    console.log(name, position)
  }

  render() {
    return e("li", {}, [
      e("a", {}, ["Code"]),
      e("ul", {}, [
        e(Code, {name: "C", positions: [], call: this.call, children: [
          e(Code, {name: "Cmaj", positions: [], call: this.call, children: [
            e(Code, {name: "C6", positions: [], call: this.call, children: [
              e(Code, {name: "C6(9)", positions: [], call: this.call, children: []}),              
            ],}),
            e(Code, {name: "C7", positions: [], call: this.call, children: [
              e(Code, {name: "C7(♭9)", positions: [], call: this.call, children: []}),
              e(Code, {name: "C7(9)", positions: [], call: this.call, children: []}),
              e(Code, {name: "C7(#9)", positions: [], call: this.call, children: []}),
              e(Code, {name: "C7(11)", positions: [], call: this.call, children: []}),
              e(Code, {name: "C7(#11)", positions: [], call: this.call, children: []}),
              e(Code, {name: "C7(♭13)", positions: [], call: this.call, children: []}),
              e(Code, {name: "C7(13)", positions: [], call: this.call, children: []}),
              e(Code, {name: "C7(♭5)", positions: [], call: this.call, children: []}),
              e(Code, {name: "C7(5#)", positions: [], call: this.call, children: []}),
            ],}),
            e(Code, {name: "Cmaj7", positions: [], call: this.call, children: [
              e(Code, {name: "Cmaj7(9)", positions: [], call: this.call, children: []}),
              e(Code, {name: "Cmaj7(#11)", positions: [], call: this.call, children: []}),
              e(Code, {name: "Cmaj7(13)", positions: [], call: this.call, children: []}),
            ],}),
            e(Code, {name: "Cadd7", positions: [], call: this.call, children: [],}),  
          ],}),
          e(Code, {name: "Cmin", positions: [], call: this.call, children: [

          ],}),
        ],}),
      ]),
    ]);
  }
}
