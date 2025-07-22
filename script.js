//tracks the current players score
let currentPlayer = 1;

//counts how many moves theres been
let moveCount = 0;

// list of squares
const squares = document.querySelectorAll('.square');

//set background
document.body.style.backgroundColor = "#1fe0aa";

//if game is complete 
//  makes it so you cant comtinue to play after someone wins
let gameOver = false;

let boxList = Array(9).fill(null);
let objectList = Array(9).fill(null);

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


//for every square
squares.forEach(square => {

    square.addEventListener('click', function (event) {

        //id of the current square
        const id = event.target.id;
        const parsedId = parseInt(id);


        //if the thing hasnt been clicked
        if (event.target.dataset.clicked == "false" && gameOver == false) {
            
            if(currentPlayer == 1) {
                event.target.textContent = "O";
                event.target.style.color = "blue";
                event.target.dataset.val = "1";
                document.body.style.backgroundColor = "#f54245";
                currentPlayer = 2;

                boxList[parsedId] = "O";
                objectList[parsedId] = event.target;

                moveCount++;
                updateStatus("Its X's turn");
            } else {
                event.target.textContent = "X";
                event.target.style.color = "Red";
                event.target.dataset.val = "2";
                document.body.style.backgroundColor = "#42b3f5";
                currentPlayer = 1;

                boxList[parsedId] = "X";
                objectList[parsedId] = event.target;


                moveCount++;
                updateStatus("Its O's turn");

            }
        }

        event.target.dataset.clicked = "true";
        checkWinner(squares);
    });

});

function checkWinner(squares) {

    for(let winPat of winPatterns) {
         let box1 = boxList[winPat[0]];
         let box2 = boxList[winPat[1]];
         let box3 = boxList[winPat[2]];
         let object1 = objectList[winPat[0]];
         let object2 = objectList[winPat[1]];
         let object3 = objectList[winPat[2]];


         //make sure all of the squares are filled
        if(box1 !== null && box2 !== null && box3 !== null) {

            //if they are equal to each other
            if(box1 == box2 && box2 == box3) {
                object1.style.backgroundColor = "#02e34d";
                object2.style.backgroundColor = "#02e34d";
                object3.style.backgroundColor = "#02e34d";

                console.log("winner");
                let winner = box1;
                let winMessage = `${winner} Wins!`;
                updateStatus(winMessage);
                gameOver = true;       
            }
        }
    }

    if(moveCount == 9 && gameOver == false) {
        updateStatus("Its a tie!");
        gameOver = true;
    }
};

//resets the game back to its origianl state
function reset() {
    boxList = Array(9).fill(null);
    objectList = Array(9).fill(null);
    moveCount = 0;
    document.body.style.backgroundColor = "#1fe0aa";
    gameOver = false;
    updateStatus("Its O's turn");

    squares.forEach(square => {
        square.style.backgroundColor = "#FFFFFF";
        square.textContent = "";
        square.dataset.clicked = "false";

    });

};

const resetButton = document.querySelector(".button");

resetButton.addEventListener('click', function (event) {
    console.log("clicked");
    reset();
});


function updateStatus(newtext) {

    const status = document.getElementById("Status");
    status.textContent = newtext;

}