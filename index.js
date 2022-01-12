const driversArray = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
return function (fare) {
    return x * fare 
}
}

const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driversArray, func) {
    return func(driversArray)
    
    // console.log("TEST", func(driversArray));


    // func(driversArray)
    // if (func === returnFirstTwoDrivers) {
    //     return driversArray.slice(0,2);
    // } else if (func === returnLastTwoDrivers) {
    //     return driversArray.slice(-2);
    // }
}


// selectDifferentDrivers(driversArray, returnFirstTwoDrivers)
// selectDifferentDrivers(driversArray, returnLastTwoDrivers)
