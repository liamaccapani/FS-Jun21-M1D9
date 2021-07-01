window.onload = function() {
  displayBoard()  
}

let displayBoard = function(){
    let cellsContainerNode = document.getElementById("board-container")
    for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
        let newCellNode = document.createElement("div")
        newCellNode.innerText = cellNumber
        newCellNode.classList.add("cell")
        cellsContainerNode.appendChild(newCellNode)
    }
}