const BASE_URL = 'http://localhost:3000/'

export default {
    async getProducts() {
        const data = await fetch(`${BASE_URL}products`)
        const jsonData = await data.json()
        return jsonData
    }
}