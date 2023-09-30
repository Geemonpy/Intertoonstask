import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `http://caffa.smsoman.com/api/V1/product/${id}`,
          {
            headers: {
              Authorization: "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        console.log("API Response:", data); 
        console.log("sucessss")
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        console.log("you have big error")
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 py-3">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6 py-5">
            <Skeleton height={30} width={250} />
            <Skeleton height={90} />
            <Skeleton height={40} width={70} />
            <Skeleton height={50} width={110} />
            <Skeleton height={120} />
            <Skeleton height={40} width={110} inline={true} />
            <Skeleton className="mx-3" height={40} width={110} />
          </div>
        </div>
      </div>
    );
  };

  // Inside your ShowProduct component
const ShowProduct = () => {
  return (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-md-6 col-sm-12 py-3">
          <img
            className="img-fluid"
            src={product.data.product.image} // Accessing image property
            alt={product.data.product.name} // Accessing name property
            width="400px"
            height="400px"
          />
        </div>
        <div className="col-md-6 col-md-6 py-5">
          <h4 className="text-uppercase text-muted">
            {product.data.product.category} {/* Accessing category property */}
          </h4>
          <h1 className="display-5">{product.data.product.name}</h1> {/* Accessing name property */}
          <p className="lead">
            {/* Assuming rating is present in the data */}
            {product.data.product.rating} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6  my-4">${product.data.product.price}</h3> {/* Accessing price property */}
          <p className="lead">{product.data.product.description}</p> {/* Accessing description property */}
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product.data.product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
            Go to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};


  return (
    <>
      <Navbar />
      <div className="container">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
      <Footer />
    </>
  );
};

export default Product;
