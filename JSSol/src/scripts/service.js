/**
 * Service - fetched data from the endpoints
 * @url - https://api.jsonbin.io/b/5e8c3aafaf7c476bc47e47a3
 * returns json formatted response
 */

const Service = function () {
    this.getData = () => {
        return fetch('http://www.mocky.io/v2/5e86ec5531000011d8814754')
                .then((response) => {
                    return response.json()
                })
    }
}

export default Service