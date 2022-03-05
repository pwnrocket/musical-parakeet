const BASE_URL = 'http://localhost:3000/user'

export async function getAllUsers(){
    const response = await fetch(BASE_URL);

    return await response.json();
}

export async function createUser(payload){
    const options = {
        method : 'POST',
        header : {'Content-Type': 'application/json'},
        body : JSON.stringify(payload)
    }

    const response = await fetch(`${BASE_URL}/create`, options);

    return await response.json();
}