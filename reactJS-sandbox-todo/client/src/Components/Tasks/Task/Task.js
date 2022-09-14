import React from 'react';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteTask, updateTaskStatus } from '../../../actions/tasks.js';

import useStyles from './styles';

const Task = ({task}) => {
    const classes = useStyles();

    const handleDelete = (e) => {
        // dispatch(deleteTask(taskData));
    }

    const handleUpdate = (e) => {
        // dispatch(updateTaskStatus(taskData));
    }

    return(
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6">{task.title}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{task.childIds?.map((childIds,index) => `${childIds} `) }</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="body2" gutterBottom>{task.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleDelete} >
                    <HighlightOffIcon/>
                    <strike>Delete </strike>
                </Button>
                <Button size="small" color="primary" onClick={handleUpdate} >
                    <CheckCircleOutlineIcon/>
                    <strike>Done</strike>
                </Button>
            </CardActions>
        </Card>
    );
}


export default Task;