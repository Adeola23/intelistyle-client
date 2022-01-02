const API_URL = 'http://localhost:8000'

async function httpGetSearched() {
    const response =await fetch(`${API_URL}/garments`)
    return await response.json();
}