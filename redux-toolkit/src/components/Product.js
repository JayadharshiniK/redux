import React from 'react'
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {

    const [products, getProducts] = useState([])

    useEffect(() => {
        //api
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => getProducts(result))
    }, []);

const cards = products.map(product => 
    //card-designing:
    <div className='col-md-3' style={{marginBottom:'20px'}}>
    <Card key={product.id} className='h-"100'>
        <div className="text-center">
        <Card.Img variant="top" src={product.image} style={{width:'100px', height: '150px'}}/>
        </div>
     
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          INR: {product.price}
        </Card.Text>
        
      </Card.Body>

      <Card.Footer style={{background: 'white'}}>
      <Button variant="primary">Add to Cart</Button>
      </Card.Footer>
    </Card>

    
</div>
    )

  return (
    <div>
        <h1>Product Dashboard</h1>
        <div className="row">
            {cards}
        </div>
        
    </div>
  )
}

export default Product