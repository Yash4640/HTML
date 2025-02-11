import { useState } from 'react';
import './App.css';

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)} aria-expanded={selected === i}>
              <h4>{item.question}</h4>
              <span>{selected === i ? '↑' : '↓'}</span>
            </div>
            <div className={`content ${selected === i ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: 'Question 1',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor neque at turpis fermentum finibus.',
  },
  {
    question: 'Question 2',
    answer: 'Morbi sit amet quam nec sem placerat iaculis a a lorem. Nulla sit amet ultrices lectus.',
  },
  {
    question: 'Question 3',
    answer: 'Suspendisse potenti. Etiam mattis vestibulum leo, vitae dictum ligula ornare a.',
  },
];

export default App;
