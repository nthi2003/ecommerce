const UserService = require('../services/UserService')
const createUser = async (req , res) => {
    try{
       const { name , email , password , confirmPassword , phone} = req.body
       const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*$/
       const isCheckEmail = reg.test(email) 
       if(!name || !email || !password || !confirmPassword || !phone) {
        return res.status(200).json({
            status: 'error',
            mes: 'Điền thêm thông tin còn thiêú'
        })
       } else if(!isCheckEmail) {
        return res.status(200).json({
            status: 'error',
            mes: 'Nhập sai định dạng email'
        })
       } else if (password !== confirmPassword) {
        return res.status(200).json({
            status: 'error',
            mes: 'Mật khẩu không khớp'
        })
       }
       console.log('isCheckEmail', isCheckEmail)
       const response = await UserService.createUser({name, email, password, confirmPassword, phone });
       return res.status(200).json(response)
    }catch(e) {
        return res.status(404).json({
            mes : e.message
        })
    }
}
module.exports = {
    createUser
}