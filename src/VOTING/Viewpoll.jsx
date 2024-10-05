import React, { useState } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';

const Viewpoll = () => {
  // Initial poll data
  const [pollData, setPollData] = useState({
    question: 'What is your favorite programming language?',
    options: ['JavaScript', 'Python', 'Java', 'C++'],
  });

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Handle modal visibility
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('option')) {
      const index = parseInt(name.replace('option', '')) - 1;
      const newOptions = [...pollData.options];
      newOptions[index] = value;
      setPollData({ ...pollData, options: newOptions });
    } else {
      setPollData({ ...pollData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Poll Data:', pollData);
    handleClose();
  };

  return (
    <Container className="mt-4">
      <h2>View Poll</h2>

      {/* Poll Question and Options */}
      <div>
        <h4>Question: {pollData.question}</h4>
        <ul>
          {pollData.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>

      {/* Edit Button */}
      <Button variant="primary" onClick={handleShow}>
        Edit Poll
      </Button>

      {/* Modal for Editing Poll */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Poll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Edit Question */}
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                name="question"
                value={pollData.question}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Edit Options */}
            {pollData.options.map((option, index) => (
              <Form.Group className="mb-3" key={index}>
                <Form.Label>Option {index + 1}</Form.Label>
                <Form.Control
                  type="text"
                  name={`option${index + 1}`}
                  value={option}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            ))}

            {/* Modal Actions */}
            <Button variant="success" type="submit" className="me-2">
              Save Changes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Viewpoll;
