const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from pessoas', (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

const deleteOne = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('delete from pessoas where id = ' +id+ ' limit 1', (err, result) => {
            if(err){
                reject(err)
            } else {
                resolve()
            }
        })
    }) 
}

const create = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into pessoas (nome, nascimento, cargo) values ( '${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err, result) => {
            if(err) {
                reject()
            } else {
                resolve()
            }
        })
    })
}

const findById = (connection, idPessoa) => {
    const strQuery = `select * from pessoas where id = '${idPessoa}'`
    return new Promise((resolve, reject) => {
        connection.query(strQuery, (err, result) => {
            if(err){
                reject(err)
            } else {
                if(result.length>0){
                    resolve(result[0])
                } else {
                    resolve(result)
                }
            }
        })
    })
}

const update = (connection, id,  data) => {
    const updateWhery = `update pessoas set nome = '${data.nome}' , nascimento =  '${data.nascimento}', cargo = '${data.cargo}' where id = '${id}'`
    console.log(updateWhery)
    return new Promise((resolve, reject) => {
        connection.query(updateWhery , (err, result) => {
            if(err) {
                reject()
            } else {
                resolve()
            }
        })
    })
}

module.exports = {
    findAll,
    deleteOne,
    create,
    findById,
    update
}