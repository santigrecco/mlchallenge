import React, { Component } from "react";
import "./item.scss";
import freeShippingIcon from "../../../assets/ic_shipping@2x.png";
import { Item as ItemModel } from "../../../models/item.model";

export class Item extends Component<{ item: ItemModel; router: any }> {
   render() {
      const {
         picture,
         title,
         price,
         location,
         free_shipping,
      } = this.props.item;
      return (
         <div className="box">
            <div className="item" onClick={this.openItem}>
               <img
                  src={this.parseThumbnailUrl(picture)}
                  className="thumbnail"
                  alt="Item"
               />
               <div className="content">
                  <div className="price-shipping">
                     <span className="amount"> $ {price.amount} </span>
                     {free_shipping && (
                        <img
                           className="free-shipping"
                           src={freeShippingIcon}
                           alt="Free Shipping"
                        />
                     )}
                  </div>
                  <span className="title">{title}</span>
               </div>
               <p>{location.state_name} </p>
            </div>
            <div className="separator" />
         </div>
      );
   }

   openItem = () => {
      const { id } = this.props.item;
      this.props.router.push(`/items/${id}`);
   };

   parseThumbnailUrl(url: string): string {
      return url.replace("-I.jpg", "-O.jpg");
   }
}
