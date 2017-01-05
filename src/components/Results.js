import React from 'react';

const Results = ({data,isFetching}) =>
  {
  return (
    <div className = 'row'>

      <h1>{isFetching && 'Loading..'}</h1>
      {
        (() => {
          if(data.Error !== undefined && !isFetching)
            return <h1>No Movie With that name...</h1>
          else {
            return(
              <img src = {data.Poster}/>
            )
          }
        })()
      }

    </div>
  )
}


export default Results;
