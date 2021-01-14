let numRows = 1;
let numCols = 1;

let cellColored = false;
let dragColoring = false;

//Adding Row
function addRow(){
    let grid = document.getElementById('grid');
    let newRow = document.createElement("tr");

    for(let i = 0; i < numCols; i++) {
        let cell = document.createElement("td");
        newRow.appendChild(cell);
        changeColor(cell);
    }
    grid.appendChild(newRow);
    numRows++;
}

//Adding Column
function addCol(){
    let rows = document.querySelectorAll("tr");
    let rowIndex = 0;

    for(let i = 0; i < numRows; i++) {
        let cell = document.createElement("td");
        changeColor(cell);
        rows[rowIndex].appendChild(cell);
        rowIndex++;
    }
    numCols++;
}

//Removing Row
function removeRow(){
    let grid = document.getElementById('grid');
    grid.deleteRow(numRows-1);
    numRows--;
}

//Removing Column
function removeCol(){
    let rows = document.querySelectorAll("tr");
    let rowIndex = 0;
    for(let i = 0; i < numRows; i++) {
        rows[rowIndex].removeChild(rows[rowIndex].lastChild);
        rowIndex++;
    }
    numCols--;
}


//setting Drop List color to a variable
let chosenColor = 'pink';
const chooseColor = (color) => {
  chosenColor = color;
};

function changeColor(cell) {
    cell.classList.add('isNotColored');
    //Changing Color on a click
    cell.addEventListener('click', colorChanged);

    //test if user is holding mouse button down
    cell.addEventListener('mousedown', (e) => {
        cellColored = true;
  });
  //used to tell if the user is not holding the mouse button
  cell.addEventListener('mouseup', (e) => {
    if (cellColored) {
    cellColored = false;
    }
  });
  //used to color the grid while moving the mouse
  cell.addEventListener('mousemove', (e) => {
    if (cellColored) {
        cell.style.backgroundColor = chosenColor;
        cell.classList.remove('isNotColored');
    }
  });
}

function colorChanged() {
  this.style.backgroundColor = chosenColor;
  this.classList.remove('isNotColored');
}

//Filling all blank buttons with selected color
function fillAllBlank() {
    let cells = document.getElementsByTagName('td');
    let cellsList = [...cells];

    const uncoloredCells = cellsList.filter(cell => {
        return cell.classList.contains('isNotColored');
    });

    uncoloredCells.forEach(cell => {
        cell.style.backgroundColor = chosenColor;
        cell.classList.remove('isNotColored');
    })
}

//Changing the color of all the cells to selected color
function fillAll(){
    let cells = document.getElementsByTagName('td');
    let cellsList = [...cells];

    cellsList.forEach(cell => {
        cell.style.backgroundColor = chosenColor;
        cell.classList.remove('isNotColored');
    })
}

//Clearing all the Cells color
function clearAll() {
    let cells = document.getElementsByTagName('td');
    let cellsList = [...cells];

    cellsList.forEach(cell => {
        cell.style.backgroundColor = 'white';
        cell.classList.add('isNotColored');
    })
}


//any starting cells
let cells = document.getElementsByTagName('td');
let cellList = [...cells];

for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    changeColor(cell);
}

