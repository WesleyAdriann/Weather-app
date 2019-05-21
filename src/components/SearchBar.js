import React from 'react';

const SearchBar = props => {
    return (
        <form>
            <div className="btn-group form-group w-100">
                <input className="form-control" type="text"/>
                <button type="button" class="btn btn-primary">Buscar</button>
                
            </div>
        </form>
    );
}

export default SearchBar;