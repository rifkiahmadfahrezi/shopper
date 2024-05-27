export interface Address {
   street: string;
   city: string;
   state: string;
   country: string;
   postalCode: string;
 }
 
 export interface User {
   id: number;
   firstName: string;
   lastName: string;
   maidenName: string;
   age: number;
   gender: string;
   email: string;
   phone: string;
   username: string;
   password: string;
   birthDate: string;
   image: string;
   role: 'admin' | 'moderator' | 'user';
   address: Address;
 }