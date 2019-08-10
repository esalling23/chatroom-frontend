'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const getFormFields = require('../../lib/get-form-fields.js')
const store = require('./store')

// use require without a reference to ensure a file is bundled
// require('./example')
const io = require('socket.io-client')

$(() => {
  // initialize authorization templates and events
  authEvents.initialize()

  const socket = io('http://localhost:4741')
  // Socket connection events
  socket.on('connect', () => {
    console.log('connect')

    // Message created
    socket.on('newMessage', (data) => {
      console.log('new message!', data)
      const li = $('<li></li>')
      li.text(`${data.message.owner.email}: ${data.message.text}`)
      $('#messages').append(li)
    })
  })

  $('body').on('submit', '#send-message', (event) => {
    event.preventDefault()
    const formData = getFormFields(event.target)
    $.ajax({
      url: 'http://localhost:4741/messages',
      method: 'POST',
      data: formData,
      headers: {
        Authorization: 'Bearer ' + store.user.token
      }
    })
      .then(data => {
        socket.emit('newMessage', {
          message: data.message
        })
      })
      .catch(console.log)
  })
  // your JS code goes here
})
