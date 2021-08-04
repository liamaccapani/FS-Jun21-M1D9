window.onload = function() {
  displayBoard()  
}

const displayBoard = function(){ 
    //creates board container
    let board = document.getElementById('board-container')
    
    for (let cellNumber = 1; cellNumber <= 76; cellNumber++) {

        board.innerHTML += `<div class="cell">${cellNumber}</div>`

        // //for every cell: create the cell
        // let cell = document.createElement('div')
        // //write the current number inside the tags
        // cell.innerText = cellNumber
        // //give the class cell to it to style it
        // cell.classList.add('cell')
        // //add it in the board
        // board.appendChild(cell)
    }
}


const randomizeNumber = function(number){ 
    number = Math.floor(Math.random() * 76) + 1
    const numberDiv = document.getElementById('played-number')
    numberDiv.innerHTML = number

    const cells = document.querySelectorAll('#board-container .cell')
    cells[number-1].style.backgroundColor = 'white'
} 



const playButton = document.getElementById('random-num')
playButton.addEventListener('click', function(){
    randomizeNumber()
})


//old example with ul and li
// const randomizeNumber = function(number){ 
//     //create a li in the DOM, NOT IN THE UL!! 
//     //🔺 it has to be document. NOT container.
//     const li = document.createElement('li')
//     //generate a random number and set its value to li
//     number = Math.floor(Math.random() * 76) + 1
//     li.innerHTML = number
//     //select the ul
//     const container = document.getElementById('played-numbers')
//     //NOW append it to the ul
//     container.appendChild(li)

//     const cells = document.querySelectorAll('#board-container .cell')
//     cells[number-1].style.backgroundColor = 'white'
// } 