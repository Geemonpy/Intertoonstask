// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// import { Link } from "react-router-dom";

// const Products = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState(data);
//   const [loading, setLoading] = useState(false);
//   let componentMounted = true;

//   const dispatch = useDispatch();

//   const addProduct = (product) => {
//     dispatch(addCart(product))
//   }

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       const response = await fetch("https://fakestoreapi.com/products/");
//       if (componentMounted) {
//         setData(await response.clone().json());
//         setFilter(await response.json());
//         setLoading(false);
//       }

//       return () => {
//         componentMounted = false;
//       };
//     };

//     getProducts();
//   }, []);

//   const Loading = () => {
//     return (
//       <>
//         <div className="col-12 py-5 text-center">
//           <Skeleton height={40} width={560} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//         <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//           <Skeleton height={592} />
//         </div>
//       </>
//     );
//   };

//   const filterProduct = (cat) => {
//     const updatedList = data.filter((item) => item.category === cat);
//     setFilter(updatedList);
//   }
//   const ShowProducts = () => {
//     return (
//       <>
//         <div className="buttons text-center py-5">
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
//             Women's Clothing
//           </button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
//           <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
//         </div>

//         {filter.map((product) => {
//           return (
//             <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
//               <div className="card text-center h-100" key={product.id}>
//                 <img
//                   className="card-img-top p-3"
//                   src={product.image}
//                   alt="Card"
//                   height={300}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     {product.title.substring(0, 12)}...
//                   </h5>
//                   <p className="card-text">
//                     {product.description.substring(0, 90)}...
//                   </p>
//                 </div>
//                 <ul className="list-group list-group-flush">
//                   <li className="list-group-item lead">$ {product.price}</li>
//                   {/* <li className="list-group-item">Dapibus ac facilisis in</li>
//                     <li className="list-group-item">Vestibulum at eros</li> */}
//                 </ul>
//                 <div className="card-body">
//                   <Link to={"/product/" + product.id} className="btn btn-dark m-1">
//                     Buy Now
//                   </Link>
//                   <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>

//           );
//         })}
//       </>
//     );
//   };
//   return (
//     <>
//       <div className="container my-3 py-3">
//         <div className="row">
//           <div className="col-12">
//             <h2 className="display-5 text-center">Latest Products</h2>
//             <hr />
//           </div>
//         </div>
//         <div className="row justify-content-center">
//           {loading ? <Loading /> : <ShowProducts />}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;


// ------------------------------------------------------------------------------------------------------------\\

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = ({productItem}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setData(productItem)
    console.log(productItem)

  },[productItem])



  let componentMounted = true;

  const dispatch = useDispatch();

  const addProductToCart = (product) => {

    const token = localStorage.getItem("token")
    console.log(token)

    if(token!== ""&& token!==undefined && token){
      dispatch(addCart(product));
    } else{
      window.location.href="/login"

    }

   
  };

 

  const Loading = () => {
    return (
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <Skeleton height={592} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderProductCards = () => {
    if (!data || data.length === 0) {
      return <div>No products available.</div>;
    }
  
    return data.map((product) => (
      <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <div className="card text-center h-100" key={product.id}>
          <img
            className="card-img-top p-3"
            src={product.image}
            alt="Card"
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">
              {product.title && product.title.length > 12
                ? product.title.substring(0, 12) + "..."
                : product.title}
            </h5>
            <p className="card-text">
              {product.description && product.description.length > 90
                ? product.description.substring(0, 90) + "..."
                : product.description}
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item lead">$ {product.price}</li>
          </ul>
          <div className="card-body">
            <Link to={"/product/" + product.id} className="btn btn-dark m-1">
              Details
            </Link>
            <button className="btn btn-dark m-1" onClick={() => addProductToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ));
  };
  

  return (
    <>

      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
          <h2 className="display-5 text-center text-white fs-0"></h2>

            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : renderProductCards()}
        </div>
      </div>
    </>
  );
};

export default Products;
