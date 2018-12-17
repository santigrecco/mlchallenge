module.exports = class ItemDetails {

   /**
    * @param {*} details 
    * @param {*} description 
    */
   constructor(details, description, categories) {

      this.author = {
         firstName: 'Santiago',
         lastName: 'Grecco'
      }

      this.categories = categories.path_from_root.map(cat => cat.name);

      this.item = {
         id: details.id,
         title: details.title,
         price: {
            currency: details.currency_id,
            amount: details.price.toFixed(2),
            // decimals are hardcoded to two in order have consistency accross the app
            decimals: 2
         },
         picture: details.thumbnail,
         // getting the first picture in case it exists 
         // (should be the same as the thumbnail but better quality)
         big_picture: details.pictures[0] && details.pictures[0].url,
         condition: details.condition,
         free_shipping: details.shipping.free_shipping,
         sold_quantity: details.sold_quantity,
         description: description.plain_text
      }
   }

}