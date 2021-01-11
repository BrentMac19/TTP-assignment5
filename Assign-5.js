// function that builds a grid in the "container"
let grid= document.getElementById("grid-con");
let grid_style=document.getElementsByClassName("grid-item");
console.log(grid);
let r=6;
let col=6;
createGrid(r,col);


function createGrid(r,col) {
    document.documentElement.style.setProperty('--col',col);
    document.documentElement.style.setProperty('--row',r);
    for (let rows = 0; rows < r; rows++) {
        for (let columns = 0; columns < col; columns++) {
            grid.innerHTML+="<div class='grid-item'></div>";
        }
    }

};


// // function that clears the grid
// function clearGrid(){
//     $(".grid-item").remove();
// };  

// // function that prompts the user to select the number of boxes in a new grid
// // the function then also creates that new grid
// function refreshGrid(){
//     var z = prompt("How many boxes per side?");
//     clearGrid();
//     createGrid(z);
// };

// // create a 16x16 grid when the page loads
// // creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// // allows the click of a button to prompt the user to create a new grid
// $(document).ready(function() {
//     createGrid(16);

//     $(".grid-item").mouseover(function() {
//         $(this).css("background-color", "black");
//         });

//     $(".grid-container").click(function() {
//         refreshGrid();

//         $(".grid-item").mouseover(function() {
//         $(this).css("background-color", "black");
//         });
//     });
// });
