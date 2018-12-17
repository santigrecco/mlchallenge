import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomePage } from "./home-page/home-page";
import { Header } from "./header/header";
import { Details } from "./details/details";

import "./app.scss";
import { itemsStore } from "./store/items.store";
import { observer } from "mobx-react";
import { capitalize } from "./utils/capitalize";
import { itemDetailsStore } from "./store/item.detail.store";
import { Breadcrumb } from "./breadcrumb/breadcrumb";

@observer
export class App extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      document.title = capitalize(itemsStore.searchValue) || "ML Search";
      return (
         <BrowserRouter>
            <div className="app-content">
               {/* Header a route so it can use the router navigation */}
               <Route path="**" component={Header} />
               <Switch>
                  <Route path="/items/:id" component={Details} />
                  <Route path="/items" component={HomePage} />
               </Switch>
            </div>
         </BrowserRouter>
      );
   }
}
