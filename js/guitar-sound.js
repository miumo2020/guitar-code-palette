"use strict";

const MAX_STRING = 6; // TODO: 定数をまとめる

export class GuitarSound {
  constructor() {
  }

  sound(position) {
    let delay_time = 40.0; // msec
    let delay = 0;
    for (let j = MAX_STRING; j >= 1; j--) {
      const func = () => {
        if (position[j - 1] >= 0) {
          let audio = new Audio(
            "js/mp3/tone_" + j + "-" + position[j - 1] + ".mp3"
          );
          audio.play();
        }
      };
      setTimeout(func, delay);
      delay = delay + delay_time;
    }
  }

}