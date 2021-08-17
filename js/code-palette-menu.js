"use strict";

const e = React.createElement;

export class CodePaletteMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ref_menu = React.createRef();
    this.ref_out = React.createRef();
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.onOutOfRangeClick = this.onOutOfRangeClick.bind(this);
  }

  show(pos_x, pos_y) {
    this.ref_menu.current.style.top = pos_y + "px";
    this.ref_menu.current.style.left = pos_x + "px";
    this.ref_menu.current.style.visibility = "visible";
    this.ref_out.current.style.visibility = "visible";
  }

  close() {
    this.ref_menu.current.style.visibility = "hidden";
    this.ref_out.current.style.visibility = "hidden";
  }

  onMenuItemClick(event) {
    alert(event.target.innerHTML)
    this.close();
  }

  onOutOfRangeClick(event) {
    this.close();
  }

  render() {
    return [
      e("div", { key: "menu-box", className: "palette-menu-box", ref: this.ref_menu }, [
        e("div", { key: "menu-item-1", className: "palette-menu-item", onClick: this.onMenuItemClick }, ["item-1"]),
        e("div", { key: "menu-item-2", className: "palette-menu-item", onClick: this.onMenuItemClick }, ["item-2"]),
        e("div", { key: "menu-item-3", className: "palette-menu-item", onClick: this.onMenuItemClick }, ["item-3"]),
        e("div", { key: "menu-item-delete", className: "palette-menu-item", onClick: this.onMenuItemClick }, [
          e("img", { key: "garbage-icon", src: "assets/image/garbage-icon.svg", className: "palette-garbage-icon", onClick: this.onMenuItemClick }),
          "delete"
        ]),
      ]),
      e("div", {
        key: "out-of-range-menu-box", className: "out-of-range-menu-box",
        onClick: this.onOutOfRangeClick, ref: this.ref_out
      })
    ];
  }
}