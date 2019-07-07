// Code your solution here
function findMatching(drivers, string) {
  let matches = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
  return matches
}

function fuzzyMatch(drivers, string) {
  let matches = drivers.filter(driver => driver.charAt(0).toLowerCase() === string.charAt(0).toLowerCase())
  return matches
}

function matchName(drivers, string) {
  let matches = drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
  return matches
}
