export const fetchPhotosData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const dataPhotos = await response.json();
    // console.debug(dataPhotos);
    return dataPhotos;
}