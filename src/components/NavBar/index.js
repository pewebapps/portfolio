import React from "react";
import { NavLink } from 'react-router-dom';

const styles = {
    navbarStyle: {
      alignItems: "center"
    },
    containerBackground: {
        backgroundColor: "#4C4B63",
        padding: "32px"
    }
  };

function NavBar() {
    return (
        <div className="container-xxl" style={styles.containerBackground}>
            <ul className="nav justify-content-center" style={styles.navbarStyle}>
                <li className="nav-item" >
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                             isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/projects"
                        className={({ isActive }) => 
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Projects
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => 
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;