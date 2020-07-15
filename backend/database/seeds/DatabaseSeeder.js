'use strict'

const User = use('App/Models/User')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Vitoriano Ernandes',
      email: 'dev@vitoriano.com',
      password: '12345'
    })

    await user.teams().create({
      name: 'Dev Na Rotina',
      user_id: user.id
    })
  }
}

module.exports = DatabaseSeeder
