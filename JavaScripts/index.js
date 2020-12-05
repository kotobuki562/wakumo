function nav() {
  const button = document.getElementById("button");
  button.addEventListener("click", (e) => {
    const A = document.getElementById("A");
    if (A.getAttribute("style") == "display:block; display: flex;") {
      A.removeAttribute("style", "display:block;");
    } else {
      A.setAttribute("style", "display:block; display: flex;");
    }
    e.preventDefault();
  });
}
window.addEventListener("load", nav);

function nav2() {
  const button2 = document.getElementById("button2");
  button2.addEventListener("click", (e) => {
    const B = document.getElementById("B");
    if (B.getAttribute("style") == "display:block; display: flex;") {
      B.removeAttribute("style", "display:block;");
    } else {
      B.setAttribute("style", "display:block; display: flex;");
    }
    e.preventDefault();
  });
}
window.addEventListener("load", nav2);

function nav3() {
  const button3 = document.getElementById("button3");
  button3.addEventListener("click", (e) => {
    const C = document.getElementById("C");
    if (C.getAttribute("style") == "display:block; display: flex;") {
      C.removeAttribute("style", "display:block;");
    } else {
      C.setAttribute("style", "display:block; display: flex;");
    }
    e.preventDefault();
  });
}
window.addEventListener("load", nav3);
