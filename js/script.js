//Variables

const showMoreEl = document.querySelector(".show");
const summary2El = document.querySelector(".summary2");


// Toggle Comments

showMoreEl.addEventListener("click", () => {
    summary2El.classList.toggle("display");
    if(summary2El.classList.contains("display")) {
        showMoreEl.innerHTML = "SHOW MORE";
    }
    else showMoreEl.innerHTML = "SHOW LESS";
});