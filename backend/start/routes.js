'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('session', 'SessionController.store')

Route.group(() => {
  Route.resource('teams', 'TeamController').apiOnly()
}).middleware('auth')

Route.group(() => {
  Route.post('invites', 'InviteController.store')
}).middleware(['auth', 'team'])
