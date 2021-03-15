let ths = document.querySelectorAll(".th");
let all_th = document.querySelectorAll(".th");
let before_th = document.querySelector(".none");

const ally_space = document.querySelector(".ally_space");
const enemy_space = document.querySelector(".enemy_space");

let now_select;
let next_selects = [];

//enemy or ally
let type = "ally";

let final_answer = false;
let final = false;

//成った駒たち
// let promoted_charas = {};

let limit_number = 1;

let x;
let y;

let default_math = -83; //ひとマス

function available_math(th) {
    next_selects = [];
    if (th.classList.contains("enemy")) {
        default_math = -83;
    } else if (th.classList.contains("ally")) {
        default_math = 83;
    }
    x = th.getBoundingClientRect().x;
    y = th.getBoundingClientRect().y;
    text = th.textContent;

    //相手のコマのタイプを指定 今の自分のタイプと反対に
    if (turn_enemy == false) {
        type = "enemy";
    } else if (turn_enemy == true) {
        type = "ally";
    }

    if (text == "歩") {
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
    } else if (text == "香") {
        for (let i = y - default_math; i > 0; i -= default_math) {
            next_select = document.elementFromPoint(x, i);
            if (next_select == null) {
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }
    } else if (text == "桂") {
        y -= default_math + default_math;
        x += default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
    } else if (text == "王" || text == "玉") {
        //上
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //下
        y += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右下
        x += default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左下
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右
        x += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右上
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左上
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
    } else if (text == "金" || text == "斤" || text == "成" || text == "と") {
        //下
        y += default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //上
        y -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //右上
        x += default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //左上
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //左
        y += default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //右
        x += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
    } else if (text == "銀") {
        //上
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //右上
        x += default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //左上
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //左下
        y += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
        //右下
        x += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        }
    } else if (text == "飛") {
        for (let i = y - default_math; i > 0; i -= default_math) {
            next_select = document.elementFromPoint(x, i);
            if (next_select == null) {
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else {
                break;
            }
        }
        for (let i = y + default_math; i < 670; i += default_math) {
            next_select = document.elementFromPoint(x, i);
            if (next_select == null) {
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else {
                break;
            }
        }
        for (let i = x + default_math; i < 1100; i += default_math) {
            next_select = document.elementFromPoint(i, y);
            console.log(i);
            console.log(y);
            if (next_select == null) {
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else {
                break;
            }
        }
        for (let i = x - default_math; i > 0; i -= default_math) {
            next_select = document.elementFromPoint(i, y);
            console.log(i);
            console.log(y);
            if (next_select == null) {
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else {
                break;
            }
        }
    } else if (text == "角") {
        for (i = x + default_math; i < 1100; i += default_math) {
            y -= default_math;
            next_select = document.elementFromPoint(i, y);
            console.log(next_select);
            if (next_select == null) {
                break;
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }

        y = th.getBoundingClientRect().y;
        for (i = x + default_math; i < 1100; i += default_math) {
            y += default_math;
            next_select = document.elementFromPoint(i, y);
            console.log(next_select);
            if (next_select == null) {
                break;
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }
        y = th.getBoundingClientRect().y;
        for (i = x - default_math; i > 0; i -= default_math) {
            y += default_math;
            next_select = document.elementFromPoint(i, y);
            console.log(next_select);
            if (next_select == null) {
                break;
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }
        y = th.getBoundingClientRect().y;
        for (i = x - default_math; i > 0; i -= default_math) {
            y -= default_math;
            next_select = document.elementFromPoint(i, y);
            console.log(next_select);
            if (next_select == null) {
                break;
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }
    } else if (text == "馬") {
        for (i = x + default_math; i < 1100; i += default_math) {
            y -= default_math;
            next_select = document.elementFromPoint(i, y);
            console.log(next_select);
            if (next_select == null) {
                break;
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }

        y = th.getBoundingClientRect().y;
        for (i = x + default_math; i < 1100; i += default_math) {
            y += default_math;
            next_select = document.elementFromPoint(i, y);
            console.log(next_select);
            if (next_select == null) {
                break;
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }
        y = th.getBoundingClientRect().y;
        for (i = x - default_math; i > 0; i -= default_math) {
            y += default_math;
            next_select = document.elementFromPoint(i, y);
            console.log(next_select);
            if (next_select == null) {
                break;
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }
        y = th.getBoundingClientRect().y;
        for (i = x - default_math; i > 0; i -= default_math) {
            y -= default_math;
            next_select = document.elementFromPoint(i, y);
            console.log(next_select);
            if (next_select == null) {
                break;
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else {
                break;
            }
        }
        x = th.getBoundingClientRect().x;
        y = th.getBoundingClientRect().y;
        //上
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //下
        y += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右下
        x += default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左下
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右
        x += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右上
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左上
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
    } else if (text == "龍") {
        for (let i = y - default_math; i > 0; i -= default_math) {
            next_select = document.elementFromPoint(x, i);
            if (next_select == null) {
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else {
                break;
            }
        }
        for (let i = y + default_math; i < 670; i += default_math) {
            next_select = document.elementFromPoint(x, i);
            if (next_select == null) {
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else {
                break;
            }
        }
        for (let i = x + default_math; i < 1100; i += default_math) {
            next_select = document.elementFromPoint(i, y);
            console.log(i);
            console.log(y);
            if (next_select == null) {
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else {
                break;
            }
        }
        for (let i = x - default_math; i > 0; i -= default_math) {
            next_select = document.elementFromPoint(i, y);
            console.log(i);
            console.log(y);
            if (next_select == null) {
                break;
            } else if (next_select.textContent == "　") {
                next_select.classList.add("next");
                next_selects.push(next_select);
            } else if (next_select.classList.contains(type)) {
                next_select.classList.add("get");
                next_selects.push(next_select);
                break;
            } else {
                break;
            }
        }
        //上
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //下
        y += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右下
        x += default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左下
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右
        x += default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //右上
        y -= default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
        //左上
        x -= default_math + default_math;
        next_select = document.elementFromPoint(x, y);
        if (next_select == null) {
        } else if (next_select.textContent == "　") {
            next_select.classList.add("next");
            next_selects.push(next_select);
        } else if (next_select.classList.contains(type)) {
            next_select.classList.add("get");
            next_selects.push(next_select);
        }
    }

    if (next_selects.length) {
        // 次行けるマスをクリックしたら→移動する
        window.setTimeout(function () {
            final_answer = confirm("final_answer?");
            if (final_answer) {
                for (let next_select of next_selects) {
                    next_select.addEventListener(
                        "click",
                        function () {
                            if (next_select.textContent == "王") {
                                alert("後手勝利");
                            } else if (next_select.textContent == "玉") {
                                alert("先手勝利");
                            }
                            th.textContent = "　";
                            th.classList.remove("touch");
                            // next_select.classList.remove("overload");
                            if (th.classList.contains("overload")) {
                                next_select.classList.add("overload");
                            }
                            th.classList.remove("overload");

                            next_select.classList.remove("touch");
                            next_select.classList.remove("ally");
                            // next_select.classList.remove("enemy");
                            turn_counts++;
                            if (th.classList.contains("enemy")) {
                                th.classList.remove("enemy");
                                next_select.classList.add("enemy");
                                turn_enemy = false;

                                if (next_select.textContent != "　") {
                                    let add_math;
                                    let all_ally_maths = document.querySelectorAll(
                                        ".enemy_c"
                                    );
                                    for (let math of all_ally_maths) {
                                        if (math.classList.contains("none")) {
                                            math.classList.remove("none");
                                            math.classList.add("play");
                                            add_math = math;
                                            break;
                                        }
                                    }
                                    if (
                                        next_select.classList.contains(
                                            "overload"
                                        )
                                    ) {
                                        if (next_select.textContent == "と") {
                                            add_math.textContent = "歩";
                                        } else if (
                                            next_select.textContent == "成"
                                        ) {
                                            add_math.textContent = "桂";
                                        } else if (
                                            next_select.textContent == "斤"
                                        ) {
                                            add_math.textContent = "香";
                                        } else if (
                                            next_select.textContent == "金"
                                        ) {
                                            add_math.textContent = "銀";
                                        } else if (
                                            next_select.textContent == "馬"
                                        ) {
                                            add_math.textContent = "角";
                                        } else if (
                                            next_select.textContent == "龍"
                                        ) {
                                            add_math.textContent = "飛";
                                        }
                                        next_select.classList.remove(
                                            "overload"
                                        );
                                    } else {
                                        add_math.textContent =
                                            next_select.textContent;
                                    }
                                }

                                next_select.textContent = text;
                                //成る処理
                                y = next_select.getBoundingClientRect().y;
                                if (y > 500) {
                                    text == "歩" ||
                                        text == "桂" ||
                                        text == "銀" ||
                                        text == "香" ||
                                        text == "飛" ||
                                        text == "角";
                                    {
                                        let sellect_answer = confirm(
                                            "成りますか？"
                                        );
                                        if (sellect_answer) {
                                            next_select.classList.remove(
                                                "ally"
                                            );
                                            next_select.classList.add(
                                                "overload"
                                            );
                                            if (text == "歩") {
                                                next_select.textContent = "と";
                                            } else if (text == "桂") {
                                                next_select.textContent = "成";
                                            } else if (text == "香") {
                                                next_select.textContent = "斤";
                                            } else if (text == "銀") {
                                                next_select.textContent = "金";
                                            } else if (text == "角") {
                                                next_select.textContent = "馬";
                                            } else if (text == "飛") {
                                                next_select.textContent = "龍";
                                            }
                                        } else {
                                            next_select.textContent = text;
                                        }
                                    }
                                }
                            } else if (th.classList.contains("ally")) {
                                th.classList.remove("ally");
                                next_select.classList.remove("enemy");
                                next_select.classList.add("ally");
                                turn_enemy = true;

                                if (next_select.textContent != "　") {
                                    //ally持ち駒スペースに追加
                                    // const create_element = document.createElement(
                                    //     "div"
                                    // );
                                    // create_element.classList.add("character");
                                    // create_element.classList.add("ally_c");

                                    let add_math;
                                    let all_ally_maths = document.querySelectorAll(".ally_c")
                                    for (let math of all_ally_maths) {
                                        if (math.classList.contains("none")) {
                                            math.classList.remove("none");
                                            math.classList.add("play");
                                            add_math = math;
                                            break;
                                        }
                                    }

                                    if (
                                        next_select.classList.contains(
                                            "overload"
                                        )
                                    ) {
                                        console.log("test2");
                                        add_math.textContent =
                                            next_select.textContent;
                                        if (next_select.textContent == "と") {
                                            add_math.textContent = "歩";
                                        } else if (
                                            next_select.textContent == "成"
                                        ) {
                                            add_math.textContent = "桂";
                                        } else if (
                                            next_select.textContent == "斤"
                                        ) {
                                            add_math.textContent = "香";
                                        } else if (
                                            next_select.textContent == "金"
                                        ) {
                                            add_math.textContent = "銀";
                                        } else if (
                                            next_select.textContent == "馬"
                                        ) {
                                            add_math.textContent = "角";
                                        } else if (
                                            next_select.textContent == "龍"
                                        ) {
                                            add_math.textContent = "飛";
                                        }
                                        next_select.classList.remove(
                                            "overload"
                                        );
                                    } else {
                                        add_math.textContent =
                                            next_select.textContent;
                                    }

                                    // ally_space.appendChild(create_element);
                                }

                                //成る処理
                                y = next_select.getBoundingClientRect().y;

                                next_select.textContent = text;
                                if (y < 200) {
                                    if (
                                        text == "歩" ||
                                        text == "桂" ||
                                        text == "銀" ||
                                        text == "香" ||
                                        text == "飛" ||
                                        text == "角"
                                    ) {
                                        let sellect_answer = confirm(
                                            "成りますか？"
                                        );
                                        if (sellect_answer) {
                                            next_select.classList.remove(
                                                "enemy"
                                            );
                                            next_select.classList.add(
                                                "overload"
                                            );
                                            if (text == "歩") {
                                                next_select.textContent = "と";
                                            } else if (text == "桂") {
                                                next_select.textContent = "成";
                                            } else if (text == "香") {
                                                // next_select.id = text;
                                                next_select.textContent = "斤";
                                            } else if (text == "銀") {
                                                next_select.textContent = "金";
                                            } else if (text == "角") {
                                                next_select.textContent = "馬";
                                            } else if (text == "飛") {
                                                next_select.textContent = "龍";
                                            }
                                        } else {
                                            next_select.textContent = text;
                                        }
                                    }
                                }
                            }

                            final_answer = false;
                            all_th.forEach((th) => {
                                th.classList.remove("next");
                                th.classList.remove("get");
                            });
                        },
                        { once: true }
                    );
                }
            } else {
                next_selects.forEach((next_select) => {
                    next_select.classList.remove("get");
                    next_select.classList.remove("next");
                    th.classList.remove("touch");
                });
            }
        }, 10);
    } else {
        alert("There's no space to put it.");
    }
}

let all_counts = 0; // 全体の回数
let turn_counts = 1; //ターンの合計回数
let turn_enemy = false; //敵のターンか

for (let th of ths) {
    // console.log("何回目ですか？"); 最初にすべて実行
    th.addEventListener("click", function (event) {
        console.log("th click");
        console.log(th);
        //持ち駒だったら...
        if (th.classList.contains("character") && th.textContent != "" && final == false) {
            console.log("th.classList.contains");
            if (turn_enemy == true && th.classList.contains("enemy_c")) {
                th.classList.add("touch"); //あとでtouchクラス外す final_answerしたらかな
                //持ち駒を置くようの関数
                putMath(th);
                // turn_enemy = false;
            } else if (turn_enemy == false && th.classList.contains("ally_c")) {
                th.classList.add("touch");
                putMath(th);
                // turn_enemy = true;
            }
        } else if (th.textContent != "　" && final_answer == false) {
            all_th.forEach((th) => {
                th.classList.remove("next");
                th.classList.remove("get");
            });

            console.log("thタグを持ってます");

            // 敵か味方か条件分岐
            if (th.classList.contains("enemy") && turn_enemy == true) {
                th.classList.add("touch");
                available_math(th);
                // next_selects = [];
            } else if (th.classList.contains("ally") && turn_enemy == false) {
                th.classList.add("touch");
                available_math(th);
                // next_selects = [];
            }

            before_th.classList.remove("touch");
            before_th = th;
        }
    });
}

//持ち駒を置く処理
let put_selects = [];
const mathes = document.querySelectorAll(".math");

let can_select = true;


function putMath(th) {
    console.log("putMath");
    // 敵の駒か自分の駒か判断用 今は使わん
    if (turn_enemy == false) {
        // type = "ally";
    } else if (turn_enemy == true) {
        // type = "enemy";
    }

    for (let math of mathes) {
        if (math.textContent == "　") {
            math.classList.add("next");
            put_selects.push(math);
        }
    }
    
    for (let put_select of put_selects) {
        can_select = true;
        put_select.addEventListener(
            "click",
            function () {
                if (can_select) {
                    put_select.textContent = th.textContent;
                    th.textContent = "";
                    th.classList.remove("touch");
                    th.classList.remove("play");
                    th.classList.add("none");
                    if (turn_enemy == false) {
                        put_select.classList.add("ally");
                        turn_enemy = true;
                    } else if (turn_enemy == true) {
                        put_select.classList.add("enemy");
                        turn_enemy = false;
                    }
                    all_th.forEach((th) => {
                        th.classList.remove("next");
                    });
                    final = false;
                    can_select = false;
                }
            },
            { once: true }
        );
    }
    
}
