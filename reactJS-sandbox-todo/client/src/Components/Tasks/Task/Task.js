import React, {useEffect} from 'react';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteTask, updateTaskStatus } from '../../../actions/tasks.js';
import { useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';

const Task = ({task, CurrentId, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // const updatedTask = useSelector((state) => currentId ? state.tasks.tasks.find((tsk) => currentId === tsk._id) : null);
    
    // useEffect(() => {
    // }, [updatedTask]);

    const handleDelete = (e) => {
        // dispatch(deleteTask(taskData));
    }

    const handleUpdate = () => {
        console.dir("task id: " + task._id);
        if(task._id)
            dispatch(updateTaskStatus(task._id, task));
    }
    // console.log(CurrentId)

    return(
        <Card className={classes.card}>
            <div className={classes.overlay}>
                <Typography variant="h6">{task.title}</Typography>
            </div>
            <div className={classes.details}>
                {/* <Typography variant="body2" color="textSecondary">{task.childIds?.map((childIds,index) => `${childIds} `) }</Typography> */}
                <Typography style={{color: "red"}} className={classes.title} variant="body2" gutterBottom>{task.status}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="body2" gutterBottom>{task.description}</Typography>
                <Typography variant="body2" color="textSecondary">{task.childTasks?.map((childIds, index) => `${childIds} `) }</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleUpdate} >
                {/* <Button size="small" color="primary" onClick={(e) => setCurrentId(task._id)} > */}
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