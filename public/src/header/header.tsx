import React, { Component } from "react";
import { observer } from "mobx-react";

import "./header.scss";
import image from "../../assets/Logo_ML.png";
import { itemsStore } from "../store/items.store";
import { parse } from "querystring";
import searchImage from "../../assets/ic_Search.png";

@observer
export class Header extends Component<{ match: any; location: any }> {
   searchStore = itemsStore;

   /**
    * Browser Key code for Enter
    */
   private readonly enterKeyCode = 13;

   route = null;

   state: { searchValue: string } = {
      searchValue: itemsStore.searchValue,
   };

   constructor(props) {
      super(props);
   }

   componentDidMount() {
      const { search } = this.props.location;
      const value = parse(search)["?search"] as string;
      if (value) {
         this.setState({ searchValue: value });
         itemsStore.fetchItems(value);
      }
   }

   render() {
      return (
         <header className="container-fluid header">
            <div className="content">
               <img
                  className="logo"
                  src={image}
                  alt="ML"
                  onClick={this.goToHome}
               />

               <div className="input-group input-group-sm mb-3">
                  <input
                     id="search-input"
                     type="text"
                     className="search-input"
                     placeholder="Nunca dejes de buscar"
                     aria-label="Small"
                     aria-describedby="inputGroup-sizing-sm"
                     value={this.state.searchValue}
                     onChange={this.onType}
                     onKeyUp={this.search}
                  />
                  <div
                     className="input-group-append"
                     onClick={this.triggerSearch}
                  >
                     <div className="input-group-text">
                        <img className="search-image" src={searchImage} />
                     </div>
                  </div>
               </div>
            </div>
         </header>
      );
   }

   goToHome = () => {
      this.props["history"].push("/");
   };

   onType = e => {
      this.setState({
         searchValue: e.target.value,
      });
   };

   search = keyPressed => {
      if (keyPressed.keyCode === this.enterKeyCode) {
         this.triggerSearch();
      }
   };

   triggerSearch = () => {
      if (!this.state.searchValue.trim()) {
         return;
      }
      this.props["history"].push(`/items?search=${this.state.searchValue}`);
      itemsStore.fetchItems(this.state.searchValue);
   };
}
