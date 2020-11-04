import React from 'react';
import { connect } from 'react-redux';

// Comoponents
// import CollectionItem from '../../components/collection-item';

// Selectors
import { selectCollection } from '../../redux/shop/shop.selectors';

// Styles
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  console.log('collection ===>', collection)
  return (
  <div className='category'>
    <h2>COLLECTION PAGE</h2>
  </div>
);
}


const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);