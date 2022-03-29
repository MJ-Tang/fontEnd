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

  const deleteItemHandler = goalId => {
    setcourseGoals(prevgoals => {
      const updateGoals = prevgoals.filter(goal => goal.id !== goalId)
      return updateGoals;
    })
  }

  let countent = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  )

  if (courseGoals.length > 0) {
    countent = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    )
  }

  console.log(courseGoals);

  return (
    <div className="App">

      <section id='goal-form'>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>

      <section id='goals'>
        {countent}
      </section>
    </div>
  );
}

export default App;
