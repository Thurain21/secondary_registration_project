import React, { useState } from 'react'
import './UseState_Form.css'

function UseState_Form() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [region,setRegion] = useState('');
    const [active,setActive] = useState(false);
    const regions = ['Singapore','Japan','Korea','Thailand','China'];


    const onClickEvent = () =>{
        const data = {
            name : name,
            email : email,
            region : region,
            active : active
        }
        console.log(data);
        
    }
  return (
    <div className="container">
        
        <form>
            <div><h1>Form using useState</h1>
                <input type="text"  className="user_name" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <input type="email"  className="user_email" placeholder='Enter your name' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <select className="user_region" onChange={(e)=>setRegion(e.target.value)}>
                
                    {regions.map((item,index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>
            <div className="user_active">
                <input type="checkbox" onChange={()=>{setActive(!active)}} value={active} /> I agree all terms and conditions.
            </div>
            <div>
                <input type="button" value="Register"  className="user_btn" onClick={()=>{onClickEvent()}}/>
            </div>
        </form>
    </div>
  )
}

export default UseState_Form