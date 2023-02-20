const button = document.querySelector('#button');
button.addEventListener('click', createLiftSimulation);

function createLiftSimulation() {
    elevators = document.querySelector('#text-elevators').value;
    floors = document.querySelector('#text-floors').value;

    // Get the user input
    if(!checkValidInput(elevators, floors)){
        throw new Error("Invalid input");
    }

    // Clean the html page, remove all the elements
    makeBlankCanvas();

    // call the function to create the canvas
    // createCanvas(elevators, floors);
    
}

function makeBlankCanvas() {
    let title = document.querySelector('#title');
    title.innerHTML = " ";
    let container = document.querySelector('#input-form');
    container.innerHTML = '';
}

function checkValidInput(elevators, floors) {
    let elevatorsInt = parseInt(elevators, 10);
    let floorsInt = parseInt(floors, 10);

    // check for invalid inputs
    if (elevatorsInt < 0) {
        alert("Please enter a positive number of elevators");
        return false;
    }
    if (floorsInt < 0) {
        alert("Please enter a positive number of floors");
        return false;
    }
    if (elevatorsInt % 1 != 0) {
        alert("Please enter the number of elevators as an integer");
        return false;
    }
    if (floorsInt % 1 != 0) {
        alert("Please enter the number of floors as an integer");
        return false;
    }   
    return true;
}
