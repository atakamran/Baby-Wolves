import React from 'react';

const ImageComponent = ({ url, alt = 'Baby Wolves' }) => {
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageComponent;