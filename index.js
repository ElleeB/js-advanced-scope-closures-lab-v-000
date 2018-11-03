// returns a function that we can then to
// calculate if a trip is too large for a driver
function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let rangeResult = Math.abs((parseInt(startBlock) - parseInt(endBlock)))
    if (rangeResult <= blockRange){
      return `within range by ${blockRange - rangeResult}`
    }else {
      return `${rangeResult - blockRange} blocks out of range`
    }
  }
}

// Returns a function that then calculates a tip
function produceTipCalculator(tipPercentage) {
  return function(fare) {
    return fare * tipPercentage
  }
}

// a function that returns a Driver class

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
}
