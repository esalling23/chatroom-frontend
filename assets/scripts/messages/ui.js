'use strict'

const commonUi = require('../common-ui')

const setup = function (data) {
  commonUi.showAuth()
  refreshMessages(data)
}

const success = function () {
  $('#alert').text('Success')
  $('#alert').removeClass()
  $('#alert').addClass('success')
}

const failure = function () {
  $('#alert').text('Error')
  $('#alert').removeClass()
  $('#alert').addClass('failure')
}

const postMessage = (data) => {
  console.log('new message!', data)
  const messageTemplate = require('../templates/message.handlebars')
  const message = messageTemplate(data.message)
  console.log(data, message)
  $('.message-board').prepend(message)
}

const refreshMessages = (data) => {
  console.log('refreshing!', data)
  const messageBoardTemplate = require('../templates/messageBoard.handlebars')
  const messageBoard = messageBoardTemplate(data)
  $('.message-board').html(messageBoard)
}

module.exports = {
  success,
  failure,
  setup,
  postMessage,
  refreshMessages
}
