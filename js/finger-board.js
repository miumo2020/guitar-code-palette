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
      e("div", {className: "string2-press"}, [] ) : ""
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
      e("div", { class: "string2", id: this.state.name }, [
        e("div", { class: "flet2", onClick: ()=>this.press(0)}, [flet_0]),
        e("div", { class: "flet2", onClick: ()=>this.press(1)}, [this.mark_press(1)]),
        e("div", { class: "flet2", onClick: ()=>this.press(2)}, [this.mark_press(2)]),
        e("div", { class: "flet2", onClick: ()=>this.press(3)}, [this.mark_press(3)]),
        e("div", { class: "flet2", onClick: ()=>this.press(4)}, [this.mark_press(4)]),      
        e("div", { class: "flet2", onClick: ()=>this.press(5)}, [this.mark_press(5)]),      
        e("div", { class: "flet2", onClick: ()=>this.press(6)}, [this.mark_press(6)]),      
        e("div", { class: "flet2", onClick: ()=>this.press(7)}, [this.mark_press(7)]),      
        e("div", { class: "flet2", onClick: ()=>this.press(8)}, [this.mark_press(8)]),      
        e("div", { class: "flet2", onClick: ()=>this.press(9)}, [this.mark_press(9)]),      
        e("div", { class: "flet2", onClick: ()=>this.press(10)}, [this.mark_press(10)]),      
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
    return e("div", {}, [
      e("div", {}, [this.state.press_point]),
      e(String, { number: 1, setPressPoint: this.setPressPoint }, []),
      e(String, { number: 2, setPressPoint: this.setPressPoint }, []),
      e(String, { number: 3, setPressPoint: this.setPressPoint }, []),
      e(String, { number: 4, setPressPoint: this.setPressPoint }, []),
      e(String, { number: 5, setPressPoint: this.setPressPoint }, []),
      e(String, { number: 6, setPressPoint: this.setPressPoint }, []),
    ]);
  }
}
