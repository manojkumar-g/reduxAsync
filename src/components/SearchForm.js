import React from 'react';

const SearchForm = ({fetchMovieData}) =>{
  let input = '';
  return (
  <div className ='row'>
        <br/>
        <form className="form-inline" role="form">
          <div className="form-group">
            <label >Enter Movie:</label>
            <input type="text" className="form-control" id="title" placeholder="Title"
             ref = {node => {input=node}}/>
          </div>
          <button type="submit" className="btn btn-info submit-btn" onClick = {e => {e.preventDefault();fetchMovieData(input.value)}}>Search</button>
        </form>
    </div>
)}

export default SearchForm;
