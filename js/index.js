/* Doing this all in one file bc the code is so small and it's just for a portfolio website so */

const skillItems = document.getElementById('skillItems');
const yrsSpan = document.getElementsByClassName('yrs')
const skillList = document.getElementById("front-end");
const expand = document.getElementById("expand");

let opened;

changeYrs();

function changeYrs() {
    for (let i = 0; i < yrsSpan.length; i++) {
        let count = 0;
        let y = yrsSpan[i].dataset.yrs;
        let c;
        c = setInterval(() => {
            count++;
            yrsSpan[i].innerHTML = `${count}+`;
            if (count >= y) {
                clearInterval(c);
            }
        }, 200);

    }
}

function openList() {
    opened = !opened;
    if (!opened) {
        changeYrs();
        skillList.style.display = "flex";
        expand.innerHTML = `<i class="fas fa-caret-down"></i>`;
    } else {
        for (let i = 0; i < yrsSpan.length; i++) {
            yrsSpan[i].innerHTML = '0+';
        }
        skillList.style.display = "none";
        expand.innerHTML = `<i class="fas fa-caret-right"></i>`;
    }
}