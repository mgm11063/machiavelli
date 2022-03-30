const a = document.getElementById('my_computer');
const winbox1 = document.getElementById("winbox-1");
const closeBtn = winbox1.querySelector("");


function showConsole() {
  new WinBox("내 컴퓨터", {
    class: "no-full no-animation no-shadow",
    x: "350rem",
    y: "200rem",
    width: "500px",
    height: "500px",
    mount: document.getElementById("content")
      .cloneNode(true)
  });
}

function closeWinModal(event) {
  console.log("adfadsfadfs");
}


a.addEventListener('dblclick', showConsole);
winbox1.addEventListener("click", closeWinModal);