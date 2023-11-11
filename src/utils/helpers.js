export function getItemPropertyById(id, property, cartItems) {
  const item = cartItems.find(item => item.id === id);
  return item ? item[property] : null;
}

export function calculateTotalByProperty(cartItems, property) {
  const item = cartItems
    .map(item => item[property])
    .reduce((acc, cur) => acc + cur, 0);

  return item;
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

export function generateRandomID() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}
