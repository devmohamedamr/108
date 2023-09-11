import React , {createContext, useState} from 'react'
export let counterContext = createContext()
export default function CountContextProvider(props) {

    let [x,setX] = useState(0)

    function increment(){
        setX(++x)
    }

    return <counterContext.Provider value={{x,increment}}>
        {props.children}
    </counterContext.Provider>

}
