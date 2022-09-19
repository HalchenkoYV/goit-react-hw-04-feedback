import './App.css';
import React, { useState,  } from 'react';
import Container from './Container/Cotainer';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const handleChoose = e => {
    const curMark = e.currentTarget.textContent.toLowerCase()

    switch (curMark) {
      case 'good':
        console.log(good+1)
        setGood(good+1);
        break;

      case 'neutral':
        setNeutral(neutral+1);
        break;
      
      case 'bad':
        setBad(bad+1);
        break;

      default:
        break;
    }
  };


  const renderNotification = (good + neutral + bad) === 0;
  const abc = { good, neutral, bad };

  return (
    <Container>
      <Section title='Please Leave feedback'>
        <Feedback onChoose={handleChoose} />
      </Section>
         
      <Section title='Statistics'>
        {renderNotification ? <Notification message="There is no feedback" /> : <Statistics text={abc} />}
      </Section>
    </Container>
  );
};



export default App;


