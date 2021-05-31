import React, { Children } from 'react'
import Menu from './Menu';
const Base=({
    title="My Title",
    description="My description",
    className="bg-dark text-white p-4",
    children}
)=> {
    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className={className}>{children}</div>
            </div>
            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-success text-white text-center py-3">
                    <h4>
                        if you got any question, reach me out at instagram
                    </h4>
                    <button className="btn btn-warning btn-lg">Contact Us</button>
                    <div className="container">
                        <span className="text-warning">
                            A basic Ecom website built on Django+Reactjs
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Base;
