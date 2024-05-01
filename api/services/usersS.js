const objCon = require('../libs/conexion');
const { QueryTypes} = require('sequelize');

class UsersService{

    async getUsers(){
        const users = await objCon.query(
            "SELECT * FROM `users`",
            { type: QueryTypes.SELECT}
        );
        return users;
    }

    async getUser(id){
        const user = await objCon.query(
            "SELECT * FROM `users` where `id` =" + id,
            { type: QueryTypes.SELECT}
        );
        return user;
    }

    async login(body){
        let sentence = `SELECT * FROM users where user_name = 
        '${body.user_name}' and user_pass ='${body.user_pass}'`;
        const user = await objCon.query(
            sentence,
            { type: QueryTypes.SELECT}
        );
        return user;
    }
        
async register(body){
    let sentence= `INSERT INTO general_data(last_name,first_name,direction,city,state_name,country,phone_number)
    values('${body.last_name}','${body.first_name}','${body.direction}','${body.city}','${body.state_name}'
    ,'${body.country}','${body.phone_number})`;

    let genDataId = await objCon.query(
        sentence,
        {
            type: QueryTypes.INSERT,
            returning:true
        }
    );

    sentence = `INSERT INTO users(user_name,user_pass,email,general_data_id)
    values('${body.user_name}','${body.user_pass}','${body.phone_number}')`;

    await pbjCon.query(
        sentence,
        {
            type: QueryTypes.INSERT
        }
    );

    return 1;
}
   

}
module.exports = UsersService
