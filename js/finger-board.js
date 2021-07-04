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

export class FingerBoard2 extends React.Component {
  constructor(props) {
    super(props);
    this.setPressPoint = props.setPressPoint.bind(this);
  }

  componentDidMount(){
    this.drawCanvas();
  }

  drawCanvas() { 
    let canvas = document.getElementById("finger-board-canvas");
    if (canvas.getContext) {
      let context = canvas.getContext("2d");

      context.fillStyle = "#333";

      context.fillRect(30, 15, 8, 152);

      context.fillRect(30, 15,  700, 2);
      context.fillRect(30, 45,  700, 2);
      context.fillRect(30, 75,  700, 2);
      context.fillRect(30, 105, 700, 2);
      context.fillRect(30, 135, 700, 2);
      context.fillRect(30, 165, 700, 2);

      context.fillRect(68, 15, 2, 152);
      context.fillRect(100, 15, 2, 152);
      context.fillRect(132, 15, 2, 152);
      context.fillRect(164, 15, 2, 152);
      context.fillRect(196, 15, 2, 152);
      context.fillRect(228, 15, 2, 152);
      context.fillRect(260, 15, 2, 152);
      context.fillRect(292, 15, 2, 152);
      context.fillRect(324, 15, 2, 152);
      context.fillRect(356, 15, 2, 152);
      context.fillRect(388, 15, 2, 152);
      context.fillRect(420, 15, 2, 152);
      context.fillRect(452, 15, 2, 152);
      context.fillRect(484, 15, 2, 152);
      context.fillRect(516, 15, 2, 152);

      context.font = "18px cursive";
      context.fillText("1", 45, 195);
      context.fillText("2", 77, 195);
      context.fillText("3", 109, 195);
      context.fillText("4", 141, 195);
      context.fillText("5", 173, 195);
      context.fillText("6", 205, 195);
      context.fillText("7", 237, 195);
      context.fillText("8", 269, 195);
      context.fillText("9", 302, 195);
      context.fillText("10", 330, 195);
      context.fillText("11", 362, 195);
      context.fillText("12", 394, 195);
      context.fillText("13", 426, 195);
      context.fillText("14", 458, 195);
      context.fillText("15", 490, 195);
    }
  }

  render() {
    return e("div", {key: "finger-board", id: "finger-board"}, [
      e("div", {key: "finger-board-canvas-wrapper", className: "canvas-wrapper"}, [
        e("canvas", {key: "finger-board-canvas", id: "finger-board-canvas", width: "800px", height: "200px"}),
      ]),
      e(String, { key: "string_1", number: 1, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_2", number: 2, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_3", number: 3, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_4", number: 4, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_5", number: 5, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
      e(String, { key: "string_6", number: 6, press_point: this.props.press_point, setPressPoint: this.setPressPoint, }, []),
    ]);
  }
}
