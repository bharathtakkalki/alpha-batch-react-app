import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContactUs from './components/contactUs/ContactUs';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import Resume from './components/resume/Resume';
import Work from './components/work/Work';


const Controller = () =>{

    return(
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Home/>} />
                    <Route path="/contact-us" render={() => <ContactUs/>} />
                    <Route path="/resume" render={() => <Resume/>} />
                    <Route path="/work/:work" render={(props) => <Work {...props} />} />
            
                    <Route path="*" render={() => <NotFound/>}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Controller;