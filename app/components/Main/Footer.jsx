import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} YOGESH, Inc. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    bottom: 0,
    width: "100%",
    backgroundColor: "transparent",
    color: "gray",
    textAlign: "center",
    padding: "10px 0",
  },
};

export default Footer;
