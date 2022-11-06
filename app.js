// Rating Page

const scoreButton = document.querySelectorAll('.score-button')
const getScore = button => {
  button.addEventListener('click', value => {
    const buttonValue = value.target
    const removeClass = button => {
      button.classList.remove('score-button-selected')
    }
    scoreButton.forEach(removeClass)
    buttonValue.classList.add('score-button-selected')
  })
}

scoreButton.forEach(getScore)


// Thanks Page

const scoreRate = document.querySelector('.thanks-rating')
const submitButton = document.querySelector('.button')
const scoreBody = document.querySelector('.rating-bg')
const thanksBody = document.querySelector('.thanks-bg')
let scoreSelected = ''
const getScoreContent = score => {
  score.addEventListener('click', () => {
    if (score.getAttribute('class').includes('score-button-selected')) {
      scoreSelected = score.textContent
    }
  })
}

scoreButton.forEach(getScoreContent)


const setContentScore = () => {
  scoreBody.style.display = 'none'
  thanksBody.style.display = 'block'
  scoreRate.textContent = `You selected ${scoreSelected} out of 5`
}

submitButton.addEventListener('click', setContentScore)

