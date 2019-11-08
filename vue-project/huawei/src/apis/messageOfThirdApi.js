import {BASEURL} from "../commons/config"

const MSGURL = `${BASEURL}/information`

export default {
    getMessage(cb){
        fetch(MSGURL).then(res =>{
            res.json().then(cb);
            console.log(cb);
        })
    }


}