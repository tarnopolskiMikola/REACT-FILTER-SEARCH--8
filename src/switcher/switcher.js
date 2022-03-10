import React from 'react'

const Switcher = ({buttonHandler}) => {
    const smalUrl = 'http://www.filltext.com/?rows=32&id={...|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigUrl = 'http://www.filltext.com/?rows=1000&id...|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    return(
        <div>
            <button type="button" className="btn btn-warning" onClick={() =>(buttonHandler(smalUrl))}>SMALL-32</button>
            <button type="button" className="btn btn-danger" onClick={() =>(buttonHandler(bigUrl))}>BIG-1000</button>
        </div>
    )
}
export default Switcher