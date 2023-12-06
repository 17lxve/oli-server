import { toDataURL } from "qrcode";



export default function generateQR(){
    let data = {
        nom: "Admin 1",
        prenom: "Oli",
        mdp: "12345"
    }
    
    let stringdata = JSON.stringify(data)
    let req = "";
    toDataURL(stringdata,
    function (err, res){
        if(err){console.error(err)}
        else{
            req = res;
        }
    })
    return req;
}