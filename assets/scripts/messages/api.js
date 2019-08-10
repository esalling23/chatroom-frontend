'use strict'

const config = require('../config')
const store = require('../store')

const getMessages = () => {
  return $.ajax({
    url: `${config.apiUrl}/messages`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const createMessage = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/messages`,
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

module.exports = {
  createMessage,
  getMessages
}
