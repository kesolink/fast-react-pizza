
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
// const className = "bg-yellow-400 rounded-full py-3 px-4 font-semibold uppercase tracking-wide inline-block hover:bg-yellow-300 transition-colors duration-300 focus:bg-yellow-300 focus:outline-none focus-within:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4"

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton>&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold border-b">Your cart, %NAME%</h2>

      <ul className=" mt-3 divide-y divide-stone-200">
        {cart.map((item) => (<CartItem item={item}  key={item}/>))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary" > Order pizzas </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
