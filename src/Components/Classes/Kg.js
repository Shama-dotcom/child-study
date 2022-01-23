import React from 'react';
import './Kg.css';

function kg(props) {
  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getdata('card_id');

    const card = document.getElementById(card_id);
    card.style.display = 'block';

    e.targent.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <div className='kg-head'>Sense Organs
    </div>
      <div
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
      >
        {props.children}
      </div>
    </>
  );
}

export default kg;
