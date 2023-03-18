import React from "react";

const styles = {
    navbarStyle: {
      alignItems: "center"
    },
    containerBackground: {
        backgroundColor: "#4C4B63",
        padding: "32px"
    },
    navItem: {
        color: "#FFF",
        fontFamily: 'Open Sans',
        fontWeight: "600"
    }
  };

function NavBar() {
    return (
        <div className="container-xxl" style={styles.containerBackground}>
            <ul className="nav justify-content-center" style={styles.navbarStyle}>
                <li className="nav-item" >
                    <a className="nav-link" aria-current="page" style={styles.navItem} href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={styles.navItem} href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={styles.navItem} href="#">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;