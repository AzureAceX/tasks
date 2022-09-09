import React, { useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getTask } from './actions/tasks.js'
import Tasks from './Components/Posts/Tasks';


import Form from './Components/Form/Form.js';
// import Todo from './Components/Form/todo.js';

import todo from './images/download.png';   
import useStyles from './styles.js';

const App = () => { 
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, [dispatch]);

  return(
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          To Do
        </Typography>   
        <img className={classes.image} src={todo} alt="memories" height="120" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={1}>
          <Grid item xs={12} sm={5} >
              <Form />
              {/* <Todo /> */}
            </Grid>
            <Grid item xs={12} sm={7}>
              <Tasks/>
            </Grid>
            {/* <Grid item xs={12} sm={5} md={12}>
              < Todo />
            </Grid> */}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
