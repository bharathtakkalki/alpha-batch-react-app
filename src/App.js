import { useState } from 'react';
import Timer from './Timert';
import AboutUs from './AboutUs';
import './App.css';
import CommentApp from './App1';
import ContactUs from './Contact';
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
  const [initialVisitors,setInitialVisitors] = useState(100);
  const [dummyState,setDummyState] = useState(10);

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
      {pageView === "CONTACT_US" && (
        <ContactUs initialNoOfVisitors={initialVisitors} dummyProps={dummyState} />
      )}
      <button onClick={aboutUsClickHandler}>About Us</button>
      <button onClick={() => setPageView("HOME")}>Back to Home</button>
      <button onClick={addNewStudent}>Add Student</button>
      <button onClick={() => setPageView("CONTACT_US")}>Move to Contact Us </button>
      <button onClick={() => setInitialVisitors(initialVisitors + 10)}>Change Visitors</button>
      <button onClick={()=>setDummyState(dummyState + 10)}>Change Dummy State</button>

      <div style={{marginTop:64}}>
        <CommentApp/>
        <Timer/>
      </div>
    </div>
  );
}

export default App;
