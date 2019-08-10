'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')
const sockets = require('./sockets')

const onSubmitMessage = (socket, event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createMessage(formData)
    .then((data) => {
      socket.emit('newMessage', {
        message: data.message
      })
    })
    .catch(ui.failure)
}

const addHandlers = (socket) => {
  // send message form
  $('#auth').on('submit', '#send-message', (event) => onSubmitMessage(socket, event))
}

const initialize = () => {
  sockets.initialize(addHandlers)
  api.getMessages()
    .then(ui.setup)
    .catch(ui.failure)
}

module.exports = {
  initialize
}
