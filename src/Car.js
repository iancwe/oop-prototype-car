  function Car (make, model, year, color, seats, passengers = []) {
  this.make = make
  this.model = model
  this.year = year
  // TODO: add color, seats here
  this.color = color
  this.seats = seats
  this.passengers = passengers

  this.running = false
  this.owner = 'manufacturer'
  this.previousOwners = []
}

Car.prototype.sell = function (newOwner) {
  this.previousOwners.push(this.owner)
  this.owner = newOwner
}

Car.prototype.paint = function (newColor) {
  this.color = newColor
}

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car
// phase 2
// turning car on
Car.prototype.start = function () {
  this.running = true
}
// turning car off
Car.prototype.off = function () {
  this.running = false
}
// drive to funciton
Car.prototype.driveTo = function (destination) {
  if (this.running === true) {
    console.log('driving to ' + destination)
    return true
  }
  return false
}
// parking function
Car.prototype.park = function () {
  if (this.running === false) {
    console.log('Parked!')
    return true
  }
  return false
}

// phase 3
// pick up
Car.prototype.pickUp = function (name) {
  if (this.running === true && this.passengers.length + 1 < this.seats) {
    this.passengers.push(name)
    console.log('driving to pick up ' + name)
    return true
  }
  return false
}

// dropoff
Car.prototype.dropOff = function (name) {
  if (this.running === true && this.passengers.includes(name)) {
    var dropPers = this.passengers.indexOf(name)
    this.passengers.splice(dropPers, 1)
    console.log('driving to drop off ' + name)
    return true
  }
  return false
}

// passengerCount
Car.prototype.passengerCount = function () {
  return this.passengers.length
}
