import React,{useState} from 'react'
import Child1 from './Child1';

const Parent1 = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    console.log(isLoggedIn);

  return (
    <div>
        <h1>Parent Component</h1>
        <Child1 isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default Parent1