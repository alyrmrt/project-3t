const store = require('../store')
// const onGetGamesSuccess = require('./eventsGame.js')
require('../engine.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  //console.log('signUpSuccess data is: ', data)
}
const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  //console.log('signUpFailure error is: ', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#start-game').removeClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#change-password').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#new-game').removeClass('hide')
  $('#winer').removeClass('hide')
  //console.log('signInSuccess data is: ', data)
  store.user = data.user
}
const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  //console.log('signInFailure error is: ', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  //console.log('changePasswordSuccess data is: ', data)
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  //console.log('changePasswordFailure error is: ', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#board').addClass('hide')
  $('#new-game').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#change-password').addClass('hide')
  $('#sign-in').removeClass('hide')
  $('#sign-up').removeClass('hide')
  $('#winer').addClass('hide')
  $('#turn').addClass('hide')
  // $('#sign-in').text('')
  //console.log('signOutSuccess data is: ', data)
}
const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  //console.log('signOutFailure error is: ', error)
}

const restart = $('#start-game').click(function () {
  $('.box').empty()
  $('.X').removeClass('X')
  $('.O').removeClass('O')
  $('.board').removeClass('hide')
  $('h4').removeClass('hide')
//  $('#winer').remove('hide')
  $('#turn').remove('hide')
  // turn = 'X'
 $('#message').text('')
})

 const onGetGamesSuccess = function (data) {
  $('#message').text('')
  const allGames = data.games
  store.user.games = allGames
  for (let i = 0; i < allGames.length; i++) {
    $('#message').append('<games id='+`${allGames[i].id}` + '> ' + `${allGames[i].id}` + ' </games>')
  }
}

const statsSuccessfull = function (data) {
  $('#message').text('Total Games: ' + data.games.length)
}

const statsFailure = function () {
  $('#message').text('Please try again.')
}

const newGameSuccessfull = function (data) {
  store.game = data.game
  store.validation = true
}

const newGameFailure = function () {
  $('#message').text('Please try again.')
}

const onGameUpdateSuccessfull = function (data) {
  store.game = data.game
}

const onGameUpdateFailure = function () {
  $('#message').text('Error on updating the game! Please try again.')
}





module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  restart,
  statsSuccessfull,
  statsFailure,
  newGameSuccessfull,
  newGameFailure,
  onGetGamesSuccess,
  onGameUpdateSuccessfull,
  onGameUpdateFailure
}
