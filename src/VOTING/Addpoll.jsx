import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Addpoll = () => {
  const [pollData, setPollData] = useState({
    question: '',
    options: ['', '', '', ''],
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Poll Data:', pollData);
    // Save logic here
  };

  return (
    <Container className="mt-4">
      <h2>Add Poll</h2>
      <Form onSubmit={handleSubmit}>
        {/* Question Field */}
        <Form.Group className="mb-3">
          <Form.Label>Question</Form.Label>
          <Form.Control
            type="text"
            name="question"
            value={pollData.question}
            onChange={handleChange}
            placeholder="Enter poll question"
            required
          />
        </Form.Group>

        {/* Options Fields */}
        {pollData.options.map((option, index) => (
          <Form.Group className="mb-3" key={index}>
            <Form.Label>Option {index + 1}</Form.Label>
            <Form.Control
              type="text"
              name={`option${index + 1}`}
              value={option}
              onChange={handleChange}
              placeholder={`Enter option ${index + 1}`}
              required
            />
          </Form.Group>
        ))}

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <Link to ='/view' >
          <Button variant="primary" type="button" className="btn-sm" style={{ width: '120px' }}>EDIT</Button>
          </Link>
          <Button variant="danger" type="button" className="btn-sm" style={{ width: '120px' }}>
            DELETE
          </Button>
          <Button variant="success" type="submit" className="btn-sm" style={{ width: '120px' }}>
            SAVE
          </Button>
          <Button variant="info" type="button" className="btn-sm" style={{ width: '120px' }}>
            VIEW
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Addpoll;
