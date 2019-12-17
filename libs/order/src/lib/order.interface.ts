export interface Recipient {
    name: string;
    email: string;
    created_at: Date;
  }
  
  export interface Delivery {
    courier: string;
    method: string;
  }
  
  export interface ChargeCustomer {
    currency: string;
    total_price: string;
  }
  
  export interface OrderItemTotalPrice {
    currency: string;
    amount: string;
  }
  
  export interface OrderItem {
    id: string;
    name: string;
    quantity: number;
    total_price: OrderItemTotalPrice;
  }
  
  export interface Order {
    id: string;
    recipient: Recipient;
    items: OrderItem[];
    delivery: Delivery;
    charge_customer: ChargeCustomer;
  }

  export interface OrderFilter {
    customer: any;
    start_date: Date;
    end_date: Date
  }