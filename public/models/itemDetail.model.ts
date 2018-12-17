import { Price } from "./price.model";

export interface ItemDetail {
   /**
    *  Author's information
    */
   author: {
      firstName: string;
      lastName: string;
   };

   /**
    * Categories of the item
    */
   categories: string[];

   /**
    * Item's information
    */
   item: {
      id: string;
      title: string;
      price: Price;
      picture: string;
      big_picture?: string;
      condition: string;
      free_shipping: boolean;
      sold_quantity: number;
      description: string;
   };
}
