window.onload = function() {
  displayBoard()  
}

let displayBoard = function(){ //creates chart
    let cellsContainerNode = document.getElementById("board-container")
    for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
        let newCellNode = document.createElement("div")
        newCellNode.innerText = cellNumber
        newCellNode.classList.add("cell")
        cellsContainerNode.appendChild(newCellNode)
    }
}

const randomizeNumber = function(){ //randomize number
    let randomNumber = Math.floor(Math.random() * 76) + 1
    return randomNumber
} 

// let selectCell = function() { //add .selected to div selected
//     let cellsContainerNode = document.getElementById("board-container")
//     let selectedCell = newCellNode.classList.add("selected")

//     if (selectedCell === randomNumber) {
//         selectedCell.style.backgroundcolor = "red"
//     }
// }



//if selectedCell === randomNumber style.backgroundcolor = "darkgrey"