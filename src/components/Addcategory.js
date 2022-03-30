import React,{useState} from 'react'
const Addcategory = ({ setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length>2) {
            setCategories( cats => [inputValue,...cats]);
        }     
    }
  return (
      <form onSubmit={handleSubmit}>
      <div>
          <div>Addcategory</div>
                <input type="text" value={ inputValue } onChange={  handleInputChange }></input>
      </div>
      </form>
  ) 
}
export default Addcategory