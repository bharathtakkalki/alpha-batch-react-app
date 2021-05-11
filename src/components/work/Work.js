import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Work = (props) =>{
    const [work,setWork] = useState("")
    const query = new URLSearchParams(useLocation().search)
    useEffect(()=>{
        console.log(props)
        console.log(query)
        setWork(props.match.params.work)
    },[])
    return (
        <div>
            This is work page related to {work}
        </div>
    )
}

export default Work;