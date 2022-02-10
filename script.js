'use strict';
let quessMessage = document.querySelector('.guess-message');
let question = document.querySelector('.question');
let check = document.querySelector('.check');
let body = document.getElementById('body')
let secretNumber = Math.trunc(Math.random() * 20 + 1)
let newGame = document.querySelector('.again')
let counter = 8
let highscore = 0




const app = () => {
   check.addEventListener('click', () => {
      let getNumber = Number(document.querySelector('.number-input').value)
      if (!getNumber) {
         quessMessage.textContent = 'Введите число !'
      } else if (getNumber === secretNumber) {
         quessMessage.textContent = 'Победа !!'
         question.textContent = secretNumber + 'Ты пидор'
         body.style.background = '#198754'
         document.querySelector('.score').textContent = counter
         document.querySelector('.highscore').textContent = counter
         if (counter > highscore) {
            document.querySelector('.highscore').textContent = counter
         }
      } else if (getNumber > secretNumber) {
         if (counter > 1) {
            quessMessage.textContent = 'Слишком много!'
            counter--
            document.querySelector('.score').textContent = counter
         } else {
            quessMessage.textContent = 'Вы проиграли!'
            document.querySelector('.score').textContent = 0
         }
      } else if (getNumber < secretNumber) {
         if (counter > 1) {
            quessMessage.textContent = 'Очень мало!'
            counter--
            document.querySelector('.score').textContent = counter
         } else {
            quessMessage.textContent = 'Вы проиграли!'
            document.querySelector('.score').textContent = 0
         }
      }


   })

   console.log(secretNumber)

}



const reset = () => {
   newGame.addEventListener('click', () => {
      body.style.backgroundColor = 'black'
      document.querySelector('.number-input').value = ''
      quessMessage.textContent = 'Начни угадывать'
      question.textContent = '???'
      counter = 8
      document.querySelector('.score').textContent = counter
      secretNumber = Math.trunc(Math.random() * 20 + 1)
      console.log(secretNumber)
   })
}

const fullApp = () => {
   app()
   reset()
}

fullApp()