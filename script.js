//tracks the current players score
let currentPlayer = 1;

// list of squares
const squares = document.querySelectorAll('.square');

//set background
document.body.style.backgroundColor = "#1fe0aa";


//for every square
squares.forEach(square => {

    square.addEventListener('click', function (event) {

       
        //if the thing hasnt been clicked
        if (event.target.dataset.clicked == "false") {
            if(currentPlayer == 1) {
                // event.target.style.backgroundColor = "red";
                event.target.textContent = "O";
                event.target.style.color = "blue";
                event.target.dataset.val = "1";
                document.body.style.backgroundColor = "#f54245";
                
                currentPlayer = 2;
            } else {
                // event.target.style.backgroundColor = "blue";
                event.target.textContent = "X";
                event.target.style.color = "Red";
                event.target.dataset.val = "2";
                document.body.style.backgroundColor = "#42b3f5";

                currentPlayer = 1;
            }
        }

        event.target.dataset.clicked = "true";
        console.log("You clicked:", event.target.id);
        console.log(event.target.dataset.val);

    });

});

