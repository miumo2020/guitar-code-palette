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
  }

  render() {
    let flet_0 = ""
    if(this.state.position==0){
        flet_0 = "〇"
    } else if(this.state.position==-1){
        flet_0 = "×"
    }
    return(
      // e("div", { class: "string2", id: this.state.name }, [
      //   e("div", { class: "flet2", onClick: ()=>this.press(0)}, [flet_0]),
      //   e("div", { class: "flet2", onClick: ()=>this.press(1)}, [this.state.position == 1 ? "●" : ""]),
      //   e("div", { class: "flet2", onClick: ()=>this.press(2)}, [this.state.position == 2 ? "●" : ""]),
      //   e("div", { class: "flet2", onClick: ()=>this.press(3)}, [this.state.position == 3 ? "●" : ""]),
      //   e("div", { class: "flet2", onClick: ()=>this.press(4)}, [this.state.position == 4 ? "●" : ""]),      
      //   e("div", { class: "flet2", onClick: ()=>this.press(5)}, [this.state.position == 5 ? "●" : ""]),      
      //   e("div", { class: "flet2", onClick: ()=>this.press(6)}, [this.state.position == 6 ? "●" : ""]),      
      //   e("div", { class: "flet2", onClick: ()=>this.press(7)}, [this.state.position == 7 ? "●" : ""]),      
      //   e("div", { class: "flet2", onClick: ()=>this.press(8)}, [this.state.position == 8 ? "●" : ""]),      
      //   e("div", { class: "flet2", onClick: ()=>this.press(9)}, [this.state.position == 9 ? "●" : ""]),      
      //   e("div", { class: "flet2", onClick: ()=>this.press(10)}, [this.state.position == 10 ? "●" : ""]),      
      // ])
      e("div", { class: "string2", id: this.state.name }, [
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 0)}, [flet_0]),
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 1)}, [this.state.position == 1 ? "●" : ""]),
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 2)}, [this.state.position == 2 ? "●" : ""]),
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 3)}, [this.state.position == 3 ? "●" : ""]),
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 4)}, [this.state.position == 4 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 5)}, [this.state.position == 5 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 6)}, [this.state.position == 6 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 7)}, [this.state.position == 7 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 8)}, [this.state.position == 8 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 9)}, [this.state.position == 9 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.setPressPoint(this.state.number, 10)}, [this.state.position == 10 ? "●" : ""]),      
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
  }

  // setPressPoint = (string, point) => {
  //   console.log(string, point);
  //   let new_press_point = this.state.press_point;
  //   new_press_point[string-1] = point
  //   // this.setState({press_point: this.state.press_point})
  //   this.setState((new_press_point) => {
  //     return {press_point: new_press_point}
  //   });
  // }

  render() {
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
