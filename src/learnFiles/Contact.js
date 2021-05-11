import { useEffect, useState } from "react";
import useCustomHook from "./useCustomHook";


const ContactUs = ({initialNoOfVisitors,dummyProps}) => {
    const [noOfVisitors,setNoOfVisitors] = useState(0);

    const [state,setState] = useState(10)


    const data = useCustomHook({email:"data@gmail.com"})

    // useEffect(function,list) ----> this list is called as dependency list
    // Empty Dependancy array ----> Component Did Mount
    useEffect(()=>{
        console.log("Initial props",initialNoOfVisitors)
        console.log("Im in useEffect ---> Component did Mount")

        console.log(typeof state,typeof setState)
        return () =>{
            console.log("Im in Component Will Un Mount")
        }
    },[])



    // UseEffect ---> Will Run only when props -> initialNoOfVisitors changes
    useEffect(() =>{
        console.log("Initial No of Visitors Props",initialNoOfVisitors)
        return () =>{
            console.log("Returned from initialNoOfVisitors")
        }
    },[initialNoOfVisitors])

    // UseEffect ---> Will Run only when props -> dummyProps changes
    useEffect(()=>{
        console.log("Dummy Props",dummyProps)
    },[dummyProps])

    // UseEffect ---> Will Run on every change
    useEffect(() =>{
        console.log("Ill be executed at every re-render")
    })
    useEffect(() =>{
        console.log("Function State got updated",noOfVisitors)
    },[noOfVisitors])



    return (
        <div>
            {console.log("Im being Rendered")}
            <h1>
                This is a contact page
            </h1>
            <h2>
                Welcome to React Learning Session
            </h2>
            <label>No of Visitors</label>
            <p>{noOfVisitors}</p>
            <button onClick={() =>setNoOfVisitors(noOfVisitors + 10)}>Change State</button>
        </div>
    )
}


export default ContactUs;