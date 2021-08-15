"use strict";

const e = React.createElement;

class String extends React.Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
    this.setPressPoint = props.setPressPoint.bind(this);
  }

  press(pos) {
    this.setPressPoint(this.props.number, pos)
  }

  mark_press(pos) {
    return(
      this.props.press_point[this.props.number-1] == pos ? 
      e("div", {key: "string_"+this.props.number+"-flet_"+pos+"-pressed", className: "string-press"}, [] ) : ""
    )
  }

  mark_open_string() {
    if(this.props.press_point[this.props.number-1]==0){
      return e("div", {key: "string_"+this.props.number+"-flet_0-opened", className: "open-string"});
    } else if(this.props.press_point[this.props.number-1]==-1){
      return e("span", {key: "string_"+this.props.number+"-flet_0-closed", className: "close-string"});
    }
  }

  render() {
    return(
      e("div", { key: "string_" + this.props.number + "-wrapper", className: "string"}, [
        e("div", { key: "string_" + this.props.number + "-flet_0", className: "flet-0", onClick: ()=>this.press(0)}, [this.mark_open_string()]),
        e("div", { key: "string_" + this.props.number + "-flet_1", className: "flet", onClick: ()=>this.press(1)}, [this.mark_press(1)]),
        e("div", { key: "string_" + this.props.number + "-flet_2", className: "flet", onClick: ()=>this.press(2)}, [this.mark_press(2)]),
        e("div", { key: "string_" + this.props.number + "-flet_3", className: "flet", onClick: ()=>this.press(3)}, [this.mark_press(3)]),
        e("div", { key: "string_" + this.props.number + "-flet_4", className: "flet", onClick: ()=>this.press(4)}, [this.mark_press(4)]),      
        e("div", { key: "string_" + this.props.number + "-flet_5", className: "flet", onClick: ()=>this.press(5)}, [this.mark_press(5)]),      
        e("div", { key: "string_" + this.props.number + "-flet_6", className: "flet", onClick: ()=>this.press(6)}, [this.mark_press(6)]),      
        e("div", { key: "string_" + this.props.number + "-flet_7", className: "flet", onClick: ()=>this.press(7)}, [this.mark_press(7)]),      
        e("div", { key: "string_" + this.props.number + "-flet_8", className: "flet", onClick: ()=>this.press(8)}, [this.mark_press(8)]),      
        e("div", { key: "string_" + this.props.number + "-flet_9", className: "flet", onClick: ()=>this.press(9)}, [this.mark_press(9)]),      
        e("div", { key: "string_" + this.props.number + "-flet_10", className: "flet", onClick: ()=>this.press(10)}, [this.mark_press(10)]),      
        e("div", { key: "string_" + this.props.number + "-flet_11", className: "flet", onClick: ()=>this.press(11)}, [this.mark_press(11)]),      
        e("div", { key: "string_" + this.props.number + "-flet_12", className: "flet", onClick: ()=>this.press(12)}, [this.mark_press(12)]),      
        e("div", { key: "string_" + this.props.number + "-flet_13", className: "flet", onClick: ()=>this.press(13)}, [this.mark_press(13)]),      
        e("div", { key: "string_" + this.props.number + "-flet_14", className: "flet", onClick: ()=>this.press(14)}, [this.mark_press(14)]),      
        e("div", { key: "string_" + this.props.number + "-flet_15", className: "flet", onClick: ()=>this.press(15)}, [this.mark_press(15)]),      
      ])
    )
  }
}

export class FingerBoard extends React.Component {
  constructor(props) {
    super(props);
    this.setPressPoint = props.setPressPoint.bind(this);
  }

  componentDidMount(){

  }

  drawSvg() {
    return e("svg", {key: "finger-board-svg", className: "finger-board-svg", width: 518, height: 200 }, [
      // 縦線
      e("rect", {key: "v-line-1", x: 30, y: 15, width: 8, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-2", x: 68, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-3", x: 100, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-4", x: 132, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-5", x: 164, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-6", x: 196, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-7", x: 228, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-8", x: 260, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-9", x: 292, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-10", x: 324, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-11", x: 356, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-12", x: 388, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-13", x: 420, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-14", x: 452, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-15", x: 484, y: 15, width: 2, height: 152, fill: "#888"}),
      e("rect", {key: "v-line-16", x: 516, y: 15, width: 2, height: 152, fill: "#888"}),

      // 横線
      e("rect", {key: "h-line-1", x: 30, y: 15, width: 488, height:2, fill: "#888"}),
      e("rect", {key: "h-line-2", x: 30, y: 45, width: 488, height:2, fill: "#888"}),
      e("rect", {key: "h-line-3", x: 30, y: 75, width: 488, height:2, fill: "#888"}),
      e("rect", {key: "h-line-4", x: 30, y: 105, width: 488, height:2, fill: "#888"}),
      e("rect", {key: "h-line-5", x: 30, y: 135, width: 488, height:2, fill: "#888"}),
      e("rect", {key: "h-line-6", x: 30, y: 165, width: 488, height:2, fill: "#888"}),

      // フレット番号
      e("text", {key: "number-1", x: 45 , y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "1"),
      e("text", {key: "number-2", x: 77 , y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "2"),
      e("text", {key: "number-3", x: 109, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "3"),
      e("text", {key: "number-4", x: 141, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "4"),
      e("text", {key: "number-5", x: 173, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "5"),
      e("text", {key: "number-6", x: 205, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "6"),
      e("text", {key: "number-7", x: 237, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "7"),
      e("text", {key: "number-8", x: 269, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "8"),
      e("text", {key: "number-9", x: 302, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "9"),
      e("text", {key: "number-10", x: 330, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "10"),
      e("text", {key: "number-11", x: 362, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "11"),
      e("text", {key: "number-12", x: 394, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "12"),
      e("text", {key: "number-13", x: 426, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "13"),
      e("text", {key: "number-14", x: 458, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "14"),
      e("text", {key: "number-15", x: 490, y: 195, fontSize: 18, fill: "#888", fontFamily: "cursive"}, "15"),
    ])
  }

  render() {
    return e("div", {key: "finger-board", id: "finger-board"}, [
      this.drawSvg(),
      e(String, { key: "string_1", number: 1, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_2", number: 2, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_3", number: 3, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_4", number: 4, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_5", number: 5, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_6", number: 6, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
    ]);
  }
}
