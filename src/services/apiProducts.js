const API_URL = 'https://fakestoreapi.com';
const ORDERS_URL = 'http://localhost:9000';

export async function getProducts() {
  const res = await fetch(`${API_URL}/products?limit=18`);

  if (!res.ok) throw new Error('Failed getting products!');

  const data = await res.json();
  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${ORDERS_URL}/orders/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const data = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${ORDERS_URL}/orders`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}
