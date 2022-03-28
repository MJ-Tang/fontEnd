import React, {useState} from 'react';

import CourseInput from './components/CourseGolas/CourseInput/CourseInput';
import CourseGoalList from './components/CourseGolas/CourseGoalList/CourseGoalList';

import './App.css';

function App() {

  const [courseGoals, setcourseGoals] = useState(
    [
      {text: 'Do all exercises!', id: 'g1'},
      {text: 'Finish the course!', id: 'g2'},
    ]
  );



  const addGoalHandler = enteredText => {
    console.log('entered text: ',enteredText);

    setcourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals]
      updatedGoals.unshift({
        text: enteredText, id: Math.random().toString()
      })
      return updatedGoals
    })
  }

  console.log(courseGoals);

  return (
    <div className="App">
      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id='goals'>
        <CourseGoalList />
      </section>
    </div>
  );
}

export default App;
