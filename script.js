const rows = document.getElementById("rows");
const columns = document.getElementById("columns");
const button = document.getElementById("btn-primary");
const table = document.getElementById("table");
let row = 0;
let column = 0;

const inputData = () => {
  row = +rows.value;
  column = +columns.value;
};

const renderFunction = () => {
  let number = 1;
  for (let i = 0; i < column; i++) {
    const col = document.createElement("div");
    col.className = "col";
    for (let j = 0; j < row; j++) {
      const items = document.createElement("div");
      items.className = "items";
      items.innerHTML = `${number}`;
      col.appendChild(items);
      number += 1;
    }
    table.appendChild(col);
  }
};

const reset = () => {
  rows.value = "";
  columns.value = "";
};
button.addEventListener("click", () => {
  console.log("Rows: " + row, "columns: " + column);
  inputData();
  renderFunction();
  reset();
});
