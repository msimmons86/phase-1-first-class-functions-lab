
const returnFirstTwoDrivers = bob => [...bob.slice(0, 2)]

const returnLastTwoDrivers = drivers => [...drivers.slice(2, 4)]

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
  return function (timesFour) {
  return x * timesFour
  }
}

const fareDoubler = money => money*2
const fareTripler = money => money*3


function selectDifferentDrivers(drivers, selectingDrivers) {
  return selectingDrivers(drivers)
}
