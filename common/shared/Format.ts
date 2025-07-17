import { OrderBook } from "../Model/OrderBook";

export namespace Format {
  export const generateRandomOrder = (side: 'buy' | 'sell'): OrderBook => {
    const price = parseFloat((Math.random() * 200 + 200).toFixed(2));
    const amount = parseFloat((Math.random() * 5 + 0.1).toFixed(3));
    return { price, amount, side };
  };

  export const generateOrderBook = (): OrderBook[] => {
    const orders: OrderBook[] = [];
    for (let i = 0; i < 10; i++) {
      orders.push(generateRandomOrder('buy'));
      orders.push(generateRandomOrder('sell'));
    }
    return orders.sort((a, b) => b.price - a.price); // Highest price first
  };
}