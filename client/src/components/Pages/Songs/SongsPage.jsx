import React from 'react'
import { Link } from "react-router-dom";


const SongsPage = props => {

  const renderSongs = ()=>{
    return (
      <li  className="collection-item">
        I am a song
        <i className="material-icons"> delete </i>
      </li>
      // <li key={id} className="collection-item">
      //   <Link to={`/songs/${id}`}>
      //     {title}
      //   </Link>
      //   <i
      //     className="material-icons"
      //     onClick={onSongDelete(id)}
      //   >
      //     delete
      //     </i>
      // </li>
    );
  };
  



  
  return (
    <div>
      <ul className="collection">
        {renderSongs()}
      </ul>
      <Link
        to="/songs/new"
        className="btn-floating btn-large red right"
      >
        <i className="material-icons">add</i>
      </Link>
    </div >
  )
}

export default SongsPage;