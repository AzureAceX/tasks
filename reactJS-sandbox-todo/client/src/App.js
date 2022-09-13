import React, { useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getTask } from './actions/tasks.js'
import Tasks from './Components/Tasks/Tasks';

import Form from './Components/Form/Form.js';
// import Todo from './Components/Form/todo.js';

import todo from './images/logo.png';   
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
          To-Do
        </Typography>   
        <img className={classes.image} src={todo} alt="memories" height="120" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={5}>
              <Form />
            </Grid>
            <Grid item xs={12} sm={7} style={{maxHeight: '100vh', overflow: 'auto'}}>
              <Tasks/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
