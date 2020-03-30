const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  //console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  //console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const changePassword = function (data) {
  //console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

const signOut = function () {
  //console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

 const getGames = function (data) {
  if (data === undefined) {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    })
  }

  return $.ajax({
    url: config.apiUrl + '/games[?over=]',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


const gameUpdate = function (div, word, check) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data : {
      "game": {
        "cell": {
          "index": div.id,
          "value": word
    },
    "over": !check
  }
}
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  gameStats,
  newGame,
  getGames,
  gameUpdate
//  showGame
}

/* const config = require('../config')
const store = require('../store')

const signUp = function (data) {
  //console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + 'sign-up',
    method: 'POST',
    data
    // data: data
  })
}

module.export = {
  signUp
}  */
