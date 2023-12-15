import { toDataURL, toFile } from "qrcode";



export default function generateQR(data : {nom:string, prenom:string, filière:string, niveau:number, matière:string}){
    let stringdata = JSON.stringify(data)
    toDataURL(stringdata,
    (err, res) => {
        if(err){
            console.error(err)
        }
        else{
            return res;
        }
    })
    
    toFile(`qrs/${data.nom + data.matière}.png`, JSON.stringify(data), (err) => console.error(err))
}