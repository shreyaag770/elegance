import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import BackgroundHeader from "./public/Bg1.png";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    // backgroundImage: 'url('+ BackgroundHeader+')',
    height: 400,

    // position: 'absolute',
    backgroundSize: "cover",
    backgroundPosition: "right",
    width: "60%",
    [theme.breakpoints.up("md")]: {
      height: 860,

      width: "70%",
    },

    //  margin: 24,
    //  padding: 24,
  },
  Head: {
    backgroundColor: "#eeb7ba",
    flexGrow: 1,
  },
  important: {
    // position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  extra: {
    textAlign: "center",
  },
  heading: {
    fontFamily: "Lobster, cursive",
    color: "#d3454c",
    fontSize: "20px",
    letterSpacing: ".05em",
    textShadow: "2px 2px 8px #404040",
    [theme.breakpoints.up("md")]: {
      fontSize: "80px",
    },
  },

  subHeading: {
    fontFamily: "Akaya Telivigala, cursive",
    color: "white",
    fontSize: "10px",
    letterSpacing: ".05em",
    marginTop: "10px",
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      marginTop: "20px",
    },
  },
  button: {
    backgroundColor: "#d3454c",
    padding: theme.spacing(1, 2),
    textTransform: "none",
    color: "white",
    fontWeight: "normal",
    boxShadow: "20px",
    marginTop: "10px",
    fontSize: "10px",
    [theme.breakpoints.up("md")]: {
      marginTop: "15px",
    },
  },

  features: {
    height: "900px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      {/* <div style={BackgroundHead}>

    </div> */}
      <div className={classes.Head}>
        <div className={classes.important}>
          <div className={classes.extra}>
            <div className={classes.heading} variant="h3">
              Elegance
            </div>
            <div className={classes.subHeading}>
              A woman's health is her capital
            </div>
            <Button className={classes.button} variant="contained">
              Check My Health
            </Button>
          </div>
          <img src="./Bg1.png" alt="lady" className={classes.BackgroundHead} />
        </div>
      </div>

      <div className={classes.features}>features</div>
    </>
  );
};

export default Home;
