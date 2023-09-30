import { useEffect, useState } from "react";
import { Navbar, Main, Product, Footer } from "../components";
import ProductSearch from "./Product";

function Home() {
  const [search,setSearch]=useState("");
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    let URL = "https://caffa.smsoman.com/api/V1/products"
  
 fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer EqzC2SPUcFRrrJKKL4ngAGAnZDIN8ZLS",
      },
      body: JSON.stringify({
        currentpage: 1,
        pagesize: 100,
        sortorder: {
          field: "menu_name",
          direction: "desc",
        },
        searchstring: search,
        filter: {
          category: "",
        },
      }),
    }).then(res=>res.json())
    .then(data=>{
      const _products = data.data.products || [];
      setProducts(_products) 
    

    })
  } , [search])

  const pageStyle = {
    backgroundColor: "black",
   
  };




  return (
    <>
    <div style={pageStyle}>
      <Navbar search={search} setSearch={setSearch} />
      <Main />
      <Product  productItem={products}/>
      <Footer />
      </div>
    </>
  )
}

export default Home