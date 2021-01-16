import React from 'react'
import { makeStyles,withStyles, Card, Avatar, InputBase, Paper } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    sideMenu:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top : '75px',
        left : '0px',
        width : '17.5%',
        height : '730px',
        backgroundColor : '#DEEEFF'

    }
})

export default function SideMenu() {
    const classes = useStyles()

    return (
        <div className={classes.sideMenu}>

            
            <br />

            <font style={{marginTop:'10px', marginLeft:'10px', fontSize:'13px', color:'rgb(84, 84, 84)'}}><b>Patients</b></font>
            <div width='215px' style={{height:'30px',paddingTop:'0px', backgroundColor:'white',margin:'10px'}}>
            <InputBase  placeholder='Search Patient' style={{width:'180px', backgroundColor:'white', height:'10px', fontSize:'12px', marginLeft:'12px', marginTop:'-10px'}}> 
            </InputBase>
            <SearchIcon style={{fill:'grey', height:'20px', marginTop:'5px'}}></SearchIcon>
            </div>
            
            <Card style={{margin:'10px', marginTop:'0px', padding:'10px', paddingBottom:'15px', backgroundColor:'rgb(61, 137, 254)'}}>
            <Avatar alt="Shivam Sharma" src="/images/a1.jpeg" style={{float:'left'}} />
                <center>
                <b><font color='white' style={{fontSize:'12px'}}>Shivam Sharma</font></b>
                <br style={{lineHeight:'5px'}} />

                <FiberManualRecordIcon style={{float:'right', height:'15px', marginRight:'-8px', fill:'#39FF14'}}></FiberManualRecordIcon>
                <font style={{fontSize:'10px', color:'white'}}>9 Jan 2021</font> 
                
                
                </center>
            </Card>

            <Card style={{margin:'10px', marginTop:'0px', padding:'10px', paddingBottom:'15px'}}>
            <Avatar alt="Michael Scott" src="/images/2.png" style={{float:'left'}} />
                <center>
                <b><font style={{fontSize:'12px'}}>Michael Scott</font></b>
                <br style={{lineHeight:'5px'}} />

                <FiberManualRecordIcon style={{float:'right', height:'15px', marginRight:'-8px', fill:'red'}}></FiberManualRecordIcon>
                <font style={{fontSize:'10px', color:'grey'}}>No Clearance</font> 
                
                
                </center>
            </Card>

            <Card style={{margin:'10px', marginTop:'0px', padding:'10px', paddingBottom:'15px'}}>
            <Avatar alt="Dwight Schrute" src="/images/3.jpg" style={{float:'left'}} />
                <center>
                <b><font style={{fontSize:'12px'}}>Dwight Schrute</font></b>
                <br style={{lineHeight:'5px'}} />

                <FiberManualRecordIcon style={{float:'right', height:'15px', marginRight:'-8px', fill:'#39FF14'}}></FiberManualRecordIcon>
                <font style={{fontSize:'10px', color:'grey'}}>10 Jan 2021</font> 
                
                
                </center>
            </Card>

            <Card style={{margin:'10px', marginTop:'0px', padding:'10px', paddingBottom:'15px'}}>
            <Avatar alt="Jim Halpert" src="/images/4.jpg" style={{float:'left'}} />
                <center>
                <b><font style={{fontSize:'12px'}}>Jim Halpert</font></b>
                <br style={{lineHeight:'5px'}} />

                <FiberManualRecordIcon style={{float:'right', height:'15px', marginRight:'-8px', fill:'#39FF14'}}></FiberManualRecordIcon>
                <font style={{fontSize:'10px', color:'grey'}}>15 Jan 2021</font> 
                
                
                </center>
            </Card>

            
        </div>
    )
}
