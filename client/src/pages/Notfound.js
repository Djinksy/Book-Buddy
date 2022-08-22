import React from 'react';
import logo from "../Images/reading-man.png"


const NotFound = () => {
    return (
        <>
            <main>
                <div className="pageError">
                    <p>404! Page Not Found. </p>
                    <p>Now go read a book </p>
                    <img
                        src={logo}
                        alt="reading-man"
                        className="reading-Img"
          />
                </div>
            </main>
        </>
    );
};

export default NotFound;