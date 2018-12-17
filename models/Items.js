module.exports = class Items {

   constructor(itemData) {

      this.author = {
         firstName: 'Santiago',
         lastName: 'Grecco'
      }

      this.categories = this.getCategories(itemData.filters);

      this.items = itemData.results
         .slice(0, 4)
         .map(itemData => ({
            id: itemData.id,
            title: itemData.title,
            price: {
               currency: itemData.currency_id,
               amount: +itemData.price,
               decimals: 1
            },
            condition: itemData.condition,
            picture: itemData.thumbnail,
            free_shipping: itemData.shipping.free_shipping,
            location: {
               state_name: itemData.address.state_name,
               state_id: itemData.address.state_id
            }
         }))
   }

   getCategories(filters) {
      const categories = filters.filter(filter => filter.id === 'category');
      return categories[0] && categories[0].values[0].path_from_root
         .map(category => category.name);
   }

}