import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditDetailsModal = ({
  children,
  user: { name, title, surname, area, email, bio, id },
  fetchUser,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fields, setFields] = useState({
    name: name || '',
    title: title || '',
    surname: surname || '',
    area: area || '',
    email: email || '',
    bio: bio || '',
  });

  useEffect(() => {
    setFields({ name, title, surname, area, email, bio });
  }, [name, title, surname, area, email, bio]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/profile/1`,
      {
        method: 'PUT',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (resp.ok) {
      fetchUser('1');
    } else {
      console.log('error in the put');
    }
  };

  return (
    <>
      <div onClick={handleShow}>{children}</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                value={fields.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>surname</Form.Label>
              <Form.Control
                type='text'
                name='surname'
                value={fields.surname}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>title</Form.Label>
              <Form.Control
                type='text'
                name='title'
                value={fields.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>area</Form.Label>
              <Form.Control
                type='text'
                name='area'
                value={fields.area}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>email</Form.Label>
              <Form.Control
                type='text'
                name='email'
                value={fields.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>bio</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='bio'
                value={fields.bio}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditDetailsModal;
