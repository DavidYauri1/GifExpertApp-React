import React,{useEffect,useState} from 'react'

export const GifGrid = ({category}) => {

    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        getGisf()
        
    }, []);

    const getGisf = async  () => {
        const url = 'https:api.giphy.com/v1/stickers/trending?q=Rick+and+Morty&limit=5&api_key=USO4R8jUlNTR32ILSjnbyqMJBnPsQ1hF'
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gif= data.map( img => {
            return {
                id:img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }})
        console.log(gif);
        setImagenes(gif);
    }
    
  return (
    <div>

        <li>{category}</li>
        {
           imagenes.map(img => 
            <h1> { img.title}</h1>
           )
        }
    </div>
  )
}
