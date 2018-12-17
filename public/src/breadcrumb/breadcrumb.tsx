import React, { Component } from "react";
import "./Breadcrumb.scss";

export const Breadcrumb = params => {
   const { routes } = params;
   return <div className="breadcrumb">{parse(routes)}</div>;
};

/**
 * if it would support routing by breadcrumb it should have the url here
 */
const parse = (array): string => {
   return !array
      ? ""
      : array.map(str => (
           <a className="route" href="" key={str}>
              {str}
           </a>
        ));
};
