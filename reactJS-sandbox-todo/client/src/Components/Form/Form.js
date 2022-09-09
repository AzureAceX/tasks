import React, { useState } from "react";
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createTask } from '../../actions/tasks.js';

import useStyles from './styles'

const Form = () => {
    const classes = useStyles(); 
    const dispatch = useDispatch();
    const [taskData, setTaskData ] = useState({taskId: '', parentId: '', title:'', description:'', childIds:'', status:'' });

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setTaskData({ ...taskData, status: "IN_PROGRESS"});
        setTaskData({ ...taskData, childIds: []});
        dispatch(createTask(taskData));
        console.log('Submitted: ' + taskData.status);
    }

    const clear = (e) => {
      e.preventDefault(); 
      setTaskData({parentId:'', title:'', description:'', childIds:'', status:''});
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Add A New Task
                </Typography>
                <TextField name="parentId" variant="outlined" label="Parent ID *optional*" fullWidth value={taskData.parentId} onChange={(e) => setTaskData({ ...taskData, parentId: e.target.value})} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value})} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value})} />
                {/* <TextField name="childIds" variant="outlined" label="Tag" fullWidth value={taskData.childIds} onChange={(e) => setTaskData({ ...taskData, childIds: e.target.value})} /> */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
}


export default Form;