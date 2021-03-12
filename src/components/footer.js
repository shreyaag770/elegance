import React from "react";
// import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

// import BackgroundHeader from "./public/Bg1.png";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    // backgroundImage: 'url('+ BackgroundHeader+')',
    height: 600,

    // position: 'absolute',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    [theme.breakpoints.up('md')]: {
      height: 850,
    },

    //  margin: 24,
    //  padding: 24,
  },
 footer: {
   backgroundColor: "#001a66",
   color: "white",
   textAlign: "center",
   height: "50px",
 }


}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
     <img src="./footer1.png" alt="lady" className={classes.BackgroundHead} />
     <div className={classes.footer}>
     Made by Team Codess
     </div>
    </>
  );
};

export default Footer;
