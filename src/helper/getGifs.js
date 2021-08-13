
 
 export const getGifs = async( category,limit = 10 ) => {
    
     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=avNLQMqG9pkoJqXG72CgyTgUjoG4qMSz&limit=${limit}`;
     const resp      = await fetch( url );
     const { data }  = await resp.json();
     
     const gifs = data.map( img => {
         return{
             id: img.id,
             title: img.title,
             url: img.images?.downsized_medium.url
         }
     });
     return gifs;
 }