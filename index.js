const gridContainer = document.querySelector("#grid-container");

const createGrid = () => {
    let rowContainer = document.createElement('div');

    for(let i = 0 ; i <=255 ; i++){
        let squareDiv = document.createElement('div');
        if(i === 0){
                gridContainer.appendChild(rowContainer)
                rowContainer.appendChild(squareDiv);
                rowContainer.classList.add('inner-row')
                squareDiv.textContent = `square ${i + 1}`
                squareDiv.classList.add('innerSquare')
                console.log('is zero');
            } else if ((i+1) % 16 === 0) {
                rowContainer.appendChild(squareDiv);
                squareDiv.textContent = `square ${i + 1}`
                squareDiv.classList.add('innerSquare')
                console.log('divisible by 4');
                rowContainer = document.createElement('div');
                gridContainer.appendChild(rowContainer);
                rowContainer.classList.add('inner-row')

            } else {
                rowContainer.appendChild(squareDiv);
                squareDiv.textContent = `square ${i + 1}`
                console.log('not divisible by 4')
                squareDiv.classList.add('innerSquare')

        }
    }
}

createGrid();