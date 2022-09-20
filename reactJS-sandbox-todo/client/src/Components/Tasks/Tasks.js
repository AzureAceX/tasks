import React from "react";
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Task from "./Task/Task.js";
import useStyles from './styles';

const Tasks = (currentId, setCurrentId) => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const classes = useStyles();

    return(
        !tasks ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {tasks.map((task, index) => (
                    <Grid key={index} item xs={12} sm={6}>
                        <Task task={task} currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )       
    );
}


export default Tasks;