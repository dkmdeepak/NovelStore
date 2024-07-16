import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Details() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };


  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
return (
  
  <div className='p-5 my-4' style={{width:'100%',height:'100%',marginTop: 20}}>



              <Container style={{marginTop: 20}} className="card-grid" >
              <Button variant="primary" onClick={() => handleShowModal(item.content)}>
        Launch static backdrop modal
      </Button>
                  
      <Modal
        show={showModal} onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {modalContent}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

          </Container>
              

  </div>
)
}
export default Details