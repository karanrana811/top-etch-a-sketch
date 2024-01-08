const gridContainer = document.querySelector("#grid-container");
const squareDivs = [];
const resizeButton = document.querySelector(".resize-button")
let newDimension;

const createGrid = (dimension) => {
    let rowContainer = document.createElement('div');
    console.log(dimension*dimension)
    for(let i = 0 ; i <=(dimension ? (dimension*dimension - 1): 255) ; i++){
        let squareDiv = document.createElement('div');
        if(i === 0){
                gridContainer.appendChild(rowContainer)
                rowContainer.appendChild(squareDiv);
                rowContainer.classList.add('inner-row')
                squareDiv.classList.add('innerSquare')
            } else if ((i+1) % dimension === 0) {
                rowContainer.appendChild(squareDiv);
                squareDiv.classList.add('innerSquare')
                rowContainer = document.createElement('div');
                gridContainer.appendChild(rowContainer);
                rowContainer.classList.add('inner-row')

            } else {
                rowContainer.appendChild(squareDiv);
                squareDiv.classList.add('innerSquare')

        }
        squareDivs.push(squareDiv)
    }
}

const fillSquares = () => {
    squareDivs.forEach((squareDiv) => {
    squareDiv.addEventListener('mouseover', () => {
        squareDiv.classList.add('hovered')
    })
}) }

createGrid(16);
fillSquares();

resizeButton.addEventListener('click', () => {
    newDimension = +prompt('Enter the new length of the grid');
    while ((newDimension % 1 != 0) || (newDimension <= 0)){
        newDimension = +prompt('Please enter a positive number');
    }
    gridContainer.textContent = '';
    createGrid(newDimension);
    fillSquares();
})



