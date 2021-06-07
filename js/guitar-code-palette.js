const MAX_STRING = 6;
const MAX_FLET = 15;


class FingerBoard {
    constructor() {
        this.tuning = [64, 59, 55, 50, 45, 40];
        this.press_point = [0, 0, 0, 0, 0, 0];
    }

    SCALE_DICT = {
        "5": [0,7],
        "maj": [0,4,7],
        "m": [0,3,7],
        "(-5)": [0,4,6],
        "m-5": [0,3,6],
        "aug": [0,4,8],
        "sus4": [0,5,7],
        "sus2": [0,2,7],
    }

    pressString(string, flet) {
        if (this.press_point[string-1] == flet) {
            this.press_point[string-1] = 0;
        } else {
            this.press_point[string-1] = flet;
        }
        this.update();
        this.predictCode();
    }

    update() {
        for(let i=1; i<=MAX_FLET; i++) {
            for(let j=1; j<=MAX_STRING; j++) {
                let p = document.getElementById('string-press-' + j + '-flet-' + i);
                if (this.press_point[j-1] == i) {
                    p.style.visibility = 'visible'
                } else {
                    p.style.visibility = 'hidden'
                }   
            }
        }
    }

    predictCode() {
        let root = this.getRoot();
        let scale = this.getNowScale();
        console.log(scale);
        const code = Object.keys(this.SCALE_DICT).filter((key) => {
            return this.SCALE_DICT[key].toString() === scale.toString();
        });
        console.log(code);
    }

    getRoot() {
        let scale = [];
        for(let j=0; j<=MAX_STRING-1; j++) {
            scale.push(this.tuning[j] + this.press_point[j]);
        }
        scale.sort(function(a,b){
            return (a < b ? -1 : 1);
        });
        let root = scale[0];
        return root;
    }

    getNowScale() {
        let scale = [];
        for(let j=0; j<=MAX_STRING-1; j++) {
            scale.push(this.tuning[j] + this.press_point[j]);
        }
        scale.sort(function(a,b){
            return (a < b ? -1 : 1);
        });
        let root = scale[0];
        for(let i=0; i<scale.length; i++) {
            scale[i] = scale[i] - root;
        }
        for(let i=0; i<scale.length; i++) {
            const octave_down = scale[i] - 12;
            if ((12 > octave_down) && (octave_down >= 0)) {
                scale[i] = scale[i] - 12;
            }
            else if ((24 > octave_down) && (octave_down >= 12)) {
                scale[i] = scale[i] - 24;
            }
        }
        scale = Array.from(new Set(scale));
        scale.sort(function(a,b){
            return (a < b ? -1 : 1);
        });
        return scale;
    }

    reset() {
        this.press_point = [0, 0, 0, 0, 0, 0];
        this.update();
    }
}

let fg = new FingerBoard();



const app = document.getElementById('app');

let finger_board = document.createElement('div');
finger_board.className = 'finger-board';
app.appendChild(finger_board);

let nut = document.createElement('div');
nut.className = 'nut';
finger_board.appendChild(nut);

// 15fletループ
for(let i=1; i<=MAX_FLET; i++) {
    let d = document.createElement('div');
    finger_board.appendChild(d);
    // 6stringループ
    for(let j=1; j<=MAX_STRING; j++) {
        let string = document.createElement('div');
        string.className = 'string';
        string.id = 'string-' + j + '-flet-' + i;

        let string_press = document.createElement('div');
        string_press.className = 'string-press';
        string_press.id = 'string-press-' + j + '-flet-' + i;

        let string_area = document.createElement('div');
        string_area.className = 'string-area';
        string_area.appendChild(string);
        string_area.appendChild(string_press);

        string_area.addEventListener('click', function() {
            fg.pressString(j, i);
        });

        d.appendChild(string_area);
    }
    let flet = document.createElement('div');
    flet.className = 'flet';
    finger_board.appendChild(flet);
}

let reset_btn = document.getElementById('reset');
reset_btn.addEventListener('click', function(event) {
    fg.reset();
});
