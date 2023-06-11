import { useState } from "react";

function SearchBar({onSubmit}){
    const [term, setTerm]=useState('');
    const onTextChange=event=>{
        setTerm(event.target.value);
        console.log(term);
    };
    const handleFormSubmit=event=>{

        //prevent the submit form from refreshing page
        event.preventDefault();
        onSubmit(term);
    };
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type='text' onChange={onTextChange} required />
            </form>            
        </div>
    );
}

export default SearchBar;