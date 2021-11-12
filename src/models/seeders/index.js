// seeders/index.js
const db=require ('../index')
const chance = require ('chance').Chance()
const faker = require ('faker')

const createSeeds = async () => {
    const usuariosCont = 3

    chance.mixin({
        usuario:function (){
            return{
                correo:chance.sentence({words: 1}),
                clave: chance.sentece({ words: 1}),
                createdAt: chance.date(),
                updatedAt: chance.date()
            }
        },
    })
    for (let index = 0; index< usuariosCount; index++){
        const usuario = await db.Usuarios.create(chance.usuario())
    }
    for (let index = 0; index < usuariosCount; index++){
        const usuario = await db.Usuarios.create({
            correo: faker.internet.email(),
            clave: faker.lorem.sentence(),
            createdAt: faker.date.recent(2),
            updateAt: faker.date.recent(2)
        })
    }
}

module.exports = createSeeds