import React from 'react';

const AppealCard = ({ list }) => {
  return (
    <div>
      {list.map(item => {
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppealCard;
