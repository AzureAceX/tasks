import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { Autocomplete, Stack } from "@mui/material";
import { useDispatch, useSelector} from 'react-redux';
import { createTask, getTask } from '../../actions/tasks.js';

import useStyles from './styles'

const Form = () => {
    const classes = useStyles(); 
    const dispatch = useDispatch();

    const taskList = useSelector((state) => state.tasks);

    // let taskList;
    // useEffect(() => {
    //     const taskList = dispatch(getTask());
    //     const parentTaskList = taskList.map((task, index)  => {
    //         return task.title;
    //     });
    // }, );


    // let parentTaskList = [];

        const parentTaskList = taskList[0].map((task) => {
            return task.title;
        });

    console.log(taskList);
    // console.log(parentTaskList);

    const [taskData, setTaskData ] = useState({parentTask: '', title:'', description:'', status:'In Progress' , childTasks:'' });
    const [value, setValue] = useState([]);

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

        // dispatch(createTask(taskData));
        console.log(taskData)

    }   

    const clear = (e) => {
      e.preventDefault(); 
      setTaskData({parentTask:'', title:'', description:'', childTasks:'', status:'In Progress'});
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h5">
                    Add A New Task
                </Typography>
                <Stack spacing={0} width="97%">
                <Autocomplete 
                    options={parentTaskList} 
                    renderInput={(params) =>  <TextField {...params} name="parentTask" label='Parent Task *optional*' variant="outlined"
                    value = {value}
                    // onChange={setValue} 
                    onChange={(e) => setTaskData({ ...taskData, parentTask: e.target.value})}
                    /> } />
                </Stack>
                {/* <TextField name="parentTask" variant="outlined" label="Parent Task *optional*" fullWidth value={taskData.parentTask} onChange={(e) => setTaskData({ ...taskData, parentTask: e.target.value})} /> */}
                <TextField name="title" variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value})} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value})} />
                <TextField inputProps={{readOnly: true}} name="status" variant="outlined" label="Status" fullWidth value={taskData.status} onChange={(e) => setTaskData({ ...taskData, status: e.target.value})} />
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