const winStart = document.getElementById("window_btn");
const winList = document.getElementById("win_list")

const HIDDEN_TEXT = "hidden"

function winToggle() {
    winList.classList.remove(HIDDEN_TEXT);
}
function winFocus() {
    winList.classList.add(HIDDEN_TEXT);
}

winStart.addEventListener("click", winToggle)
winList.addEventListener("click", winFocus)
