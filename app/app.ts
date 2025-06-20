import { NegociacaoController } from './src/controllers/negociacao-controller.js'

const controller = new NegociacaoController()
const form = document.querySelector('.form')
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault()
    controller.adiciona()
  })
} else {
  throw Error(
    'Não foi possível iniciar a aplicação, verifique se o form existe'
  )
}
