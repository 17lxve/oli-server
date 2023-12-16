import bcrypt from 'bcrypt';

const hash = (password : string) => {
     return bcrypt.genSalt(10, (err, salt) => {
        return bcrypt.hash(password, salt, (err, hash) => hash)
    })
}

export default hash;