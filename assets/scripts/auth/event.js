
const getFormFields = require('../../../lib/get-Form-Fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  //console.log('Signing in')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  //console.log('Change password')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  //console.log('Sign out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onStats = function (event) {
  event.preventDefault()
  api.gameStats()
    .then(ui.statsSuccessfull)
    .catch(ui.statsFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccessfull)
    .catch(ui.newGameFailure)
}
/* const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
} */

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onStats,
  onNewGame
//  onGetGames
}



/* const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

module.exports = {
  onSignUp
} */
