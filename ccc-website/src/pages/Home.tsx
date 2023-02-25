import React from "react";

const styles = {
  divStyle: {
    border: "5px solid pink",
  },
  pStyle: {
    fontSize: "15px",

  },
};


const Home = () => (
  <div style={styles.divStyle}>
    <p style={styles.pStyle}>Get started with inline style</p>
  </div>
);

export default Home;
