function onInput(buttonEl) {
    var inputEl = document.getElementById("calc-input");
  
    var text = buttonEl.innerHTML;
  
    if ((text === "0" || text === "00") && inputEl.value === "") {
      return;
    }
  
    inputEl.value += text;
  }
  
  function clearAll() {
    var inputEl = document.getElementById("calc-input");
  
    inputEl.value = "";
  }
  
  function SingleDelete() {
    var inputEl = document.getElementById("calc-input");
  
    inputEl.value = inputEl.value.slice(0, -1);
  }
  
  function onEqual() {
    var inputEl = document.getElementById("calc-input");
    inputEl.value = eval(inputEl.value);
  }