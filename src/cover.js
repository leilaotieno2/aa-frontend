import React from 'react';

const Cover = () => {
  return (
    <div>
      <h1>Welcome to A.A Family Hospitals</h1>
      <img
        src={process.env.PUBLIC_URL + 'https://i.pinimg.com/564x/e4/14/02/e414020ea436f0a58eac0f3ffa6d5ab8.jpg'}
        alt="Hospital"
        style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
      />
    </div>
  );
};

export default Cover;
