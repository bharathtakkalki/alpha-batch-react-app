import {useState,useEffect} from 'react'

const useCustomHook = ({body}) =>{
    const [state,setState] = useState()

    useEffect(()=>{
        /// Get data from server based on the body 
        setState({})
    },[body])

    return state
}

export default useCustomHook;
