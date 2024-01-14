const gridContainer = document.querySelector("#grid-container");
const squareDivs = [];
const resizeButton = document.querySelector(".resize-button")
let newDimension;

const createGrid = (dimension) => {
    let rowContainer = document.createElement('div');
    for(let i = 0 ; i <=(dimension ? (dimension*dimension - 1): 255) ; i++){
        let squareDiv = document.createElement('div');
        if(i === 0){
                gridContainer.appendChild(rowContainer)
                rowContainer.appendChild(squareDiv);
                rowContainer.classList.add('inner-row')
                squareDiv.classList.add('innerSquare')
            } else if ((i+1) % dimension === 0) {
                    
                if (i === (dimension*dimension - 1)){
                    
                    rowContainer.appendChild(squareDiv);
                    squareDiv.classList.add('innerSquare')
                } else {
                    rowContainer.appendChild(squareDiv);
                    squareDiv.classList.add('innerSquare')
                    rowContainer = document.createElement('div');
                    gridContainer.appendChild(rowContainer);
                    rowContainer.classList.add('inner-row');
                    
                }

            } else {
                rowContainer.appendChild(squareDiv);
                squareDiv.classList.add('innerSquare')

        }
        squareDivs.push(squareDiv)
    }
}

const fillSquares = () => {
    squareDivs.forEach((squareDiv) => {
    let opacity = 0;
    squareDiv.addEventListener('mouseover', (event) => {
        squareDiv.style.background = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${opacity >= 1 ?opacity : opacity += 0.1 })`
    })
}) }

createGrid(16);
fillSquares();

resizeButton.addEventListener('click', () => {
    newDimension = +prompt('Enter the new length of the grid');
    while ((newDimension % 1 != 0) || ( 0 >= newDimension) || (newDimension > 100)){
        newDimension = +prompt('Please enter a positive number smaller than 100');
    }
    gridContainer.textContent = '';
    createGrid(newDimension);
    fillSquares();
})



