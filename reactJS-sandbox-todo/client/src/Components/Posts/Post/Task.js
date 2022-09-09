import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import { deleteTask, updateTaskStatus } from '../../actions/tasks.js';

import useStyles from './styles';

const Task = ({task}) => {
    const classes = useStyles();
    console.log(task.title);

    const handleDelete = (e) => {
        // dispatch(deleteTask(taskData));
    }

    const handleUpdate = (e) => {
        // dispatch(updateTaskStatus(taskData));
    }

    return(
        <Card className={classes.card}>
            {/* <CardMedia className={classes.media} image={task.selectedFile} title={task.title} /> */}
            <div className={classes.overlay}>
                {/* <Typography variant="h6">{task.description}</Typography> */}
                <Typography variant="body2">{task.title}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{task.childIds?.map((childIds,index) => `#${childIds} `) }</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{task.description}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleDelete} >
                    <DeleteIcon fontSize="small"/> <strike>Delete </strike>
                </Button>
                <Button size="small" color="primary" onClick={handleUpdate} >
                    <ThumbUpAltIcon />
                    <strike>Done</strike>
                </Button>
            </CardActions>
        </Card>
    );
}


export default Task;