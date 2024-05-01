const objCon = require('../libs/conexion');
const { QueryTypes } = require('sequelize');

class CommentService{
    async createComment(body){
        let sentence = `INSERT INTO comments(user_id,comment_text)
        values('${body.user_ide}','${body.comment_text}')`;

        let genDataId = await objCon.query(
            sentence,
            {
                type: QueryTypes.INSERT,
                returning:true
            }
        );
        
        return genDataId;
    }

    async getComments(){
        const user = await objCon.query(
            "select com.comment_text,com.user_id,us.user_name from comments com inner join users us on us.id=com.user_id",
            { type: QueryTypes.SELECT }
        );
        return user;
    }
}

module.exports = CommentService