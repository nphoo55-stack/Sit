//
// Variables
//
const list          = document.getElementById("list");
const showGPAResult = document.getElementById("show-gpa-result");
const showHistory   = document.getElementById("show-history");
const buttonAdd     = document.getElementById("buttonAdd");
const buttonReset   = document.getElementById("buttonReset");
const buttonCal     = document.getElementById("buttonCal");

console.log(list)
//
// Methods
//
function handleAdd() {
  console.log("Handle Add")
}

function handleReset() {
  console.log("Handle Reset")
}

function handleCal() {
  console.log("Handle Calculate")
}

//
// Inits & Event Listeners
buttonAdd.addEventListener("click", handleAdd);
buttonReset.addEventListener("click", handleReset);
buttonCal.addEventListener("click", handleCal);
//