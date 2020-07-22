'use strict'

const User = use('App/Models/User')
const Invite = use('App/Models/Invite')

class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['name', 'email', 'password'])

    const teamsQuery = Invite.query().where('email', data.email)

    // O metodo pluck me retorna todos os ids dos times que o user foi convidadeo  [2, 5, 7, 15]
    const teams = await teamsQuery.pluck('team_id')

    if (teams.length === 0) {
      return response
        .status(401)
        .send({ message: 'Você não foi convidado para nenhum time' })
    }

    const user = await User.create(data)

    await user.teams().attach(teams)

    await teamsQuery.delete()

    const token = await auth.attempt(data.email, data.password)

    return token
  }
}

module.exports = UserController
