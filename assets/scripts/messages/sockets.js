'use strict'
const io = require('socket.io-client')
const ui = require('./ui')
const config = require('../config')

const registerEvents = (socket) => {
  console.log('Connected -- Socket Events')
  // Message created
  socket.on('newMessage', ui.postMessage)
  // We wanna refresh everything
  socket.on('refresh', ui.refreshMessages)
}

const initialize = (addHandlers) => {
  const socket = io(config.apiUrl)

  // setup socket events
  socket.on('connect', () => {
    registerEvents(socket)
    // initialize message events
    addHandlers(socket)
  })
}

module.exports = {
  initialize
}
