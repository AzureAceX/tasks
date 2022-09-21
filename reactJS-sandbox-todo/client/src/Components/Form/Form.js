import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { Autocomplete, Stack } from "@mui/material";
import { useDispatch, useSelector} from 'react-redux';
import { createTask } from '../../actions/tasks.js';

import useStyles from './styles'

const Form = (currentId, setCurrentId) => {
    const classes = useStyles(); 
    const dispatch = useDispatch();

    const taskList = useSelector((state) => state.tasks.tasks);

    let parentTasksFiltered = [];
    const parentTaskList = taskList?.map((task, index) => {
        return [{"_id": task._id}, {"title": task.title}];
    });

    parentTaskList?.forEach((element) => {
        parentTasksFiltered.push(JSON.parse(JSON.stringify(element[1].title))); //looks ugly.....forgive me for this sin while i finish up
    });

    const [taskData, setTaskData ] = useState({parentTask: '', title:'', description:'', status:'In Progress' , childTasks:'' });
    
    // const [value, setValue] = useState([]);
    const [value, setValue] = parentTasksFiltered;
    const [inputValue, setInputValue] = parentTasksFiltered;

    // parentTaskList = taskList?.map((task, index) => {
    //     return task.title;
    // });

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // setTaskData({ ...taskData, status: 'In Progress'});
        // dispatch(createTask(taskData));
        console.log(taskData)
    }   

    const clear = (e) => {
      e.preventDefault(); 
      setTaskData({parentTask:'', title:'', description:'', status:'In Progress', childTasks:''});
    }

    const handleDropValChange = (event, newValue) => {
            setValue(newValue);
            console.log(newValue)
        }

    const handleDropInputValChange = (event, newInputValue) => {
        console.log(newInputValue)
        setValue(newInputValue);
    }

    const handleDropdownChange = (e, value) => 
    {
        // e.preventDefault=true;
        // e.defaultMuiPrevented = true;
        // console.log(value);
        // console.log(e.target);
        // console.log(e.target.value); 
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h5">
                    Add A New Task
                </Typography>
                {/* <Autocomplete                     
                    sx={{width: '100%'}}
                    style={{paddingRight: '15px'}}
                    options={ parentTasksFiltered ? parentTasksFiltered : [] } 
                    renderInput={(params) =>  <TextField {...params} name="parentTask" label='Parent Task *optional*' variant="outlined"
                    value={value}
                    onChange={handleDropValChange}
                    inputValue={handleDropInputValChange}
                    onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        console.log(inputValue);
                    }}
                    onChange={handleDropdownChange}
                    onInputChange={handleDropdownChange}
                    /> } /> */}
                <TextField name="parentTask" variant="outlined" label="Parent Task *optional*" fullWidth value={taskData.parentTask} onChange={(e) => setTaskData({ ...taskData, parentTask: e.target.value})} />
                <TextField name="title" required variant="outlined" label="Title" fullWidth value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value})} />
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