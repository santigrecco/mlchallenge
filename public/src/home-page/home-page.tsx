import React, { Component } from "react";

import "./home-page.scss";
import { itemsStore } from "../store/items.store";
import { observer } from "mobx-react";
import { parse } from "querystring";
import { Item } from "./item/item";
import Loader from "../common/loader/loader";
import { Breadcrumb } from "../breadcrumb/breadcrumb";

@observer
export class HomePage extends Component<{
   history: any;
   location: any;
}> {
   constructor(props) {
      super(props);
   }

   componentDidMount() {
      const value = parse(this.props.location.search)["?search"] as string;
      if (!itemsStore.searchValue && value) {
         itemsStore.fetchItems(value);
      }
   }

   render() {
      return (
         <div className="home">
            <div className="wrapper">
               {this.showBreadcrumb()}
               <div className="item-list">{this.showItems()}</div>
            </div>
            <Loader isLoading={itemsStore.isLoading} />
         </div>
      );
   }

   showBreadcrumb() {
      const { searchResuts } = itemsStore;
      return searchResuts && searchResuts.items ? (
         <Breadcrumb routes={itemsStore.searchResuts.categories} />
      ) : null;
   }

   showItems() {
      const { searchResuts, isLoading } = itemsStore;
      if (isLoading) return null;
      return searchResuts && searchResuts.items.length ? (
         searchResuts.items.map(item => (
            <Item item={item} router={this.props.history} key={item.id} />
         ))
      ) : (
         <div className="no-results"> No hay resultados para esa busqueda </div>
      );
   }
}
