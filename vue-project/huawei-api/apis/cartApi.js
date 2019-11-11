import { BASEURL } from '../commons/Config'

const CARTURL = `${BASEURL}/cart`
const ADDCARTURL = `${BASEURL}/cart/add`
export default {

    async getCartInfoByUserId () {
        let res = await fetch(CARTURL)
        let data = await res.json()
        return data
    },

    async addCart (name, pid) {
        let res = await fetch(`${ADDCARTURL}?name=${name}&pid=${pid}`)
        let data = await res.json()
        return data
    }

}