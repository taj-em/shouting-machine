function getAndSetForm() {
  const input1 = document.getElementById("input1").value;
  document.querySelector("span#input1Response").innerText = input1.toUpperCase();
};

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetForm();
    document.querySelector("div#response").removeAttribute("class");
  };
};