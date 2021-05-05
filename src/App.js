import { useState } from 'react';
import './App.css';
import Home from './Home';
import Pricing from './Pricing';

// 16.8.0+ >
function App() {
  // const [state, setState] = useState(initialState)


  const [pageView,setPageView] = useState("HOME");
  // || && >= === ==
  const changeToPricingPage = () =>{
    // pageView = "PRICING" ----> Should not Mutate Directly
    setPageView("PRICING")
  }
  const backToHome = () =>{
    setPageView("HOME")
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
    </div>
  );
}

export default App;
