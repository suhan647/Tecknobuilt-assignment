import React,{useState} from 'react'

const SearchForm = ({searchText}) => {
    const[text,setText] = useState('')

    const handleSubmit = (e) =>{
      e.preventDefault();

      searchText(text)
     
    }
  

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input  type="text"  placeholder='e.g politics' className='py-1 px-2 rounded-l-lg' onChange={(e) => setText(e.target.value)}/>
            <button type='submit' className='bg-green-400 py-1 px-1 rounded-r-lg text-white'>Submit</button>
        </form>
    </div>
  )
}

export default SearchForm