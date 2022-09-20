import React, {useEffect} from 'react';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteTask, updateTaskStatus } from '../../../actions/tasks.js';
import { useDispatch} from 'react-redux';

import useStyles from './styles';

const Task = ({task, currentId, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        // dispatch(deleteTask(taskData));
    }

    const handleUpdate = () => {
        // if(currentId)
            // dispatch(updateTaskStatus(currentId, task));
            console.dir(task);
            console.log(currentId)
    }

    return(
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6">{task.title}</Typography>
            </div>
            <div className={classes.details}>
                {/* <Typography variant="body2" color="textSecondary">{task.childIds?.map((childIds,index) => `${childIds} `) }</Typography> */}
            </div>
            <CardContent>
                <Typography className={classes.title} variant="body2" gutterBottom>{task.description}</Typography>
                <Typography variant="body2" color="textSecondary">childidssssss{task.childIds?.map((childIds,index) => `${childIds} `) }</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => setCurrentId(task._id)} >
                    <CheckCircleOutlineIcon/>
                    Done
                </Button>
                <Button size="small" color="primary" onClick={handleDelete} >
                    <HighlightOffIcon/>
                    <strike>Delete </strike>
                    {/* Delete   */}
                </Button>
            </CardActions>
        </Card>
    );
}


export default Task;