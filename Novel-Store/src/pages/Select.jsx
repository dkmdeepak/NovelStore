import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Modal, Button, Card } from 'react-bootstrap';
import { bookUser, bookRemove } from '../services/allApis';
import { addBooksResponseContext, bookEditResponseContext } from '../Context Api/Contextapi';
import Edit from '@/Editing/Edit';
import { toast } from 'react-toastify';
import './Select.css'
import { PDFViewer, PDFDownloadLink, Document, Page, View, Text } from '@react-pdf/renderer'; // Removed StyleSheet import

function Select() {
  const { addBooksResponse, setAddBooksResponse } = useContext(addBooksResponseContext);
  const { bookEditResponse, setBookEditResponse } = useContext(bookEditResponseContext);

  const [allNewBooks, setAllNewBooks] = useState([]);
  const [logStatus, setLogStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData();
      setLogStatus(true);
    } else {
      console.log('login First');
      setLogStatus(false);
    }
  }, []);

  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(sessionStorage.getItem("username"));
    getData();
  }, [addBooksResponse, bookEditResponse]);

  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` };
    const result = await bookUser(header);
    if (result.status === 200) {
      setAllNewBooks(result.data);
    } else {
      console.log(result.response.data);
    }
  };

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem('token');
    const header = {
      'Authorization': `Bearer ${token}`
    };
    const result = await bookRemove(id, header);
    if (result.status === 200) {
      toast.success("Book Deleted Successfully");
      getData();
    } else {
      toast.error(result.response.data);
    }
  };

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const MyDocument = ({ title, author, publishYear, content }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>Author: {author}</Text>
          <Text style={styles.publishYear}>Publish Year: {publishYear}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </Page>
    </Document>
  );
  
  const styles = {
    page: {
      flexDirection: 'column',
      margin: 10,
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    author: {
      fontSize: 18,
      marginBottom: 8,
    },
    publishYear: {
      fontSize: 16,
      marginBottom: 8,
    },
    content: {
      fontSize: 14,
      marginTop: 10,
    },
  };

  return (
    <>
      <div className='p-5'>
        <Row>
          <div className='p-5 mb-5 d-flex justify-content-center' style={{ fontSize: '100px' }}>
            <h1>Welcome <span className='text-warning'>{user}</span></h1>
          </div>

          {allNewBooks.length > 0 ? allNewBooks.map((item, index) => (
            <Col className='d-flex justify-content-between m-3 p-3' key={item._id}>
              <Card style={{ width: '18rem' }} id='card'>
                <Card.Body className='p-3 m-3'>
                  <div className="card-body">
                    <h2 className="card-title" id='card-title' style={{ color: 'rgb(0, 168, 45)' }}>
                      {index + 1}
                    </h2>
                    <br />
                    <h5 className="card-title">
                      <span style={{ fontSize: 18, fontWeight: 'bold' }}>Title: </span>
                      <span><Link to={'/view'}>
                        {item.title}
                      </Link></span>
                    </h5>
                    <p className="card-text">
                      <span style={{ fontSize: 16, fontWeight: 'bold' }}>Author: </span>
                      <span>{item.author}</span>
                    </p>
                    <p className="card-text">
                      <span style={{ fontSize: 16, fontWeight: 'bold' }}>Publish Year: </span>
                      <span>{item.publishYear}</span>
                    </p>
                      <br /><br />
                    <div className='d-flex justify-content-between'>
                      <span className='d-flex justify-content-end position-absolute top-5 end-4 p-2'>
                      <PDFDownloadLink
                        document={<MyDocument
                          title={item.title}
                          author={item.author}
                          publishYear={item.publishYear}
                          content={item.content}
                        />}
                        fileName={`${item.title}.pdf`}
                      >
                        <button className="download-button">
                            <div className="docs">
                              <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line y2="13" x2="8" y1="13" x1="16"></line>
                                <line y2="17" x2="8" y1="17" x1="16"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                              </svg>
                              Docs
                            </div>
                            <div className="download">
                              <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line y2="3" x2="12" y1="15" x1="12"></line>
                              </svg>
                            </div>
                          </button>
                      </PDFDownloadLink>
                      </span>
                      <span className='d-flex justify-content-center'>
                        <Link 
                          id='hot' 
                          className='circle-btn x-1 y-3 me-1'
                          onClick={() => handleShowModal(item.content)}>
                          <i className='fa-solid fa-eye fa-xl'/>
                        </Link>
                      </span>
                      <br /><br />
                      <span className='d-flex justify-content-center'>
                        <Edit allNewBook={item} />
                        <Link 
                          onClick={() => handleDelete(item._id)} 
                          id='cool' 
                          className='x-1 y-3 me-3'>
                          <i className='fa-solid fa-trash fa-xl' style={{ color: '#e1141e' }} />
                        </Link>
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Modal
               show={showModal}
               onHide={handleCloseModal}
               backdropClassName="custom-modal-backdrop">
                <Modal.Header closeButton>
                  <Modal.Title>Content</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{modalContent}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleCloseModal} style={{width:'100%', background:'red',border:'none',boxShadow:'none'}}> 
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          )) : (
            <Col xs={12}>
              <h3>No Books Available!!</h3>
            </Col>
          )}
        </Row>
      </div>
    </>
  );
}

export default Select;
