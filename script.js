// Adds 1 to whatever number you add into the input box
let number = 0
let sentence = 'hello, this is the number 3.'

document.getElementById('button').addEventListener('click', addition)

function addition () {
  number = document.getElementById('input').value

  number = parseInt(number)

  number = number + 1

  alert(number)
}
