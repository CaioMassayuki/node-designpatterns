const Operation = require('./Operation')
const {
  ADDITION,
  SUBTRACTION,
  MULTIPLICATION,
  DIVISION,
} = require('./Operation')

const operate = new Operation()

const operations = {
  'ADDITION': new ADDITION(),
  'SUBTRACTION': new SUBTRACTION(),
  'MULTIPLICATION': new MULTIPLICATION(),
  'DIVISION': new DIVISION(),
}

let choice1 = 'ADDICTION'
let choice2 = 'SUBTRACTION'
let choice3 = 'MULTIPLICATION'
let choice4 = 'DIVISION'

operate.setStrategy(operations[choice1])
console.log(operate.calculate(2, 5))
