export const getGifs = async (categories) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=JsWsa2Kf7HGlCeJaVD19VPWEtxlex3J4&q=${categories}&limit=10`;

    const response = await fetch(url);

    const {data} = await response.json();

    const gifs = data.map(img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url
    }))

    return gifs;

}
