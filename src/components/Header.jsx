import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/avatar5.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(
        window.innerWidth > 800 ? true : false
    );

    const closenavhandler = () => {
        if (window.innerWidth < 800) {
            setIsNavShowing(false);
        } else {
            setIsNavShowing(true);
        }
    };
    return (
        <nav>
            <div className="container nav_container ">
                <Link to="/" className="nav_logo" onClick={closenavhandler}>
                    <img src={Logo} alt="" />
                </Link>
                {isNavShowing && (
                    <ul className="nav_menu">
                        <li>
                            <Link
                                to="/profile/sdfsdf"
                                onClick={closenavhandler}
                            >
                                Ernest Achiever
                            </Link>
                        </li>
                        <li>
                            <Link to="/create" onClick={closenavhandler}>
                                Create Post
                            </Link>
                        </li>
                        <li>
                            <Link to="/authors" onClick={closenavhandler}>
                                Authors
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout" onClick={closenavhandler}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                )}
                <button
                    className="nav_toggle-btn"
                    onClick={() => setIsNavShowing(!isNavShowing)}
                >
                    {isNavShowing ? <AiOutlineClose /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Header;
