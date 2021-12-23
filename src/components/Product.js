import React from "react";
import PropTypes from "prop-types";

const Product = (props) => {
  const {
    kind,
    artistName,
    id,
    name,
    thumbnail,
    price,
    addToBasket,
    removeFromBasket
  } = props;

  return (
    <div>
      <h1>{artistName}</h1>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{kind}</p>
      <p>{id}</p>
      <img src={thumbnail} alt={`This is ${name}`} />
    </div>
  );
};

Product.defaultProps = {
  kind: "Media",
  name: "Incredible Song",
  pprice: "No price available"
};
//if product has been given an image, price etc (in the data.json file) then it will default to these values instead.

Product.propTypes = {
  artistName: PropTypes.string.isRequired,
  trackName: PropTypes.string,
  trackPrice: PropTypes.number,
  artworkUrl100: PropTypes.string.isRequired
};

export default Product;
