// import React from "react";
// import {
//   Grid,
//   Paper,
//   Avatar,
//   TextField,
//   Button,
//   Typography,

// } from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";

// import {
//   fade,
//   ThemeProvider,
//   withStyles,
//   createMuiTheme,
// } from "@material-ui/core/styles";

// // import BackgroundHeader from "./public/Bg1.png";

// const useStyles = makeStyles((theme) => ({
//   BackgroundHead: {
//     height: 250,

//     // position: 'absolute',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     width: "30%",
//     padding: theme.spacing(4, 16),
//     [theme.breakpoints.up("md")]: {
//       height: 800,
//     },

//     //  margin: 24,
//     //  padding: 24,
//   },

//   extra: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     alignContent: "center",
//     textAlign: "center",
//     flexGrow: 1,
//     margin: theme.spacing(0, 0),
//     flexWrap: "wrap",
//     [theme.breakpoints.up("md")]: {
//       margin: theme.spacing(4, 2),
//     },
//   },
//   footer: {
//     backgroundColor: "#001a66",
//     color: "white",
//     textAlign: "center",
//     height: "50px",
//   },
//   paperStyle: {
//     padding: 20,
//     height: "70vh",
//     // width:500,
//     // margin:"20px auto"
//     [theme.breakpoints.up("md")]: {
//       fontSize: "30px",
//       width: 500,
//     },
//   },
//   heading: {
//     fontFamily: "Lobster, cursive",
//     color: "#d3454c",
//     fontSize: "20px",
//     letterSpacing: ".05em",
//     textAlign: "center",
//     textShadow: "2px 2px 6px #404040",
//     [theme.breakpoints.up("md")]: {
//       fontSize: "30px",
//     },
//   },
//   field: {
//     backgroundColor: "#eeb7ba",
//     color: "#eeb7ba",
//     margin: theme.spacing(1, 2),
//     width: "300px",
//     [theme.breakpoints.up("md")]: {
//       width: "350px",
//     },
//   },

//   btnstyle: {
//     backgroundColor: "#d3454c",
//     color: "#fff",
//     margin: theme.spacing(1, 2),
//     width: "300px",
//     height: 50,

//     [theme.breakpoints.up("md")]: {
//       width: "350px",
//     },
//   },
// }));
// const Signup = () => {
//   const classes = useStyles();
//   const paperStyle = {
//     padding: 20,
//     height: "70vh",
//     width: 280,
//     margin: "20px auto",
//   };

//   const btnstyle = { margin: "8px 0" };
//   return (
//     <div className={classes.extra}>
//       <img src="./signup.png" alt="lady" className={classes.BackgroundHead} />
//       <div>
//         <Grid>
//           <div className={classes.paperStyle}>
//             <Grid align="center">
//               <h4 className={classes.heading}>Sign Up</h4>
//             </Grid>
//             <div className={classes.extra1}>
//               <TextField
//                 id="outlined-basic"
//                 label="Username"
//                 variant="outlined"
//                 className={classes.field}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Email"
//                 variant="outlined"
//                 className={classes.field}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Address"
//                 variant="outlined"
//                 className={classes.field}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Registration Number"
//                 variant="outlined"
//                 className={classes.field}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Hospital Name"
//                 variant="outlined"
//                 className={classes.field}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Specialization"
//                 variant="outlined"
//                 className={classes.field}
//               />
//               <TextField
//                 id="number"
//                 label="Contact"
//                 variant="outlined"
//                 className={classes.field}
//               />
//               <TextField
//                 id="password"
//                 label="Password"
//                 type="password"
//                 variant="outlined"
//                 className={classes.field}
//               />

//               <Button
//                 type="submit"
//                 variant="contained"
//                 className={classes.btnstyle}
//                 fullWidth
//               >
//                 Sign Up as Doctor{" "}
//               </Button>
//               <Typography>OR</Typography>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 className={classes.btnstyle}
//                 fullWidth
//               >
//                 Sign Up as Patient
//               </Button>

//             </div>
//             <Typography>
//               Already have an account ?
//               <Link to="/login">Sign In</Link>
//             </Typography>

//           </div>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

import {
  fade,
  ThemeProvider,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";

// import BackgroundHeader from "./public/Bg1.png";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    height: 250,

    // position: 'absolute',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "30%",
    padding: theme.spacing(4, 16),
    [theme.breakpoints.up("md")]: {
      height: 700,
    },

    //  margin: 24,
    //  padding: 24,
  },

  extra: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexGrow: 1,
    margin: theme.spacing(0, 0),
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4,2),
      marginBottom: "140px",
    },
  },
  footer: {
    backgroundColor: "#001a66",
    color: "white",
    textAlign: "center",
    height: "50px",
  },
  paperStyle: {
    padding: 20,
    height: "70vh",
    // width:500,
    // margin:"20px auto"
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
      width: 500,
    },
  },
  heading: {
    fontFamily: "Lobster, cursive",
    color: "#d3454c",
    fontSize: "20px",
    letterSpacing: ".05em",
    textAlign: "center",
    textShadow: "2px 2px 6px #404040",
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
  },
  field: {
    backgroundColor: "#eeb7ba",
    color: "#eeb7ba",
    margin: theme.spacing(1, 2),
    width: "300px",
    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
  },

  btnstyle: {
    backgroundColor: "#d3454c",
    color: "#fff",
    margin: theme.spacing(1, 2),
    width: "300px",
    height: 50,

    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
  },
}));
const DoctorSignup = () => {
  const classes = useStyles();
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };
  return (
    <div className={classes.extra}>
    <img src="./signup.png" alt="lady" className={classes.BackgroundHead} />
    <div>
      <Grid>
        <div className={classes.paperStyle}>
          <Grid align="center">
            <h4 className={classes.heading}>Sign Up</h4>
          </Grid>
          <div className={classes.extra1}>
            <TextField
              id="outlined-basic"
              label="Usename"
              variant="outlined"
              className={classes.field}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={classes.field}
            />
             <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              className={classes.field}
            />
              <TextField
              id="outlined-basic"
              label="Registration Number"
              variant="outlined"
              className={classes.field}
            />
              <TextField
              id="outlined-basic"
              label="Hospital name"
              variant="outlined"
              className={classes.field}
            />
              <TextField
              id="outlined-basic"
              label="specialization"
              variant="outlined"
              className={classes.field}
            />
            
            <TextField
              id="outlined-basic"
              label="contact Number"
              variant="outlined"
              className={classes.field}
            />
            
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              className={classes.field}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              className={classes.field}
            />

            <Link href="/">
              <Button
                type="submit"
                variant="contained"
                className={classes.btnstyle}
                fullWidth
              >
                Sign Up As Doctor
              </Button>
            </Link>
          </div>

          <Typography>
            Already a member ?<Link href="/doctorlogin">Sign In</Link>
          </Typography>
        </div>
      </Grid>
    </div>
  </div>
  );
};

export default DoctorSignup;
