/*
Your users should be able to:

Hide/Show the answer to a question when the question is clicked
Navigate the questions and hide/show answers using keyboard navigation alone
View the optimal layout for the interface depending on their device's screen size
See hover and focus states for all interactive elements on the page*/

/// clicking on a plus sign will display the answer
// to do so, you need to create variables to corresponding html names (p)
const answer1 = document.querySelector('#plus1')
const answer2 = document.querySelector('#plus2')
const answer3 = document.querySelector('#plus3')
const answer4 = document.querySelector('#plus4')

const minus1 = document.querySelector('#minus1')
const minus2 = document.querySelector('#minus2')
const minus3 = document.querySelector('#minus3')
const minus4 = document.querySelector('#minus4')

const plus1 = document.querySelector('#show1')
const plus2 = document.querySelector('#show2')
const plus3 = document.querySelector('#show3')
const plus4 = document.querySelector('#show4')

// create onclick events that link to what you want to click and that will display answer
plus1.addEventListener('click', show1)
plus2.addEventListener('click', show2)
plus3.addEventListener('click', show3)
plus4.addEventListener('click', show4)

// create the functions that will toggle display of p answer
function show1() {
	answer1.classList.toggle('hidden')
  minus1.classList.toggle('hidden')
  plus1.classList.add('hidden')
}

function show2() {
	answer2.classList.toggle('hidden')
  minus2.classList.toggle('hidden')
  plus2.classList.add('hidden')
}

function show3() {
	answer3.classList.toggle('hidden')
  minus3.classList.toggle('hidden')
  plus3.classList.add('hidden')
}

function show4() {
  answer4.classList.toggle('hidden')
  minus4.classList.toggle('hidden')
  plus4.classList.add('hidden')
}