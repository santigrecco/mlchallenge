const querystring = require('querystring');
const axios = require('axios');


const Items = require('../models/Items');
const ItemDetails = require('../models/ItemDetails');

class ItemsController {

   async getItemsList(req, res) {
      const {
         search
      } = req.query;
      const baseURL = 'https://api.mercadolibre.com/sites/MLA/search';
      const query = querystring.stringify({
         q: search
      });

      const requestURL = `${baseURL}?${query}`;

      try {
         const response = await axios.get(requestURL);
         const parsedData = new Items(response.data);
         res.json(parsedData);
      } catch (e) {
         res.send(e);
      }
   }

   async getItem(req, res) {
      const {
         id
      } = req.params;

      const categoriesURL = 'https://api.mercadolibre.com/categories';
      const itemURL = 'https://api.mercadolibre.com/items';
      const itemDetailsRequest = axios.get(`${itemURL}/${id}`);
      const itemDescriptionRequest = axios.get(`${itemURL}/${id}/description`);

      try {
         const [detailsResponse, descriptionResponse] = await Promise.all([itemDetailsRequest, itemDescriptionRequest]);
         const {
            category_id
         } = detailsResponse.data;
         const categoriesRequest = axios.get(`${categoriesURL}/${category_id}`);
         const categoriesResponse = await categoriesRequest;

         const parsedData = new ItemDetails(
            detailsResponse.data,
            descriptionResponse.data,
            categoriesResponse.data
         );
         res.json(parsedData);

      } catch (error) {
         console.log(error)
         res.send(error);
      }

   }

}

module.exports = new ItemsController();