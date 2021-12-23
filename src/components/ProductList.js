//purpose of the productlist is to display a list of multimedia
import React from "react";
// import PropTypes from "prop-types"; //prop types is above internal components e.g Product, as we import from third party dependencies beforre internal.
// import musiclist from "./models/data.json";
import Product from "./Product";

const ProductList = (props) => {
  return props.products.map((product) => (
    <Product
      kind={product.kind}
      id={product.trackId}
      artistName={product.artistName}
      name={product.trackName}
      thumbnail={product.artworkUrl100}
      price={product.trackPrice}
    />
  ));
};

// ProductList.propTypes = {
//   products: Proptype.shape({
//       kind:
//   }

//   )
// }

export default ProductList;
