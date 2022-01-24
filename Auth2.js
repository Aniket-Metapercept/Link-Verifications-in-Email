const jwt = require('jsonwebtoken')

const auth2 = async (req,res,next)=>{
    const authHeader = req.query.authorization
    console.log(authHeader)
    if(!authHeader ){
        res.send("Invalid User")
        return;
    }

    const token = authHeader

    try {
        const payload = jwt.verify(token,process.env.SECRET_KEY)

        req.user = {username:payload.username}
        // console.log(req.user)
        next()

    } catch (error) {
        res.send("Invalid User")
        return;
    }

}

module.exports = auth2