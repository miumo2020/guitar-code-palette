"use strict";

const MAX_STRING = 6; // TODO: 定数をまとめる

export class GuitarSound {
  constructor() {
    this.sound = null;

    // オーディオスプライト定義jsonファイルを取得
    fetch("assets/audio/guitar-sounds.json")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.createHowler(result);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  createHowler(json) {
    // jsonファイルからHowler用引数生成
    let howl_src = [];
    for (let i = 0; i < json.resources.length; i++) {
      howl_src.push("assets/audio/" + json.resources[i]);
    }
    let howl_sprite = {};
    for (let key in json.spritemap) {
      let target = json.spritemap[key];
      howl_sprite[key] = [
        target.start * 1000,
        (target.end - target.start) * 1000,
        target.loop,
      ];
    }

    // Howlerインスタンス生成
    this.sound = new Howl({
      src: howl_src,
      sprite: howl_sprite,
      volume: 0.5,
    });
  }

  soundCord(position) {
    if (this.sound == null) return;

    this.sound.stop();
    let delay_time = 40.0; // msec
    let delay = 0;
    for (let j = MAX_STRING; j >= 1; j--) {
      const func = () => {
        if (position[j - 1] >= 0) {
          let tone = "tone_" + j + "-" + position[j - 1];
          this.sound.play(tone);
        }
      };
      setTimeout(func, delay);
      delay = delay + delay_time;
    }
  }

  soundCords(score, bpm) {
    this.sound.stop();

    let interval = ((60 / bpm) * 1000) * 4; // bpmに対する1小節のmsec
    let play_time = 0;
    for(let i = 0; i < score.length; i++){
      const func = () => {
        if(score[i].position != null){
          this.soundCord(score[i].position);
        }
      };
      setTimeout(func, play_time);
      play_time += interval;
    }
  }

}
