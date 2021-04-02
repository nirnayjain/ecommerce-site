import bcrypt from 'bcryptjs'
const users=[
    {
        name:'Admin User',
        email:"admin@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
     {
        name:'Aman',
        email:"aman@example.com",
        password:bcrypt.hashSync('123456',10),
    },
     {
        name:'Ankit',
        email:"ankit@example.com",
        password:bcrypt.hashSync('123456',10),
    },
    
]
export default users;