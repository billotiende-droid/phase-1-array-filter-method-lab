const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching (drivers,name) {
    return drivers.filter (driver => driver===name);

}

function findMatching (drivers,name) {
    return drivers.filter (driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (drivers,searchString) {
  const lowercaseSearch = searchString.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase().includes(lowercaseSearch));
  
}

function fuzzyMatch(drivers, searchString) {
  const lowercaseSearch = searchString.toLowerCase();
  return drivers.filter(driver => driver.toLowerCase().startsWith(lowercaseSearch));
}

function matchName (drivers,nameToMatch) {
    return drivers.filter(driver => driver.name === nameToMatch);
}