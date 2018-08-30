const driver = {

}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key] : value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver)
  return delete newDriver[key];
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
<<<<<<< HEAD
}
=======
}
>>>>>>> be6a5e3950fd9e8e16e231840f8a3fdce2f52650
