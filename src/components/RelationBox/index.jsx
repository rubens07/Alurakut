import React from 'react'

const RelationBox = ({ title, list }) => {

  return (
    <>
      <h2 className="smallTitle">
        {title} ({list.length})
      </h2>
      <ul>
        {list.map((item, index) => {
          if (index >= 6) return;
          return (
            <li key={index}>
            <a href="#">
              <img src={`${item.image}`}/>
              <span>{item.title}</span>
            </a>
            </li>
          );
        })}
      </ul>
    </>
  )
};

export default RelationBox;
