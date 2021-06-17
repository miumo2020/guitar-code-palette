"use strict";

const e = React.createElement;

class String extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      position: -1,
    };
    this.press = this.press.bind(this);
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
      e("div", { class: "string2", id: this.state.name }, [
        e("div", { class: "flet2", onClick: ()=>this.press(0)}, [flet_0]),
        e("div", { class: "flet2", onClick: ()=>this.press(1)}, [this.state.position == 1 ? "●" : ""]),
        e("div", { class: "flet2", onClick: ()=>this.press(2)}, [this.state.position == 2 ? "●" : ""]),
        e("div", { class: "flet2", onClick: ()=>this.press(3)}, [this.state.position == 3 ? "●" : ""]),
        e("div", { class: "flet2", onClick: ()=>this.press(4)}, [this.state.position == 4 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.press(5)}, [this.state.position == 5 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.press(6)}, [this.state.position == 6 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.press(7)}, [this.state.position == 7 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.press(8)}, [this.state.position == 8 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.press(9)}, [this.state.position == 9 ? "●" : ""]),      
        e("div", { class: "flet2", onClick: ()=>this.press(10)}, [this.state.position == 10 ? "●" : ""]),      
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
  }

  render() {
    return e("div", {}, [
      e(String, { name: "string_1" }, []),
      e(String, { name: "string_2" }, []),
      e(String, { name: "string_3" }, []),
      e(String, { name: "string_4" }, []),
      e(String, { name: "string_5" }, []),
      e(String, { name: "string_6" }, []),
    ]);
  }
}
