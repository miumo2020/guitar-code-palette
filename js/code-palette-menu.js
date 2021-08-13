"use strict";

const e = React.createElement;

export class CodePaletteMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref = React.createRef();
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
  }

  show(pos_x, pos_y) {
    this.ref.current.style.top = pos_y + "px";
    this.ref.current.style.left = pos_x + "px";
    this.ref.current.style.visibility = "visible";
  }

  close() {
    this.ref.current.style.visibility = "hidden";
  }

  onMenuItemClick(event) {
    alert(event.target.innerHTML)
    this.close();
  }

  render() {
    return [
      e("div", { key: "menu-box", className: "palette-menu-box", ref: this.ref }, [
        e("div", { key: "menu-item-1", className: "palette-menu-item", onClick: this.onMenuItemClick }, ["item-1"]),
        e("div", { key: "menu-item-2", className: "palette-menu-item", onClick: this.onMenuItemClick }, ["item-2"]),
        e("div", { key: "menu-item-3", className: "palette-menu-item", onClick: this.onMenuItemClick }, ["item-3"]),
      ])
    ];
  }
}