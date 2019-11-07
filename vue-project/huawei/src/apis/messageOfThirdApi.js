import {BASEURL} from "../commons/config"

const MSGURL = `${BASEURL}/api/message`

export default {
    getMessageById(msg){
        fetch(MSGURL).then(res=>{
            res.json().then(msg)
        })
    }


}