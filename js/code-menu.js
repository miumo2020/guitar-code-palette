"use strict";

const e = React.createElement;

class Code extends React.Component {
    constructor(props) {
      super(props);
      this.setCode = props.setCode.bind(this);
    }
    
    render() {
      if (this.props.children.length != 0) {
        return e("li", {key: this.props.name + " li"}, [
          e("a", { key: this.props.name + " li a", href: "#", onClick: () => this.setCode(this.props.positions[0])}, this.props.name),
          e("ul", {key: this.props.name + " li a ul"}, this.props.children),
        ]);
      } else {
        return e("li", {key: this.props.name + " li"}, [
          e("a", { key: this.props.name + " li a", href: "#" , onClick: () => this.setCode(this.props.positions[0])}, this.props.name)
        ]);
      }
    }
  }

export class CodeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setCode = this.props.setCode.bind(this);
  }

  render() {
    return e("li", {key: "CodeMenu li"}, [
      e("a", {key: "Code"}, ["Code"]),
      e("ul", {key: "Code ul"}, [
        e(Code, {key: "C", name: "C", positions: [[0,1,0,2,3,-1]], setCode: this.setCode, children: [
          e(Code, {key: "Cmaj", name: "Cmaj", positions: [[0,1,0,2,3,-1]], setCode: this.setCode, children: [
            e(Code, {key: "C6", name: "C6", positions: [[0,1,2,2,3,-1]], setCode: this.setCode, children: [
              e(Code, {key: "C6(9)", name: "C6(9)", positions: [], setCode: this.setCode, children: []}),              
            ],}),
            e(Code, {key: "C7", name: "C7", positions: [[0,1,3,2,3,-1]], setCode: this.setCode, children: [
              e(Code, {key: "C7(b9)", name: "C7(b9)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "C7(9)", name: "C7(9)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "C7(#9)", name: "C7(#9)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "C7(11)", name: "C7(11)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "C7(#11)", name: "C7(#11)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "C7(b13)", name: "C7(b13)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "C7(13)", name: "C7(13)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "C7(b5)", name: "C7(b5)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "C7(5#)", name: "C7(5#)", positions: [], setCode: this.setCode, children: []}),
            ],}),
            e(Code, {key: "Cmaj7", name: "Cmaj7", positions: [[0,0,0,2,3,-1]], setCode: this.setCode, children: [
              e(Code, {key: "Cmaj7(9)", name: "Cmaj7(9)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "Cmaj7(#11)", name: "Cmaj7(#11)", positions: [], setCode: this.setCode, children: []}),
              e(Code, {key: "Cmaj7(13)", name: "Cmaj7(13)", positions: [], setCode: this.setCode, children: []}),
            ],}),
            e(Code, {key: "Cadd7", name: "Cadd7", positions: [[0,3,0,2,3,-1]], setCode: this.setCode, children: [],}),  
          ],}),
          e(Code, {key: "Cmin", name: "Cmin", positions: [[3,4,5,5,3,-1]], setCode: this.setCode, children: [

          ],}),
        ],}),
      ]),
    ]);
  }
}
