const API_URL = 'https://fakestoreapi.com';

export async function getProducts() {
  const res = await fetch(`${API_URL}/products?limit=18`);

  if (!res.ok) throw new Error('Failed getting products!');

  const data = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
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
