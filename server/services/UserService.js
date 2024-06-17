 const { genneralAccessToken, genneralRefreshToken } = require("../middleware/Jwt");
const User = require("../models/UserModel");
 const bcrypt = require("bcrypt");
 const createUser = (newUser) => {
    return new Promise(async(resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser;
        try {
            const CheckUser = await User.findOne({
                email: email,
            })
            if(CheckUser != null) {
                resolve({
                    status: 'OK',
                    mes: 'Email đã tồn tại! Vui lòng nhập email khác'
                })
            } 
            const hash = bcrypt.hashSync(password , 10)

            const createdUser =  await User.create({
                name,
                email,
                password : hash,
                confirmPassword : hash,
                phone
            })
            if(createdUser) {
                resolve({
                    status: 'OK',
                    mes: 'success',
                    data : createdUser,
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}
const loginUser =(UserLogin) => {
    return new Promise(async(resolve, reject) => {
        const { name, email, password, phone } = UserLogin;
        try {
            const CheckUser = await User.findOne({
                email: email,
            })
            if(CheckUser === null) {
                resolve({
                    status: 'OK',
                    mes: 'Email không tồn tại'
                })
            } 
            const comparePassword = bcrypt.compareSync(password , CheckUser.password)
            console.log('comparePassword', comparePassword)
           
            if(!comparePassword) {
                resolve({
                    status: 'OK',
                    mes: 'Tên đăng nhập hoặc mật khẩu không đúng'
                })
            }
            const  access_token = await genneralAccessToken({
                id: CheckUser.id,
                isAdmin: CheckUser.isAdmin,
            })
            const refresh_token = await genneralRefreshToken({
                id: CheckUser.id,
                isAdmin: CheckUser.isAdmin,
            })
            resolve({
                status: 'OK',
                mes: 'success',
                access_token : access_token,
                refresh_token : refresh_token
            })
        } catch (e) {
            reject(e);
        }
    })
}
 module.exports = {
    createUser,
    loginUser
 }