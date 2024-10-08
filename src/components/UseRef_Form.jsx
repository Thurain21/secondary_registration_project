import React, { useRef } from 'react'
import './UseRef_Form.css'

function UseRef_Form() {

    const name = useRef('');
    const email = useRef('');
    const region = useRef('');

    const regions = ['Singapore','Japan','Korea','Thailand','China'];
    
    const onClickEvent = () => {
        const data = {
            name : name.current.value,
            email : email.current.value,
            region : region.current.value
        }

        console.log(data);
        
    }
    return (

    <div className="container">
        
        <form>
            <div><h1>Form using useRef hook</h1>
                <input type="text" ref={name} className="user_name" placeholder='Enter your name' />
            </div>
            <div>
                <input type="email" ref={email} className="user_email" placeholder='Enter your name' />
            </div>
            <div>
                <select className="user_region" ref={region}>
                    {regions.map((item,index) => <option key={index} value={item}>{item}</option>)}
                </select>
            </div>
            <div>
                <input type="button" value="Register" onClick={()=>onClickEvent()} className="user_btn" />
            </div>
        </form>
    </div>
  )
}

export default UseRef_Form