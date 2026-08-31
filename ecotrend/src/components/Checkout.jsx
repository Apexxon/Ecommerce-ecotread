import { useState } from 'react';
import { useCart } from '../context/CartContext';

function simulateCheckout(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cart.length === 0) {
                reject(new Error('Seu carrinho está vazio.'));
            } else {
                const total = cart.reduce(
                    (sum, item) => sum + item.price * item.qty,
                    0
                );

                resolve({
                    orderId: Date.now(),
                    total
                });
            }
        }, 1500); // Simula o tempo de resposta de um servidor
    });
}

export function Checkout() {
    const { cart, setCart } = useCart();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    async function handleCheckout() {
        setLoading(true);
        setMessage(null);

        try {
            const result = await simulateCheckout(cart);

            setMessage(
                `Pedido #${result.orderId} confirmado! Total: R$ ${result.total.toFixed(2)}`
            );

            setCart([]);
        } catch (err) {
            setMessage(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <button onClick={handleCheckout} disabled={loading}>
                {loading ? 'Processando...' : 'Finalizar Compra'}
            </button>

            {message && <p>{message}</p>}
        </div>
    );
}
