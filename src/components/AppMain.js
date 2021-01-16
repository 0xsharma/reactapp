import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Grid, makeStyles,withStyles, Avatar, Button} from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    appmain:{
        
        flexDirection: 'column',
        position: 'absolute',
        top : '75px',
        left : '235px',
        width : '82.7%',
        height : '730px',
        backgroundColor : 'rgb(244, 245, 249)'

    }
})

class Date1 extends React.Component {
    date = Date().split(' ');
    

    render () {
        console.log(this.date);
       return(
           <>
           <span style={{float:'Right', color:'grey', fontSize:'10px'}}>Last Updated:
           <font color='black'>
           10:25AM, today &nbsp;
           <MoreHorizIcon style={{paddingTop:'5px',fill:'grey', marginRight:'20px'}}></MoreHorizIcon>
           </font>
           </span>
           
           </>
       )
    }
}





export default function AppMain() {
    const classes = useStyles()
    return (
        <div className={classes.appmain}>
            <Date1 />
            <br />
            <span style={{marginTop:'100px', paddingLeft:'25px', paddingTop:'100px', width:'200px', fontSize:'12px', color:'rgb(84, 84, 84)'}}><b>Patient Information</b></span>
             
            <br />
            <br />
            <Grid container spacing={2}>
                <Grid item xs={1} style={{marginLeft:'30px'}}>
                <Avatar alt="Shivam Sharma" src="/images/a1.jpeg" style={{float:'left', height:'75px', width:'75px'}} />
                </Grid>
                <Grid item xs={2}>
                    <b>
                        <font style={{color:'rgb(84, 84, 84)'}}>
                        Shivam Sharma</font></b><br />
                    <table>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Phone:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>+91-88258-12496</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Email:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>abc@gmail.com</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Gender:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>Male</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Age:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>21</b></font></td>
                        </tr>
                    </table>


                </Grid>

                <Grid item xs={3} style={{marginLeft:'30px'}}>
                    <br />

                    <table>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Surgery Type:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>Rotator Cuff Repair</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Surgery Date:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>15 Aug 2020</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Height(cm):</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>163</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Weight(lb):</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>110</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>BMI:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>19</b></font></td>
                        </tr>
                    </table>

                </Grid>


                <Grid item xs={3}>
                    <br />
                    <table>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Anesthesiologist:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>Dr.Christina</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Anesthesiologist phone:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>301-896-8754</b></font></td>
                        </tr>
                        <tr>
                            <td style={{padding: '0 30px 0 0'}}><font color='grey' style={{fontSize:'11px'}}>Anesthesiologist Email:</font></td>
                            <td ><font style={{fontSize:'11px'}}><b>christina@h3a.com</b></font></td>
                        </tr>
                        
                    </table>


                </Grid>
                <Grid item xs={2}>
                    <br />
                    <center>
                    <font style={{color:'grey', fontSize:'11px'}}>Surgery Clearance</font>
                    
                    <br />
                    <div style={{marginTop:'10px', color:'white', backgroundColor:'rgb(95, 230, 0)', borderRadius:'100px', height:'60px', width:'60px'}}>
                        <br />
                        <b>Yes</b>
                        </div>
                    </center>
                </Grid>
            </Grid>

            <br /><br />
            <table border='1px' style={{borderCollapse: 'collapse', borderColor:'rgb(208, 206, 209)', marginLeft:'50px', backgroundColor:'#fff'}}>
                <tr height='50px'>
                    <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)'}}>
                        <font style={{fontSize:'12px', color:'rgb(61, 137, 254)'}}>
                           <center> <b>List of Prior<br></br>Surgeries</b> </center>
                        </font>
                    </td>
                    <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)'}}>
                        <font style={{fontSize:'12px', color:'rgb(75, 75, 75)'}}>
                           <center> List of Medical<br></br>Diagnosis </center>
                        </font>
                    </td>
                    <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)'}}>
                        <font style={{fontSize:'12px', color:'rgb(75, 75, 75)'}}>
                           <center> List of<br></br>Medications</center>
                        </font>
                    </td>
                    <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)'}}>
                        <font style={{fontSize:'12px', color:'rgb(75, 75, 75)'}}>
                           <center> Airways<br></br> Evaluation </center>
                        </font>
                    </td>
                    <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)'}}>
                        <font style={{fontSize:'12px', color:'rgb(75, 75, 75)'}}>
                           <center> Anesthesia Clearance and<br></br> Recommendation </center>
                        </font>
                    </td>
                    
                    
                </tr>
            </table>
            
        <Card style={{height:'auto'}} variant='outlined'>
            <br />
            <span  style={{backgroundColor:'#DEEEFF',marginLeft:'50px' , width:'350px', height:'20px', display:'block'}}>
                <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                &nbsp;&nbsp;&nbsp; <b>First Time Surgery</b>
                </font>
            </span>
            <span  style={{backgroundColor:'rgb(237, 237, 236)',marginLeft:'50px' , width:'350px', height:'20px', display:'block'}}>
                <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                &nbsp;&nbsp;&nbsp; No
                </font>
            </span>

            <br /> 

            <span  style={{backgroundColor:'#DEEEFF',marginLeft:'50px' , width:'350px', height:'20px', display:'block'}}>
                <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                &nbsp;&nbsp;&nbsp; <b>Family History of Surgical Complications</b>
                </font>
            </span>
            <span  style={{backgroundColor:'rgb(237, 237, 236)',marginLeft:'50px' , width:'350px', height:'20px', display:'block'}}>
                <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                &nbsp;&nbsp;&nbsp; Yes
                </font>
            </span>


            <br /> 

            <span  style={{backgroundColor:'#DEEEFF',marginLeft:'50px' , width:'350px', height:'20px', display:'block'}}>
                <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                &nbsp;&nbsp;&nbsp; <b>If Yes, please provide more details</b>
                </font>
            </span>
            <span  style={{backgroundColor:'rgb(237, 237, 236)',marginLeft:'50px' , width:'340px', height:'auto', display:'block', paddingLeft:'10px'}}>
                <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </font>
            </span>

            <br />
            <font style={{fontSize:'11px', marginLeft:'50px', color:'rgb(67, 69, 69)'}}>
                Previous Surgeries
            </font>



            <table  style={{borderCollapse: 'collapse', borderColor:'rgb(208, 206, 209)', marginLeft:'50px', backgroundColor:'#fff'}}>

                <tr  height='30px' style={{backgroundColor:'#DEEEFF'}}>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'160px'}}>
                        <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                            <b>Surgery Type</b> 
                        </font>
                </td>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'100px'}}>
                        <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                            <b>Date</b> 
                        </font>
                </td>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'160px'}}>
                        <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                            <b>Anesthesia Type</b> 
                        </font>
                </td>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'160px'}}>
                        <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                            <b>Surgical Complications</b> 
                        </font>
                </td>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'250px'}}>
                        <font style={{fontSize:'12px', color:'rgb(67, 69, 69)'}}>
                            <b>Anesthetic Complications (nausea, vomiting, difficult intubation)</b> 
                        </font>
                </td>
                    
                </tr>

                <tr  height='30px' style={{backgroundColor:'rgb(237, 237, 236)'}}>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'160px'}}>
                        <font style={{fontSize:'12px', color:'black'}}>
                            Shoulder Reconstruction 
                        </font>
                </td>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'100px'}}>
                        <font style={{fontSize:'12px', color:'black'}}>
                            January 2008
                        </font>
                </td>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'160px'}}>
                        <font style={{fontSize:'12px', color:'black'}}>
                            General "Breathing Tube"
                        </font>
                </td>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'160px'}}>
                        <font style={{fontSize:'12px', color:'black'}}>
                            No
                        </font>
                </td>
                <td style={{padding:'10px', paddingLeft:'20px', paddingRight:'20px' , borderColor:'rgb(208, 206, 209)', width:'160px'}}>
                        <font style={{fontSize:'12px', color:'black'}}>
                            No 
                        <span style={{float:'right'}}>
                        <EditOutlinedIcon style={{fill:'grey', height:'20px'}}></EditOutlinedIcon>    
                        </span>
                        <span style={{float:'right'}}>    
                        <DeleteIcon style={{fill:'grey', height:'20px'}}></DeleteIcon>
                        </span>
                        
                        </font>
                </td>
                
                    
                </tr>
            </table>

            <br />

            <Button
                variant="contained"
                style={{marginLeft:'50px', backgroundColor:'rgb(61, 137, 254)', borderRadius:'3px'}}
                
                startIcon={<AddIcon style={{fill:'white'}} />}
            >
            <font style={{fontSize:'12px', color:'white', fontWeight:'normal', fontFamily:"Arial", textTransform:'none'}}>Add Surgery</font>
            </Button>

            <br />

        </Card>
            
<br />

        </div>
    )
}
