import React, { useState } from 'react';

const Home = () => {
  // Poll data
  const polls = [
    {
      id: 1,
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "Java", "C++"],
    },
    {
      id: 2,
      question: "Which framework do you prefer?",
      options: ["React", "Angular", "Vue", "Svelte"],
    },
    {
      id: 3,
      question: "What is your preferred development environment?",
      options: ["VSCode", "Sublime", "Atom", "IntelliJ"],
    },
  ];

  const [selectedOptions, setSelectedOptions] = useState({});

  // Handle selection
  const handleOptionSelect = (pollId, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [pollId]: option,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1>POLLING TIME</h1> <br></br>
      <div className="flex flex-col space-y-8 w-full max-w-4xl">
        {polls.map((poll) => (
          <div key={poll.id} className="bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="text-xl font-semibold mb-4">{poll.question}</h2>
            <div className="space-y-2">
              {poll.options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    name={`poll-${poll.id}`}
                    value={option}
                    className="form-radio text-blue-500 h-4 w-4"
                    checked={selectedOptions[poll.id] === option}
                    onChange={() => handleOptionSelect(poll.id, option)}
                  />
                  <span className="ml-2 text-lg">{option}</span>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Selected:{" "}
              <strong>
                {selectedOptions[poll.id] ? selectedOptions[poll.id] : "None"}
              </strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
