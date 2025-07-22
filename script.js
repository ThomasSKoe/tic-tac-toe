//tracks the current players score
let currentPlayer = 1;

//counts how many moves theres been
let moveCount = 0;

// list of squares
const squares = document.querySelectorAll('.square');

//set background
document.body.style.backgroundColor = "#1fe0aa";

let boxList = Array(9).fill(null);

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
        if (event.target.dataset.clicked == "false") {
            if(currentPlayer == 1) {
                event.target.textContent = "O";
                event.target.style.color = "blue";
                event.target.dataset.val = "1";
                document.body.style.backgroundColor = "#f54245";
                currentPlayer = 2;

                boxList[parsedId] = "1";

                moveCount++;
            } else {
                event.target.textContent = "X";
                event.target.style.color = "Red";
                event.target.dataset.val = "2";
                document.body.style.backgroundColor = "#42b3f5";
                currentPlayer = 1;

                boxList[parsedId] = "2";

                moveCount++;
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

         //make sure all of the squares are filled
        if(box1 !== null && box2 !== null && box3 !== null) {

            //if they are equal to each other
            if(box1 == box2 && box2 == box3) {
                console.log("winner");
            }
        }

    }
    
    
};

function reset() {
    boxList = Array(9).fill(null);
    document.body.style.backgroundColor = "#1fe0aa";


    squares.forEach(square => {
        square.textContent = "";
        square.dataset.clicked = "false";

    });

};

const resetButton = document.querySelector(".button");

resetButton.addEventListener('click', function (event) {
    console.log("clicked");
    reset();
});


