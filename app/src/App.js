import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import React, { useState , useEffect }from 'react'
import axios from 'axios'
const reorder = (a, order) => {
	let arr = a
	switch (String(order)){
		case "az":
			arr.sort((x,y) => x.name.localeCompare(y.name))
			break
		case "za":
			arr.sort((x,y) => x.name.localeCompare(y.name))
			arr.reverse()
			break
		case "lh":
			arr.sort((x,y) => x.price-y.price)
			break
		case "hl":
			arr.sort((x,y) => y.price-x.price)
			break
		default:
			arr = a
	}
	return arr
}


const App = () => {
	const [products, setProducts] = useState([])
	const [brand, setBrand] = useState("all")
	const [sort, setSort] = useState("none")

	useEffect(() => {
	const getProduct = async () => {
		const {data} = await axios.get("/api/products")	
		const brandToShow = (brand==="all") ?
			data :
			data.filter(product => product.brand === brand)

		const orderToShow = (sort==="none") ? 
			brandToShow :
			reorder(brandToShow, sort)
		setProducts(orderToShow)
	}
	getProduct()
	return () => {
	
	}
	}, [brand, sort])



	const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
	<BrowserRouter>
	  <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">saddepressedlonelyskaterboi</Link>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Brands</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <button onClick={ () => {setBrand("all")}}>ALL</button>
        </li>

        <li>
          <button onClick={ () => {setBrand("PENNY")}}>PENNY</button>
        </li>

        <li>
          <button onClick={ () => setBrand("SANTA CRUZ")}>SANTA CRUZ</button>
        </li>
      </ul>

	  <h3>Sort</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <button onClick={ () => {setSort("lh")}}>Low to high</button>
        </li>

        <li>
          <button onClick={ () => {setSort("hl")}}>High to low</button>
        </li>

        <li>
          <button onClick={ () => setSort("az")}>A->Z</button>
        </li>

        <li>
          <button onClick={ () => setSort("za")}>Z->A</button>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
	  <Routes>
		<Route path="/product/:id" element={<ProductPage products={products}/>} />
		<Route path="/" exact={true} element={<HomePage products={products}/>} />
	  </Routes>
      </div>

    </main>
  </div>
	</BrowserRouter>
  );
}

export default App;
