import { useCart } from '../hooks/useCart';

export function Cart() {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <aside className="cart">
      <h2>Carrinho</h2>
      {cart.length === 0 && <p>Vazio</p>}
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name} x{item.qty}</span>
          <button onClick={() => removeFromCart(item.id)}>Remover</button>
        </div>
      ))}
      <strong>Total: R$ {total.toFixed(2)}</strong>
    </aside>
  );
}