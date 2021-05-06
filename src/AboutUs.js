import React from 'react';
import StudentDisplay from './StudentDisplay';


// 16.8.0 <  Component Lifcycle method were only available to Class Component.
// 1. render Method => First function to be called 
// 2. componentDidMount => Second Function to be called post first render Note -  This method is called only Once(after First Render)
// 3. shouldComponentUpdate => Input params => nextProps & nextState ---> Boolean ===== This method is called for every props or state change.
// 4. componentWillUnmount => Before the component is removed from DOM this method is invoked.
class AboutUs extends React.Component{
    constructor(){
        super()
        this.state = {
            noOfStudents:""
        }
    }

    componentDidMount(){ // Component has rendered (Mount => Add to DOM) 
        console.log("Im in component did mount")
        // setTimeout(()=>{
        //     this.setState({
        //         ...this.state,
        //         noOfStudents:5
        //     })
        // },2000)
    }
    shouldComponentUpdate(nextProps, nextState){ // should i retrigger the render -> boolean
        console.log("Im in should component update")
        console.log(nextProps,nextState)
        return true;
    }
    componentWillUnmount(){ // Component will be removed (Unmount => Remove from DOM)
        console.log("Im in component will unmount")
    }
    
    render(){
        console.log("Im in Render method")
        return(
            <div className="about-us">
                <h1>We are in Aplha Batch</h1>
                <h3>We are learning MERN Stack</h3>
                <div>
                    Some of the Students from the alpha batch:
                    {this.props.students.map((student,index) =>(
                        <StudentDisplay name={student.name} rollNo={student.rollNo} designation={student.designation}/>
                    ))}
                </div>
                <div style={{marginTop:16,marginBottom:16,fontSize:24,fontWeight:600}}>No of Students: {this.state.noOfStudents}</div>
            </div>
        )
    }
}

export default AboutUs;