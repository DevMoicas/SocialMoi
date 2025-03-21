const token = 'IGAAOXhwAQSARBZAE9HYjBIXzVUVTFxREFzdTFRa3dqbXJNNXpZAbVpheFgwcGVMcV9FTVZANQWowcURzY1drUkJVS21iRHVwSjBsbDRJZA0dzZAjNSQWFnUmt0OS0yTlZAoNE1nbnE0NTdlWi1uY0pDRmZAnRDE5dTEtMlMycmVLN0RFQQZDZD'; //Token generado por instagram para leer todos los datos de mi perfil
const url = `https://graph.instagram.com/me?fields=id,username,profile_picture_url&access_token=${token}`;
fetch(url) //el fetch url me permite hacer peticiones http y estoy haciendo un GET a la URL anterior
    .then(response => response.json())
    .then(data => {
        document.getElementById('ProfilePicture').src = data.profile_picture_url;
    })
    .catch(error => console.error('Error al obtener la foto de perfil:', error));