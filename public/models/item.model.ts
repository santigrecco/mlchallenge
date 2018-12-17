import { Price } from "./price.model";
export interface Item {
   /**
    * Id of the item
    */
   id: string;

   /**
    *  Title of the item
    */
   title: string;

   /**
    * Detailed price of the item (currency and amount)
    */
   price: Price;

   /**
    * Image of the item (thumbnail)
    */
   picture: string;

   /**
    * New, used or detail about the item
    */
   condition: string;

   /**
    * Specify if the shipping will be charged
    */
   free_shipping: boolean;

   /**
    * Address details
    */
   location: {
      state_name: string;
      state_id: string;
   };
}
