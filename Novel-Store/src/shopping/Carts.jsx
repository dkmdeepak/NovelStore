import React from 'react';
import { Row,Col } from 'react-bootstrap';


function Cart() {
  
  return (
    <div className='container p-5'>
      <Row>
        <Col sm={12} md={8}>
          <h3>Cart Summery</h3>
          <table className='table table-bordered shadow'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Product Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td>id</td>
                <td>title</td>
                <td>
                  <img height={'180px'} src='{item?.thumbnail}' alt="" />
                </td>
                <td>price</td>
                <td>quantity</td>
                <td>
                  <button className='btn'>+</button>
                  <input type="text" name=''  id='' className='form-control'/>
                  <button className='btn'>-</button>
                </td>
                <td>
                  <button className='btn' >
                  <i className="fa-solid fa-trash" style={{color: "#e80000",}} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          
          <h3 className='text-center text-warning'>NO Cart Item Available...</h3>
          
        </Col>
        <Col sm={12} md={4}>
          <div className='border shadow p-5 mt-5'>
            <h3>Total Product: <span className='text-info'>total product</span></h3>
            <h5>Total Amount: <span className='text-warning'>
          </span>amount total</h5>
          </div>
          <div className='d-grid mt-5'>
            <button className='btn btn-block btn-success' > Check Out</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
