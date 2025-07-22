let currentPlayer = 0;
const squares = document.querySelectorAll('.square');

squares.forEach(square => {

    square.addEventListener('click', function(event) {

        console.log("You clicked:", event.target.id);

        event.target.style.backgroundColor = 'red';


    });

});

