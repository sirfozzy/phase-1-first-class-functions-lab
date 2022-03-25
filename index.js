const drivers =["Andy", "Bobby", "Clair", "Dave"];

const returnFirstTwoDrivers = (array) => array.slice(0, 2);
const returnLastTwoDrivers = (array) => array.slice(array.length - 2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (int) => (fare) => int * fare;
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectingDifferentDrivers = (returnLastTwoDrivers, returnFirstTwoDrivers) => {
    const first=[ selectingDrivers[0], selectingDrivers[1]]
    const last = [returnLastTwoDrivers[2], returnlastTwoDrivers[3]]
    return returnFirstTwoDrivers
    return returnLastTwoDrivers
}