
let grid= document.getElementById("grid-con");
let grid_style=document.getElementsByClassName("grid-item");
let form=document.getElementById("form");
let demo=document.getElementById("demo");  
let r=3;
let col=3;

//Submit form that prevents the grid from Resetting to orginal grid
form.addEventListener("submit",function(event){
    console.log(clear);
    event.preventDefault();
    console.log(event);
    createGrid(r,col);
})
createGrid(r,col);


function createGrid(r,col) {
    grid.innerHTML='';
    document.documentElement.style.setProperty('--col',col);
    document.documentElement.style.setProperty('--row',r);
    for(let i=0;i<r*col;i++){
        grid.innerHTML+="<div class='grid-item'></div>";
    }

};
let row_adder=document.getElementById("add-row");
row_adder.addEventListener("click",function(event){
    event.preventDefault();
    r+=1;
    createGrid(r,col);

})
let col_adder=document.getElementById("add-columns");
col_adder.addEventListener("click",function(event){
    event.preventDefault();
    col+=1;
    createGrid(r,col);
})
let row_sub=document.getElementById("remove-row");
row_sub.addEventListener("click",function(event){
    event.preventDefault();
    r-=1;
    createGrid(r,col);
})
let col_sub=document.getElementById("remove-columns");
col_sub.addEventListener("click",function(event){
    event.preventDefault();
    col-=1;
    createGrid(r,col);
})






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
