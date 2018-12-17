import { Item } from "./item.model";

export interface ItemList {
   /**
    *  Author data, contains first  name and last name
    */
   author: {
      firstName: string;
      lastName: string;
   };

   /**
    * Array of the categories for breadcrumb
    */
   categories: string[];

   /**
    * Array of items
    */
   items: Item[];
}
