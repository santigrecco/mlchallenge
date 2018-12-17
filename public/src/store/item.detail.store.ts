import { configure, observable, action } from "mobx";
import { ItemDetail } from "../../models/itemDetail.model";

configure({ enforceActions: "observed" }); // Doesn't allow state changes without actions

class ItemDetailsStore {
   private readonly itemsUrl = "/api/items";

   /**
    * Updated item details
    */
   @observable itemDetails: ItemDetail;

   @observable isLoading: boolean;

   @action
   fetchItemDetail(itemId: string) {
      this.itemDetails = null;
      this.isLoading = true;
      // Fetch new items
      fetch(`${this.itemsUrl}/${itemId}`)
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
      this.itemDetails = response;
      this.isLoading = false;
   }

   /**
    * Catch the error and empty the results
    * @param error
    */
   @action.bound
   private fetchFailed() {
      this.itemDetails = null;
      this.isLoading = false;
   }
}

export const itemDetailsStore = new ItemDetailsStore();
