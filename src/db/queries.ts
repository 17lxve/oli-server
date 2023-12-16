import { Pool } from 'pg'
import { hash } from '../utils'

const pool = new Pool({
    user : "postgres",
    host: "localhost",
    database : "oli",
    password :"azerty",
    port: 5432
    // connectionString : process.env.DATABASE_URL,
})

const queries = {
    // CREATE
    createAdmin : async function(nom:string, prenom:string, mdp:string){
        const res = pool.query(`INSERT INTO "Admins" (nom, prenom, mdp) values (${nom}, ${prenom}, ${hash(mdp)};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    createSurveillant : async function(nom:string, prenom:string, mdp:string, admin:number){
        const res = pool.query(`INSERT INTO "Surveillant" (nom, prenom, mdp, admin) values (${nom}, ${prenom}, ${hash(mdp)}, ${admin};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    createCorrecteur : async function(nom:string, prenom:string, mdp:string, admin:number){
        const res = pool.query(`INSERT INTO "Correcteurs" (nom, prenom, mdp, admin) values (${nom}, ${prenom}, ${hash(mdp)}, ${admin};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    createEtudiant : async function(nom:string, prenom:string, matricule:string, classe:number){
        const res = pool.query(`INSERT INTO "Etudiants" (nom, prenom, mdp, classe) values (${nom}, ${prenom}, ${matricule}, ${classe};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    createClasse : async function(niveau:string, filiere:string){
        const res = pool.query(`INSERT INTO "Classes" (niveau, filiere) values (${niveau}, ${filiere};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },

    // READ
    getAllAdmins : async function(){
        let res:any = pool.query('SELECT * FROM "Admins";',(err, result) => result.rows)            
        console.log(res)
        return res
    },
    getAdmin : async function(id:number){
        const res = pool.query(`SELECT * FROM "Admins" WHERE id=${id};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    getAllSurveillants : async function(id:number){
        const res = pool.query(`SELECT * FROM "Surveillants";`, (err, result) => result.rows)
        return res;
    },
    getSurveillant : async function(id:number){
        const res = pool.query(`SELECT * FROM "Surveillants" WHERE id=${id};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    getAllCorrecteurs : async function(id:number){
        const res = pool.query(`SELECT * FROM "Correcteurs";`, (err, result) => result.rows)
        return res;
    },
    getCorrecteur : async function(id:number){
        const res = pool.query(`SELECT * FROM "Correcteurs" WHERE id=${id};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    getAllEtudiants : async function(id:number){
        const res = pool.query(`SELECT * FROM "Etudiants";`, (err, result) => result.rows)
        return res;
    },
    getEtudiant : async function(id:number){
        const res = pool.query(`SELECT * FROM "Etudiants" WHERE id=${id};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    getAllClasses : async function(id:number){
        const res = pool.query(`SELECT * FROM "Classes";`, (err, result) => result.rows)
        return res;
    },
    getClasse : async function(id:number){
        const res = pool.query(`SELECT * FROM "Classes" WHERE id=${id};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },
    getClasseWithDetails : async function(niveau:string, filière:string){
        const res = pool.query(`SELECT * FROM "Classes" WHERE niveau=${niveau} and filiere=${filière};`, (err, result) => result.rows)
        console.log(res)
        return res;
    },

    // UPDATE
    updateAdmin : async function(id:number){
        const res="";
        console.log(res)
    }
}

export default queries