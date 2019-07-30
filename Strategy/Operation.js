const Operation = function() {
  this.operation = null
}

Operation.prototype = {
  setStrategy: function(operation) {
    this.operation = operation
  },

  calculate: function(n1, n2) {
    return this.operation.calculate(n1, n2)
  },
}

module.exports = Operation

module.exports.ADDITION = ADDITION = function() {
  this.calculate = (n1, n2) => {
    return n1 + n2
  }
}

module.exports.SUBTRACTION = SUBTRACTION = function() {
  this.calculate = (n1, n2) => {
    return n1 - n2
  }
}

module.exports.MULTIPLICATION = MULTIPLICATION = function() {
  this.calculate = (n1, n2) => {
    return n1 * n2
  }
}

module.exports.DIVISION = DIVISION = function() {
  this.calculate = (n1, n2) => {
    return n1 / n2
  }
}
