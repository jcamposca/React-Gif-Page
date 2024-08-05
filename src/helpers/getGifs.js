
export const getGifs = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ak0WRcs742Km3jrKdhkxaCQiqR3vqKW0&q=${categoria}&limit=10`
    const resp = await fetch(url)

    const {data = []} = await resp.json();


    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs

}