import React from 'react';

// Components
import '../custom-button/custom-button.component';
import CustomButton from '../custom-button/custom-button.component';

// Styles
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl}) => {
  return (
    <div className='collection-item'>
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted> Add to cart </CustomButton>
    </div>
  );
};

export default CollectionItem;