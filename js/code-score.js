"use strict";

import { CodeIcon } from "./code-icon.js";
import { GuitarSound } from "./guitar-sound.js"

const e = React.createElement;

export class CodeScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: Array(16).fill({ code_name: null, position: null }),
      bpm: 120
    }
    this.getSelectedCodePalette = this.props.getSelectedCodePalette.bind(this);
    this.setBpm = this.setBpm.bind(this);

    this.guitar_sound = new GuitarSound();
  }

  drawCode(target_num) {
    // CodePaletteクラスから選択中のパレットのコードを取得
    let selected_code_palette = this.getSelectedCodePalette();
    let update_score = [...this.state.score];
    update_score[target_num] = selected_code_palette;
    this.setState({ score: update_score });
  }

  playAll() {
    this.guitar_sound.soundCords(this.state.score, this.state.bpm);
  }

  setBpm(event) {
    this.setState({ bpm: event.target.value });
  }

  render() {
    let scores = [];
    for (let i = 0; i < 16; i++) {
      scores.push(
        e("div", { key: "score-code-" + String(i), className: "score-code", onClick: () => this.drawCode(i) }, [
          e(CodeIcon, { key: "code-" + String(i), codeName: this.state.score[i]["code_name"], position: this.state.score[i]["position"], })
        ]),
      );
    }

    return [
      "Code Score",
      e("div", {key: "play-all", className: "btn btn--green btn--cubic", onClick: ()=>{this.playAll()}}, ["PlayAll"]),
      "BPM: ",
      e("input", {key: "bpm-input", value: this.state.bpm, onChange: this.setBpm}),
      e("div", { key: "score-line", className: "score-line" }, scores),
    ];
  }
}