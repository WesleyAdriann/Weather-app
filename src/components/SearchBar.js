import React from 'react';

const SearchBar = props => {
    return (
        <form onSubmit={e => props.handleSearch(e)}>
            <div className="btn-group form-group w-100">
                <input
                    className="form-control"
                    type="text"
                    name="Search"
                    placeholder="Previsão do tempo dos próximos 5 dias"
                    onChange={e => props.handleChange(e)}/>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
            
        </form>
    );
}

export default SearchBar;