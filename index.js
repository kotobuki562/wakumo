function nav() {
  const button = document.getElementById("button");
  button.addEventListener("click", (e) => {
    const A = document.getElementById("A");
    if (A.getAttribute("style") == "display:block;") {
      A.removeAttribute("style", "display:block;");
    } else {
      A.setAttribute("style", "display:block;");
    }
    e.preventDefault();
  });
}
window.addEventListener("load", nav);
