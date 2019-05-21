import React from 'react';

const SearchBar = props => {
    return (
        <form>
            <div className="btn-group form-group w-100">
                <input
                    className="form-control"
                    type="text"
                    onChange={e => {props.handleChange(e)}}/>
                <button type="button" className="btn btn-primary">Buscar</button>
                
            </div>
        </form>
    );
}

export default SearchBar;