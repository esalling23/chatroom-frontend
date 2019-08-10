'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then((user) => {
      ui.signInSuccess(user)
    })
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(console.log)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#noauth').on('submit', '#sign-up', onSignUp)
  $('#noauth').on('submit', '#sign-in', onSignIn)
  $('#auth').on('submit', '#sign-out', onSignOut)
  $('#auth').on('submit', '#change-password', onChangePassword)
  $('#sign-up').on('hidden.bs.collapse', function () {
    $('.toggle-sign-up').html('Create Account <i class="fas fa-user-plus"></i>')
  })
  $('#sign-in').on('hidden.bs.collapse', function () {
    $('.toggle-sign-up').html('Sign In <i class="fas fa-sign-in-alt"></i>')
  })
}

const initialize = () => {
  ui.setup()
  addHandlers()
}

module.exports = {
  initialize
}
