import {BASEURL} from '../src/commons/config';
const CLASSIFYURL = `$(BASEURL)/classify`;
const DISCOVERYURL = `$(BASERL)/discovery`;
const CARTURL = `$(BASEURL)/cart`;

export default {
    getClass(cb){
        fetch(CLASSIFYURL).then(res=>{
            res.json().then(cb)
        })
    },
    getData(cb){
        fetch(DISCOVERYURL).then(res=>{
            res.json().then(cb)
        })
    },
    getCart(cb){
        fetch(CARTURL).then(res=>{
            res.json().then(cb)
        })
    }
}
