"use strict";

const e = React.createElement;

class String extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: props.number,
      position: -1,
    };
    this.press = this.press.bind(this);
    this.setPressPoint = props.setPressPoint.bind(this);
  }

  press(pos) {
    let new_pos = -1;
    if (this.state.position != pos) {
      new_pos = pos;
    }
    this.setState({
      position: new_pos,
    });
    this.setPressPoint(this.state.number, new_pos)
  }

  mark_press(pos) {
    return(
      this.state.position == pos ? 
      e("div", {key: "string_"+this.state.number+"-flet_"+pos+"-pressed", className: "string2-press"}, [] ) : ""
    )
  }

  render() {
    let flet_0 = ""
    if(this.state.position==0){
        flet_0 = "〇"
    } else if(this.state.position==-1){
        flet_0 = "×"
    }
    return(
      e("div", { key: "string_" + this.state.number + "-wrapper", className: "string2", id: this.state.name }, [
        e("div", { key: "string_" + this.state.number + "-flet_0", className: "flet2", onClick: ()=>this.press(0)}, [flet_0]),
        e("div", { key: "string_" + this.state.number + "-flet_1", className: "flet2", onClick: ()=>this.press(1)}, [this.mark_press(1)]),
        e("div", { key: "string_" + this.state.number + "-flet_2", className: "flet2", onClick: ()=>this.press(2)}, [this.mark_press(2)]),
        e("div", { key: "string_" + this.state.number + "-flet_3", className: "flet2", onClick: ()=>this.press(3)}, [this.mark_press(3)]),
        e("div", { key: "string_" + this.state.number + "-flet_4", className: "flet2", onClick: ()=>this.press(4)}, [this.mark_press(4)]),      
        e("div", { key: "string_" + this.state.number + "-flet_5", className: "flet2", onClick: ()=>this.press(5)}, [this.mark_press(5)]),      
        e("div", { key: "string_" + this.state.number + "-flet_6", className: "flet2", onClick: ()=>this.press(6)}, [this.mark_press(6)]),      
        e("div", { key: "string_" + this.state.number + "-flet_7", className: "flet2", onClick: ()=>this.press(7)}, [this.mark_press(7)]),      
        e("div", { key: "string_" + this.state.number + "-flet_8", className: "flet2", onClick: ()=>this.press(8)}, [this.mark_press(8)]),      
        e("div", { key: "string_" + this.state.number + "-flet_9", className: "flet2", onClick: ()=>this.press(9)}, [this.mark_press(9)]),      
        e("div", { key: "string_" + this.state.number + "-flet_10", className: "flet2", onClick: ()=>this.press(10)}, [this.mark_press(10)]),      
      ])
    )
  }
}

export class FingerBoard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tuning: [52, 47, 43, 38, 33, 28],
      press_point: [-1, -1, -1, -1, -1, -1],
    };
    this.setPressPoint = this.setPressPoint.bind(this);
  }

  setPressPoint = (string, point) => {
    console.log(string, point);
    let new_press_point = this.state.press_point;
    new_press_point[string-1] = point
    this.setState({press_point: this.state.press_point})
  }

  render() {
    console.log(this.state.press_point);
    return e("div", {key: "strings"}, [
      e("div", {key: "test_press_point"}, [this.state.press_point]),
      e(String, { key: "string_1", number: 1, setPressPoint: this.setPressPoint }, []),
      e(String, { key: "string_2", number: 2, setPressPoint: this.setPressPoint }, []),
      e(String, { key: "string_3", number: 3, setPressPoint: this.setPressPoint }, []),
      e(String, { key: "string_4", number: 4, setPressPoint: this.setPressPoint }, []),
      e(String, { key: "string_5", number: 5, setPressPoint: this.setPressPoint }, []),
      e(String, { key: "string_6", number: 6, setPressPoint: this.setPressPoint }, []),
    ]);
  }
}
