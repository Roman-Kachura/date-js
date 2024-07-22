const dialButtons = document.querySelectorAll('.dial__buttons-item')

let mode = 'full'

function getFormedDate(format) {
  const now = new Date();
  switch (format) {
    case 'date':
      return now.toLocaleDateString()
    case 'time':
      return now.toLocaleTimeString()
    default:
      return now.toLocaleString()
  }
}

function switchMode(v){
  mode = v
  toHTML()
}

function toHTML(){
  document.querySelector('.dial__output').innerHTML = getFormedDate(mode)
}

dialButtons.forEach(button => {
  button.addEventListener('click', () => switchMode(button.dataset.format))
})

toHTML()

setInterval(toHTML, 1000)