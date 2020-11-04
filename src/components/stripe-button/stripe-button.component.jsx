import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_Jjur33kLzryDXuaBfNiyWzY900WHtHKMN9'

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful')
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='online-shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}.00`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;