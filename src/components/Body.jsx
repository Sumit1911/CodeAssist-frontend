import React from 'react';
import { Link } from 'react-router-dom';
import HoverText from '../components/hoverEffect/HoverEffect';

const Body = () => {
    return (
        <>
            <body>
                <div className="headline">
                    <HoverText/>
                    <Link to="/quiz">
                        <button className="button">Get Started</button>
                    </Link>
                </div>
            </body>
        </>
    );
}

export default Body;
