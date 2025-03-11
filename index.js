// Code your solution here
const findMatching =(drivers,name) => drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
const fuzzyMatch =(drivers,name) => drivers.filter(driver => driver.toUpperCase().startsWith(name.toUpperCase()))
const matchName =(drivers,object)=>drivers.filter(driver => driver.name === object)