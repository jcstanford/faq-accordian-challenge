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

// create onclick events that link to what you want to click and that will display answer
document.querySelector('#show1').addEventListener('click', show1)
document.querySelector('#show2').addEventListener('click', show2)
document.querySelector('#show3').addEventListener('click', show3)
document.querySelector('#show4').addEventListener('click', show4)

// create the functions that will toggle display of p answer
function show1() {
	answer1.classList.toggle('hidden')
}

function show2() {
	answer2.classList.toggle('hidden')
}

function show3() {
	answer3.classList.toggle('hidden')
}

function show4() {
  answer4.classList.toggle('hidden')
}