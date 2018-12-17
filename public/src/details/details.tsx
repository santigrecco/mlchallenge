import React, { Component } from "react";
import { observer } from "mobx-react";

import { itemDetailsStore } from "../store/item.detail.store";
import "./details.scss";
import Loader from "../common/loader/loader";
import { parseCurrency } from "../utils/parse-currency";
import { Breadcrumb } from "../breadcrumb/breadcrumb";

@observer
export class Details extends Component<{ match: any }> {
   componentDidMount() {
      const { id } = this.props.match.params;
      itemDetailsStore.fetchItemDetail(id);
   }

   render() {
      return (
         <div className="details">
            {itemDetailsStore.isLoading || !itemDetailsStore.itemDetails ? (
               <Loader isLoading={itemDetailsStore.isLoading} />
            ) : (
               <div className="wrapper">
                  <Breadcrumb
                     routes={itemDetailsStore.itemDetails.categories}
                  />
                  {this.itemContent()}
               </div>
            )}
         </div>
      );
   }

   itemContent() {
      const {
         picture,
         big_picture,
         title,
         condition,
         sold_quantity,
         price,
         description,
      } = itemDetailsStore.itemDetails.item;
      document.title = title;

      return (
         <div className="content">
            <div className="product container-fluid">
               <div className="row">
                  <img
                     src={big_picture || picture}
                     alt="img"
                     className="col-12 col-sm-8 picture"
                  />
                  <div className="col-12 col-sm-4">
                     <span className="condition-qty">
                        {condition} - {sold_quantity} Sold
                     </span>
                     <h1 className="title"> {title} </h1>
                     <p className="price">
                        {parseCurrency(price.currency)} {price.amount}
                     </p>
                     <button className="btn btn-primary buy"> Comprar </button>
                  </div>
               </div>
            </div>
            <div className="container-fluid description">
               <div className="row">
                  <h3 className="col-xs-12">Descripcion del producto</h3>
                  <p className="col-xs-12 text">{description}</p>
               </div>
            </div>
         </div>
      );
   }
}
