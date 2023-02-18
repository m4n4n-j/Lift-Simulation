const button = document.querySelector('#button');
button.addEventListener('click', getUserInput);

function getUserInput() {
    let elevators = document.querySelector('#text-elevators').value;
    let floors = document.querySelector('#text-floors').value;

    // call check valid input function
    checkValidInput(elevators, floors);

    console.log("elevators = " + elevators);
    console.log("floors = " + floors);

}

function checkValidInput(elevators, floors) {
    let elevatorsInt = parseInt(elevators, 10);
    let floorsInt = parseInt(floors, 10);

    // check for invalid inputs
    if (elevatorsInt < 0) {
        alert("Please enter a positive number of elevators");
    }
    if (floorsInt < 0) {
        alert("Please enter a positive number of floors");
    }
    if (elevatorsInt % 1 != 0) {
        alert("Please enter the number of elevators as an integer");
    }
    if (floorsInt % 1 != 0) {
        alert("Please enter the number of floors as an integer");
    }
    return { elevators, floors };
}
