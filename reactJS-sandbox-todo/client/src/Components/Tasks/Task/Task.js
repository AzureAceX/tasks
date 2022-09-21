import React, {useEffect} from 'react';
import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteTask, updateTaskStatus } from '../../../actions/tasks.js';
import { useDispatch, useSelector} from 'react-redux';

import useStyles from './styles';

const Task = ({task, currentId, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    // const updatedTask = useSelector((state) => currentId ? state.tasks.tasks.find((tsk) => currentId === tsk._id) : null);
    
    // useEffect(() => {
    // }, [updatedTask]);

    const handleDelete = (e) => {
        // dispatch(deleteTask(taskData));
    }

    // console.dir(task);
    // const test = () => {setCurrentId(2)};
    // test();
    // console.log(currentId)

    const handleUpdate = () => {
        // if(currentId)
            // dispatch(updateTaskStatus(currentId, task));
            console.dir(task);
            console.log(currentId)
    }
    console.log(currentId)

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
                <Typography variant="body2" color="textSecondary">childidssssss {task.childIds?.map((childIds, index) => `${childIds} `) }</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={(e) => setCurrentId(task._id)} >
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