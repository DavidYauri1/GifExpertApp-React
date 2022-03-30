import React,{useState} from 'react'
import Addcategory from './components/Addcategory';
import { GifGrid } from './components/GifGrid';
import './index.css'
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  return (
    <div> 
        <h2>GifExpertApp</h2>
        <Addcategory setCategories={setCategories} />  
        <hr/>
        <ol>
          { 
        categories.map(category => (
          <GifGrid  category={category}/>
            ))
          }
        </ol>
    </div>
  )
}
