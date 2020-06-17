import React from 'react';

import Icon from './Icon.js';
import Design from './Design.js';
import Code from './Code.js';



const Logo = (props) => {
        const logos = {
                icon: Icon,
                design: Design,
                code: Code
        }
        return (
                <>
                {logos[props.logoType]}
                </>
        );
}

export default Logo;

