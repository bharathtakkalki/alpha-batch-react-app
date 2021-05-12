import { useEffect, useState } from "react";

const Work = (props) =>{
    const [work,setWork] = useState("")
    const query = new URLSearchParams(props.location.search)
    useEffect(()=>{
        console.log(props)
        // console.log(query.get("key"))
        console.log(query.get("key"))
        console.log(query.get("key1"))

        setWork(props.match.params.work)
    },[])
    return (
        <div>
            This is work page related to {work}
        </div>
    )
}

export default Work;