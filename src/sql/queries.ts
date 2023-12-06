import { Pool } from 'pg'

const pool = new Pool({
    user : "postgres",
    host: "localhost",
    database : "oli",
    password :"azerty",
    port: 5432
    // connectionString : process.env.DATABASE_URL,
})

const queries = {
    getAllAdmins : async function(){
        let res:any
        pool.query('SELECT * FROM "Admins";',(err, results) => results.rows)            
        console.log(res)
        return res
    }
}
export default queries