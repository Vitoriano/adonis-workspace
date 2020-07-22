'use strict'

const User = use('App/Models/User')
const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Vitoriano Ernandes',
      email: 'dev@vitoriano.com',
      password: '12345'
    })

    const createInvite = await Permission.create({
      slug: 'invites_create',
      name: 'Convidar membros'
    })

    const createProject = await Permission.create({
      slug: 'projects_create',
      name: 'Criar projetos'
    })

    const admin = await Role.create({
      slug: 'adminstador',
      name: 'Administrador'
    })

    const moderador = await Role.create({
      slug: 'moderador',
      name: 'Moderador'
    })

    await Role.create({
      slug: 'visitante',
      name: 'Visitante'
    })

    await admin.permissions().attach([createInvite.id, createProject.id])
    await moderador.permissions().attach([createProject.id])

    const team = await user.teams().create({
      name: 'Dev Na Rotina',
      user_id: user.id
    })

    const teamJoin = await user.teamJoins()
      .where('team_id', team.id)
      .first()

    await teamJoin.roles().attach([admin.id])
  }
}

module.exports = DatabaseSeeder
