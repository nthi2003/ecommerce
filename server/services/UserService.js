 const User = require("../models/UserModel");
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
            const createdUser =  await User.create({
                name,
                email,
                password,
                confirmPassword,
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
 module.exports = {
    createUser
 }