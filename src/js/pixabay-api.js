export const fetchPhotosByQuery = searchedQuery => {
    return fetch(`https://pixabay.com/api/?${searchedQuery}`).then(responce => {
        if (!responce.ok) {
            throw new Error(responce.status);
        }
        return responce.json();
    })
}