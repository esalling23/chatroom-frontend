'use strict'

const store = require('../store')
const messageEvents = require('../messages/events')
const commonUi = require('../common-ui')

const setup = function () {
  commonUi.hideAuth()
}

const signUpSuccess = function (data) {
  $('#alert').text('Signed up successfully')
  $('#alert').removeClass()
  $('#alert').addClass('success')
  commonUi.formClear()
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#alert').text('Error on sign up')
  $('#alert').removeClass()
  $('#alert').addClass('failure')
  commonUi.formClear()
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  store.user = data.user
  $('#alert').text('Signed in successfully')
  $('#alert').removeClass()
  $('#alert').addClass('success')
  commonUi.formClear()
  commonUi.showAuth() // show signout/changepw/messaging
  messageEvents.initialize()
  // console.log('signInSuccess ran. Data is :', data)
}

const signInFailure = function (error) {
  $('#alert').text('Error on sign in')
  $('#alert').removeClass()
  $('#alert').addClass('failure')
  commonUi.formClear()
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#alert').text('Signed out successfully')
  $('#alert').removeClass()
  $('#alert').addClass('success')
  commonUi.modalClear()
  commonUi.formClear() // clear forms
  commonUi.hideAuth() // hide signout/changepw/messaging
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null // IMPORTANT
}

const signOutFailure = function (error) {
  $('#alert').text('Error on sign out')
  $('#alert').removeClass()
  $('#alert').addClass('failure')
  commonUi.formClear()
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#alert').text('Changed password successfully')
  $('#alert').removeClass()
  $('#alert').addClass('success')
  commonUi.formClear()
  $('#authFormsModal').modal('hide')
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#alert').text('Error on change password')
  $('#alert').removeClass()
  $('#alert').addClass('failure')
  commonUi.formClear()
  console.error('changePasswordFailure ran. Error is :', error)
}

module.exports = {
  setup,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
