import "./style.css";
const textareaEl = document.getElementById("editor");
const myIframe = document.querySelector("iframe");
const myButtons = document.querySelector(".editor-buttons");

const textInEditors = ["", "", ""];
let currentEditorIdx = 0;

myButtons.addEventListener("click", (e) => {
  Array.from(myButtons.children).forEach((el, idx) => {
    if (el === e.target) {
      currentEditorIdx = idx;
      el.style.backgroundColor = "red";
      textareaEl.value = textInEditors[idx];
    } else {
      el.style.backgroundColor = "initial";
    }
    console.log(currentEditorIdx);
  });
});
textareaEl.addEventListener("input", (e) => {
  textInEditors[currentEditorIdx] = textareaEl.value;
  myIframe.srcdoc = `<html><head><style>${textInEditors[1]}</style></head><body>${textInEditors[0]}<script>${textInEditors[2]}</script></body></html>`;
  console.log(textareaEl.value);
  console.log(textInEditors);
});
