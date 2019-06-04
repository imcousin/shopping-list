import React from 'react';

// Using file name for function; pass props inside params
// Child Event Call
// onClick = {() => {handleDelete(index)}
export default ({ ItemsList, handleDelete }) => {
  return (
    <ul>
      {ItemsList.map((item, index) => {
        return(
          <li key={index+item.name}>{item.name} <button onClick={() => {handleDelete(index)}}>delete</button></li>
        );
      })}
    </ul>
  )
}