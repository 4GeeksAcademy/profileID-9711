export async function getProfile (){
    const response = await ("https://supadermo.ernestofreyre.com/api/profiles");
    const data = await response.json();
    return data;
}