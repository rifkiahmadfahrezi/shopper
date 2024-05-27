export interface CartItem {
   id: number;
   title: string;
   price: number;
   quantity: number;
   total: number;
   discountPercentage: number;
   discountedTotal: number;
   thumbnail: string;
 }
 
export interface Order {
   id: number;
   products: CartItem[];
   total: number;
   discountedTotal: number;
   userId: number;
   totalProducts: number;
   totalQuantity: number;
 }