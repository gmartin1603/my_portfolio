import React, { useState } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import './ToggleButton.css'

function ToggleButton(props) {
    const [show, setShow] = useState(false)

    const showDrawer = () => {
        setShow(!show)
    }

    return (
        <div className="toggleButton">
            <button onClick={showDrawer} >
                Contact Me
            </button>
                <SideDrawer open={show}/>
        </div>
    );
}

export default ToggleButton;