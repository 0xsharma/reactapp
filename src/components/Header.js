import { Badge, AppBar, Grid, IconButton, Toolbar, Button, Avatar } from '@material-ui/core'
import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';


export default function Header() {
    return (
        <AppBar position='static' color='#fff' style={{boxShadow:'none', height:'60px'}}>
            <Toolbar>
                <Grid container>

                    <Grid item  >
                    <img src="/images/Capture.PNG" style={{marginTop:'10px',marginLeft:'-15px'}}/>

                    </Grid>
                    
                    <Grid item xs={1} style={{ paddingTop:'25px',height:'60px', marginLeft:'25px', backgroundColor:'rgb(61, 137, 254)'}}>
                        <font style={{fontSize:'10px', color:'white' }}><center>PATIENTS</center></font>
                    </Grid>
                    <Grid item xs={1} style={{ paddingTop:'25px'}}>
                        <font style={{fontSize:'11px', color:'black' }}><center><b>CALENDER</b></center></font>
                    </Grid>
                    <Grid item xs={1} style={{ paddingTop:'25px'}}>
                        <font style={{fontSize:'11px', color:'black' }}><center><b>USERS</b></center></font>
                    </Grid>
                    <Grid item xs={1} style={{ paddingTop:'25px'}}>
                        <font style={{fontSize:'11px', color:'black' }}><center><b>BILLING</b></center></font>
                    </Grid>
                    
                    
                    
                    {/* <Grid item>
                        <Button color="inherit" style={{marginTop:'15px', marginRight:'15px'}}><font style={{fontSize:'11px'}}>Patients</font></Button>
                        
                        <Button color="inherit" style={{marginTop:'15px', marginRight:'15px'}}><font style={{fontSize:'11px'}}>Calender</font></Button>

                        <Button color="inherit" style={{marginTop:'15px', marginRight:'15px'}}><font style={{fontSize:'11px'}}>Users</font></Button>

                        <Button color="inherit" style={{marginTop:'15px'}}><font style={{fontSize:'11px'}}>Billing</font></Button>
                    </Grid> */}

                    <Grid item sm>

                    </Grid>

                    <Grid item  >
                        <IconButton style={{fill:"black", marginTop:'10px'}}>
                            <Badge variant="dot" color="secondary" overlap="circle">
                                <NotificationsIcon style={{fill:"black", marginRight:'-5px'}}></NotificationsIcon>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <Avatar alt="Shivam Sharma" src="/images/a1.jpeg" style={{marginTop:'10px', marginRight:'-20px', height:'25px', width:'25px'}}/>
                            </Badge>
                        </IconButton>
                        

                    </Grid>

                </Grid>
            </Toolbar>

        </AppBar>
    )
}
