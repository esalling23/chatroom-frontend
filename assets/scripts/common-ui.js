'use strict'
const authTemplates = require('./templates/authForms.handlebars')
const noAuthTemplates = require('./templates/noauthForms.handlebars')

const formClear = () => {
  $('form').trigger('reset') // IMPORTANT
}

const showAuth = () => {
  $('#auth').html(authTemplates({}))
  $('#noauth').html('')
}

const hideAuth = () => {
  $('#noauth').html(noAuthTemplates({}))
  $('#auth').html('')
}

module.exports = {
  formClear,
  hideAuth,
  showAuth
}
