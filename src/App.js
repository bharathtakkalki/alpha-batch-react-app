import { useState } from 'react';
import AboutUs from './AboutUs';
import './App.css';
import Home from './Home';
import Pricing from './Pricing';

// 16.8.0+ >

const studentArray = [
  {
    name:"Ravi ",
    rollNo:1,
    designation:"Frontend Developer"
  },
  {
    name:"Naveen Swami ",
    rollNo:2,
    designation:"Backend Developer"
  },
  {
    name:"Kushagra Singh ",
    rollNo:3,
    designation:"Frontend Developer"
  },
  {
    name:"Abhishek Kumar",
    rollNo:4,
    designation:"MERN Developer"
  },
  {
    name:"Nishant Kodambal ",
    rollNo:5,
    designation:"MEAN Developer"
  },

]

function App() {
  // const [state, setState] = useState(initialState)

  // State is a observed Variable ->  Whenever state changes Re-render is being done
  const [pageView,setPageView] = useState("HOME");
  const [students,setStudents] = useState(studentArray)

  // || && >= === ==
  const changeToPricingPage = () =>{
    // pageView = "PRICING" ----> Should not Mutate Directly
    setPageView("PRICING")
  }
  const backToHome = () =>{
    setPageView("HOME")
  }
  const aboutUsClickHandler = () => setPageView("ABOUT_US")
  const addNewStudent = () =>{
    const newStudents = [...students]
    newStudents.push({
      name:"New Student" + (students.length+1),
      rollNo:students.length+1,
      designation:"MERN Developers"
    })
    setStudents(newStudents)
  }
  return (
    <div className="App">
      This is in Sample React App
      {pageView === "HOME" && (
        <Home changeToPricingPage={changeToPricingPage} />
      )}
      {pageView === "PRICING" && (
        <Pricing backToHome={backToHome}/>
      )}
      {pageView === "ABOUT_US" && (
        <AboutUs students = {students} />
      )}
      <button onClick={aboutUsClickHandler}>About Us</button>
      <button onClick={() => setPageView("HOME")}>Back to Home</button>
      <button onClick={addNewStudent}>Add Student</button>
    </div>
  );
}

export default App;
