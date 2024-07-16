import React from 'react';
import { Row,Col,Card } from 'react-bootstrap';



function Wishlist() {
  return (
    <>
    <div className='container p-5'>

      <Row>
        <Col sm={12} md={6} lg={4} xl={2}>
          <Card>
            <Card.Img src='' variant='card-img-top' height={'180px'} />
          <Card.Body>
            <Card.Title>title...</Card.Title>
            <Card.Text>price</Card.Text>
            <div className="d-flex justify-content-between">
              <button className='btn border' >
              <i className="fa-solid fa-heart-circle-xmark" style={{color: "#ee117a",}} ></i>
              </button>
              <button>
              <i className="fa-solid fa-cart-plus" style={{color: "#1c4a53",}} />
              </button>
            </div>
          </Card.Body>
          </Card>
          </Col>
            
          <h1>No Wishlist Items</h1>
        
        
      </Row>
    </div>
    </>
  );
}

export default Wishlist;
