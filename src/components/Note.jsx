import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button title='delete note' onClick={handleClick}>
        <DeleteForeverIcon style={{ color: 'royalblue' }} />
      </button>
    </div>
  );
}

export default Note;
