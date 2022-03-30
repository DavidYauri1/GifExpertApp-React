import React from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useEffectGifs } from '../hooks/useEffectGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({category}) => {


  const {data:imagenes,loading} = useEffectGifs(category)
  
  return (
      <div>
        <li>{category}</li>
        {loading && <p>Loading...</p>}
         <div className="card-grid">
             

                   {
                       imagenes.map(img => 
                            <GifGridItem
                                key={img.id}
                                {...img}

                            />
                       )
                   } 

             
                    </div>
      </div>
  )
}
