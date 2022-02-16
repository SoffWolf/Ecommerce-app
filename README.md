# A quick build web app with ReactJS, Node, and Express.
## To run the demo of the app
To run the app please clone the repo, run the Node server and the front-end with the following command(run in the main repo):
```console
foo@bar:~$ npm install
foo@bar:~$ npm start
foo@bar:~$ cd ../app
foo@bar:~$ npm install
foo@bar:~$ npm start
```

__________________________________________________________
## API documentation
<strong>What is this API about?</strong> This is an over-simplification example of a server, with only the implementation of the GET endpoint. Other funtionalities can be implement similarly. The API is written in ExpressJS. You can check the code in server/server.js file. 
<strong>How to use this API</strong> To utilize this API, you can perform HTTP requests to server (with the condition that the server is online). Here's a simple GET operation example in ReactJS:<br>


<code>
	
  	import React, { useState , useEffect } from 'react'
  	import axios from 'axios'

	const [products, setProducts] = useState([])

	useEffect(() => {
		const getProduct = async () => {
		const {data} = await axios.get("/api/products")	 //GET the data from the URL to the variable products
		setProducts(data)
	}
	getProduct()
	return () => {
	  //
	}
	}, [])
	console.log(products)
	
</code>
