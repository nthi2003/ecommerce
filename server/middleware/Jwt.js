const jwt = require('jsonwebtoken');

const genneralAccessToken = async (payload) => {
    console.log('payload', payload);
    const access_token = jwt.sign({
        payload
    }, 'access_token' , {expiresIn: '1h'})
    return access_token
}
module.exports = {
    genneralAccessToken
}
const genneralRefreshToken = async (payload) => {
    console.log('payload', payload);
    const access_token = jwt.sign({
        payload
    }, 'refresh_token' , {expiresIn: '365d'})
    return access_token
}
module.exports = {
    genneralAccessToken,
    genneralRefreshToken
}