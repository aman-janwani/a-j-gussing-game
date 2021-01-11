const box = document.querySelector(".box");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const form = document.querySelector(".form__box");
const scoreboard = document.querySelector(".score");
const p = document.querySelector("p");
let score = 0;

if (localStorage.getItem("score")) {
    const aman = localStorage.getItem("score");
    score = score + parseInt(aman);
    scoreboard.textContent = ` Score : ${score}`;
}

const number = Math.round(Math.random() * 5);
// p.textContent = number;
console.log(number);

function checkNumber() {
    const enternum = parseInt(input.value.trim());
    form.reset();
    console.log(enternum, number);
    if (enternum === number) {
        score++;
        localStorage.setItem("score", score);

    }

}


form.addEventListener("submit", (e) => {
    checkNumber();
});
setInterval(() => {
    if (localStorage.getItem("score") === "5") {
        const html = `
        <div class="form__box">
            <h1 class="aman">CONGRATULATION YOU HAVE WIN THE WHOLE GAME</h1>
        </div>
        `;
        box.innerHTML = html;
        scoreboard.style.display = "none";
    }
}, 1000);