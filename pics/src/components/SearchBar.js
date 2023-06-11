import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('cars');
    const onTextChange = event => {
        setTerm(event.target.value.replace(/[0-9]/,''));
        console.log(term);
    };
    const handleFormSubmit = event => {
        //prevent the submit form from refreshing page
        event.preventDefault();
        onSubmit(term);
    };
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                Confirm your search: {term}
                <br/>
                <input value={term} type='text' onChange={onTextChange} required />
                <br/>
                {term.length<3 && 'term must be longer'}
            </form>
        </div>
    );
}

export default SearchBar;