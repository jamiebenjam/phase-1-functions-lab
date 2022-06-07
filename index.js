// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    let hq = 42;
    return Math.abs(pickupLocation - hq);
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let destinationInFeet = destination * 264;
    let startInFeet = start *264;
    return Math.abs(destinationInFeet - startInFeet);
}

function calculatesFarePrice(start, destination) {
    let message
    let destinationInFeet = destination * 264;
    let startInFeet = start *264;
    let feetTravelled = Math.abs(destinationInFeet - startInFeet)
    if (feetTravelled <=400) {
        message = 0;
    } else if (feetTravelled > 400 && feetTravelled < 2000) {
        message = 2.56;
    } else if (feetTravelled > 2000 && feetTravelled < 2500) {
        message = 25;
    } else if (feetTravelled > 2500) {
        message = 'cannot travel that far';
    }
    return message
}