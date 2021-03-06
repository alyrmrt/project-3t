'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/event.js')
// const eventsGame = require('./eventsGame.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes her3
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#get-games').on('click', authEvents.onGetGames)
  $('#game-stats').on('click', authEvents.onStats)
  $('#start-game').on('click', authEvents.onNewGame)
})
