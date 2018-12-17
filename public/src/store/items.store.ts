import { configure, observable, action } from "mobx";
import { ItemList } from "../../models/itemList.model";

configure({ enforceActions: "observed" }); // Doesn't allow state changes without actions

class ItemsStore {
   private readonly itemsUrl = "/api/items";

   @observable searchValue = "";

   @observable searchResuts: ItemList;

   @observable isLoading: boolean;

   @action
   fetchItems(searchValue: string) {
      // Update the value of the last request to the backend
      this.searchValue = searchValue;
      this.searchResuts = null;
      this.isLoading = true;
      // Fetch new items
      fetch(`${this.itemsUrl}?search=${encodeURIComponent(searchValue)}`)
         .then(res => res.json())
         .then(this.fetchSuccess)
         .catch(this.fetchFailed);
   }

   /**
    * Update the state with the response
    * @param response
    */
   @action.bound
   private fetchSuccess(response) {
      this.searchResuts = response;
      this.isLoading = false;
   }

   /**
    * Catch the error and empty the results
    * @param error
    */
   @action.bound
   private fetchFailed() {
      this.searchResuts = null;
      this.isLoading = false;
   }
}

export const itemsStore = new ItemsStore();
