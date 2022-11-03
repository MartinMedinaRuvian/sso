module.exports ={
    configuracionHerokuProduccion:{
        host:process.env.HOST_NUBE,
        user:process.env.USER_NUBE,
        password:process.env.PASSWORD_NUBE,
        database:process.env.DATABASE_NUBE
    },
    configuracionLocal:{
        host:process.env.HOST_LOCAL,
        user:process.env.USER_LOCAL,
        password:process.env.PASSWORD_LOCAL,
        database:process.env.DATABASE_LOCAL
    }
}
