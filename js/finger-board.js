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
      e("div", {key: "string_"+this.props.number+"-flet_"+pos+"-pressed", className: "string2-press"}, [] ) : ""
    )
  }

  mark_open_string() {
    if(this.props.press_point[this.props.number-1]==0){
      return e("div", {key: "string_"+this.props.number+"-flet_0-opened", className: "open-string2"});
    } else if(this.props.press_point[this.props.number-1]==-1){
      return e("span", {key: "string_"+this.props.number+"-flet_0-closed", className: "close-string"});
    }
  }

  render() {
    return(
      e("div", { key: "string_" + this.props.number + "-wrapper", className: "string2"}, [
        e("div", { key: "string_" + this.props.number + "-flet_0", className: "flet-0", onClick: ()=>this.press(0)}, [this.mark_open_string()]),
        e("div", { key: "string_" + this.props.number + "-flet_1", className: "flet2", onClick: ()=>this.press(1)}, [this.mark_press(1)]),
        e("div", { key: "string_" + this.props.number + "-flet_2", className: "flet2", onClick: ()=>this.press(2)}, [this.mark_press(2)]),
        e("div", { key: "string_" + this.props.number + "-flet_3", className: "flet2", onClick: ()=>this.press(3)}, [this.mark_press(3)]),
        e("div", { key: "string_" + this.props.number + "-flet_4", className: "flet2", onClick: ()=>this.press(4)}, [this.mark_press(4)]),      
        e("div", { key: "string_" + this.props.number + "-flet_5", className: "flet2", onClick: ()=>this.press(5)}, [this.mark_press(5)]),      
        e("div", { key: "string_" + this.props.number + "-flet_6", className: "flet2", onClick: ()=>this.press(6)}, [this.mark_press(6)]),      
        e("div", { key: "string_" + this.props.number + "-flet_7", className: "flet2", onClick: ()=>this.press(7)}, [this.mark_press(7)]),      
        e("div", { key: "string_" + this.props.number + "-flet_8", className: "flet2", onClick: ()=>this.press(8)}, [this.mark_press(8)]),      
        e("div", { key: "string_" + this.props.number + "-flet_9", className: "flet2", onClick: ()=>this.press(9)}, [this.mark_press(9)]),      
        e("div", { key: "string_" + this.props.number + "-flet_10", className: "flet2", onClick: ()=>this.press(10)}, [this.mark_press(10)]),      
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

      context.fillRect(30, 15, 8, 157);

      context.fillRect(30, 15,  700, 2);
      context.fillRect(30, 46,  700, 2);
      context.fillRect(30, 77,  700, 2);
      context.fillRect(30, 108, 700, 2);
      context.fillRect(30, 139, 700, 2);
      context.fillRect(30, 170, 700, 2);

      context.fillRect(68, 15, 2, 157);
      context.fillRect(100, 15, 2, 157);
      context.fillRect(132, 15, 2, 157);
      context.fillRect(164, 15, 2, 157);
      context.fillRect(196, 15, 2, 157);
      context.fillRect(228, 15, 2, 157);
      context.fillRect(260, 15, 2, 157);
      context.fillRect(292, 15, 2, 157);
      context.fillRect(324, 15, 2, 157);
      context.fillRect(356, 15, 2, 157);
    }
  }

  render() {
    return e("div", {key: "finger-board", id: "finger-board2"}, [
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
