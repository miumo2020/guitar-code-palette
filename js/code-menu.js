"use strict";

const e = React.createElement;

class Code extends React.Component {
    constructor(props) {
      super(props);
      this.call = props.call.bind(this);
    }
    
    render() {
      if (this.props.children.length != 0) {
        return e("li", {key: this.props.name + " li"}, [
          e("a", { key: this.props.name + " li a", href: "#", onClick: () => this.call(this.props.name, 
            this.props.positions[0])}, this.props.name),
          e("ul", {key: this.props.name + " li a ul"}, this.props.children),
        ]);
      } else {
        return e("li", {key: this.props.name + " li"}, [
          e("a", { key: this.props.name + " li a", href: "#" , onClick: () => this.call(this.props.name, 
            this.props.positions[0])}, this.props.name)
        ]);
      }
    }
  }

export class CodeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // TODO: 一時的にCODEクラスに本関数を渡しているが、押弦を直接操作する関数に変更する
  call(name, position) {
    console.log(name, position)
  }

  render() {
    return e("li", {key: "CodeMenu li"}, [
      e("a", {key: "Code"}, ["Code"]),
      e("ul", {key: "Code ul"}, [
        e(Code, {key: "C", name: "C", positions: [], call: this.call, children: [
          e(Code, {key: "Cmaj", name: "Cmaj", positions: [], call: this.call, children: [
            e(Code, {key: "C6", name: "C6", positions: [], call: this.call, children: [
              e(Code, {key: "C6(9)", name: "C6(9)", positions: [], call: this.call, children: []}),              
            ],}),
            e(Code, {key: "C7", name: "C7", positions: [], call: this.call, children: [
              e(Code, {key: "C7(b9)", name: "C7(b9)", positions: [], call: this.call, children: []}),
              e(Code, {key: "C7(9)", name: "C7(9)", positions: [], call: this.call, children: []}),
              e(Code, {key: "C7(#9)", name: "C7(#9)", positions: [], call: this.call, children: []}),
              e(Code, {key: "C7(11)", name: "C7(11)", positions: [], call: this.call, children: []}),
              e(Code, {key: "C7(#11)", name: "C7(#11)", positions: [], call: this.call, children: []}),
              e(Code, {key: "C7(b13)", name: "C7(b13)", positions: [], call: this.call, children: []}),
              e(Code, {key: "C7(13)", name: "C7(13)", positions: [], call: this.call, children: []}),
              e(Code, {key: "C7(b5)", name: "C7(b5)", positions: [], call: this.call, children: []}),
              e(Code, {key: "C7(5#)", name: "C7(5#)", positions: [], call: this.call, children: []}),
            ],}),
            e(Code, {key: "Cmaj7", name: "Cmaj7", positions: [], call: this.call, children: [
              e(Code, {key: "Cmaj7(9)", name: "Cmaj7(9)", positions: [], call: this.call, children: []}),
              e(Code, {key: "Cmaj7(#11)", name: "Cmaj7(#11)", positions: [], call: this.call, children: []}),
              e(Code, {key: "Cmaj7(13)", name: "Cmaj7(13)", positions: [], call: this.call, children: []}),
            ],}),
            e(Code, {key: "Cadd7", name: "Cadd7", positions: [], call: this.call, children: [],}),  
          ],}),
          e(Code, {key: "Cmin", name: "Cmin", positions: [], call: this.call, children: [

          ],}),
        ],}),
      ]),
    ]);
  }
}
