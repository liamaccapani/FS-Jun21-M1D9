window.onload = function() {
  displayBoard()  
}

const displayBoard = function(){ 
    //creates board container
    let cellsContainer = document.getElementById('board-container')

    for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {
        //for every cell: create the cell
        let cell = document.createElement('div')

        //write the current number inside the tags
        cell.innerText = cellNumber

        //give the class cell to it to style it
        cell.classList.add('cell')

        //add it in the board
        cellsContainer.appendChild(cell)
    }
}

//cell = cellNumber container (the div class cell)
//cellNumber = numero della casella definito dentro a displayBoard non esiste al di fuori
//number = numero random definito dentro a randomizeNumber non esiste al di fuori
//li = numero della lista

const randomizeNumber = function(number){ 
    //create a li in the DOM, NOT IN THE UL!! 
    //🔺 it has to be document. NOT container.
    const li = document.createElement('li')

    //generate a random number and set its value to li
    number = Math.floor(Math.random() * 76) + 1
    li.innerHTML = number

    //select the ul
    const container = document.getElementById('played-numbers')

    //NOW append it to the ul
    container.appendChild(li)
} 



const playButton = document.getElementById('random-num')
playButton.addEventListener('click', function(){
    randomizeNumber()
})