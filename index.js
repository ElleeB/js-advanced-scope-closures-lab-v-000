// returns a function that we can then to 
// calculate if a trip is too large for a driver
function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let rangeResult = Math.abs((parseInt(startBlock) - parseInt(endBlock)))
    debugger
    if (rangeResult <= blockRange){
      return `within range by ${blockRange - rangeResult}`
    }else {
      return `${rangeResult - blockRange} blocks out of range`
    }
  }
}
