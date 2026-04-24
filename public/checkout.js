// SmartShift Stripe Checkout
const stripe = Stripe('pk_live_51PPbLTITFfYmVxiqh5K8FGFnezOlmWqeL7jZnCQbDod29cOfRA4Z5B7Br5JL43Kv3KBJHECFVRDVJD2SpMLTLHOg00Jjli92v3');

async function checkout() {
  // Replace with your actual Price ID from Stripe Dashboard
  const priceId = 'price_YOUR_PRICE_ID_HERE';
  
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: window.location.origin + '#success',
    cancelUrl: window.location.origin + '#cancel',
  });
  
  if (error) {
    console.error('Stripe error:', error);
    alert('Please add your Price ID in checkout.js');
  }
}
