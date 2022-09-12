import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch, useSelector} from 'react-redux';
import { createTask, getTask } from '../../actions/tasks.js';
import AutoComplete from '../Util/AutoComplete.js';

import useStyles from './styles'

const Form = () => {
    const classes = useStyles(); 
    const dispatch = useDispatch();

    // const taskList = useSelector((state) => state.tasks);

    const [taskData, setTaskData ] = useState({parentTask: '', title:'', description:'', status:'In Progress' , childTasks:'' });
    const [value, setValue] = useState([]);

    const parentTaskList = ['sdasd', 'asdasdasdadasd', 'aaaaaaaaaaaaa'];

    // !taskList.length ? taskList.map((task, index) => {
    //     parentTaskList.push(task.title);
    // }) : console.log("asdasdasdasdasd");

    // useEffect(() => {
    //     parentTaskList = dispatch(getTask());

    //     let cleanList = parentTaskList.map((task, index) => {
    //             parentTaskList.push(task.title);
    //         });

    //   }, );

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        // setTaskData({ ...taskData, status: "In Progress"});
        // setTaskData({ ...taskData, childTasks: [1,5]});
        // console.log('Submitted: ' + taskData.status);
        // console.log('Submitted: ' + taskData.childTasks);

        // dispatch(createTask(taskData));
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
                <AutoComplete setValue={setValue} options={parentTaskList} value={value} />
                <TextField name="parentId" variant="outlined" label="Parent ID *optional*" fullWidth value={taskData.parentId} onChange={(e) => setTaskData({ ...taskData, parentId: e.target.value})} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value})} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value})} />
                <TextField inputProps={{readOnly: true}} style={{color: "red"}} name="status" variant="outlined" label="Status" fullWidth value={taskData.status} onChange={(e) => setTaskData({ ...taskData, status: e.target.value})} />
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