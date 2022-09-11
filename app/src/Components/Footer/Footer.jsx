import React from "react";
import styles from "./styles.module.scss";

import trustedOne from "../../Assets/Images/Footer/trusted-1.png";
import trustedTwo from "../../Assets/Images/Footer/trusted-2.png";
import trustedThree from "../../Assets/Images/Footer/trusted-3.png";
import trustedFour from "../../Assets/Images/Footer/trusted-4.png";
import trustedFive from "../../Assets/Images/Footer/trusted-5.png";

const Footer = () => {
  return (
    <footer>
      <img src={trustedOne} alt="Speed Trade" />
      <img src={trustedTwo} alt="McAfee Secure" />
      <img src={trustedThree} alt="GeoTrust" />
      <img src={trustedFour} alt="Verisign" />
      <img src={trustedFive} alt="Symantec" />
    </footer>
  );
};

export default Footer;
