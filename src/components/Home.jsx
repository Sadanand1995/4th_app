import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";

  const productList = [
    {
      name: "Mac Book",
      price: 9200,
      imgSrc: img1,
      id: "sdfagfdczvd",
    },
    {
      name: "Black Shoes",
      price: 200,
      imgSrc: img2,
      id: "sdafsdvzxea",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({
      type: "addToCart",
      payload: options,
    });
    dispatch({
      type: "calculatePrice",
    });
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {productList.map((e) => {
        return (
          <ProductCard
            key={e.id}
            id={e.id}
            name={e.name}
            price={e.price}
            imgSrc={e.imgSrc}
            handler={addToCartHandler}
          />
        );
      })}
    </div>
  );
};

const ProductCard = ({ name, id, imgSrc, price, handler }) => {
  return (
    <div className="productCard">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, id, imgSrc, price, quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Home;
