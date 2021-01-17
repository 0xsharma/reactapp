import { CssBaseline, makeStyles } from "@material-ui/core";
import {React} from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import './App.css';
import AppMain from "../components/AppMain";
require('dotenv').config()



const useStyles = makeStyles({
  AppRight:{
    
    width: '100%'
  }
})


function App() {
  const classes = useStyles();
  const envvar = process.env.REACT_APP_TESTVAR
  

  return (
    <>
        {envvar}
        <SideMenu />
        <div className={classes.AppRight}>
          <Header />
        </div>
        <AppMain />
        {/* <CssBaseline /> */}
    </>
  );
}

export default App;
