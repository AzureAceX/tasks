import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper} from '@material-ui/core';

import { Autocomplete, Stack } from "@mui/material";
import Select from 'react-select';

import { useDispatch, useSelector} from 'react-redux';
import { createTask } from '../../actions/tasks.js';

import useStyles from './styles'

const Form = (currentId, setCurrentId) => {
    const classes = useStyles(); 
    const dispatch = useDispatch();

    const taskList = useSelector((state) => state?.tasks?.tasks);
    
    let parentTaskList = [];

    if(taskList){
        parentTaskList = taskList?.map((task, index) => {
            // return [{"_id": task._id}, {"title": task.title}];
            return {"label": task.title, "value": task._id};
        });
    }

    // parentTaskList?.forEach((element) => {
    //     parentTasksFiltered.push(JSON.parse(JSON.stringify(element[1].title))); //looks ugly.....forgive me for this sin while i finish up
    // });

    const [taskData, setTaskData ] = useState({parentTask: '', title:'', description:'', status:'In Progress' , childTasks:'' });
    const [selectValue, setSelectValue] = useState([]);

    // parentTaskList = taskList?.map((task, index) => {
    //     return task.title;
    // });

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(createTask(taskData));
        // console.log(taskData)
    }   

    const clear = (e) => {
      e.preventDefault(); 
      setSelectValue({...selectValue, values: []});
      setTaskData({parentTask:'', title:'', description:'', status:'In Progress', childTasks:''});
    }

    const handleSelectChange = (e) => {
        let values = Array.from(e, option => option.value)
        setSelectValue(values);
        setTaskData({ ...taskData, childTasks: values, status: 'In Progress'});
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h5">
                    Add A New Task
                </Typography>
                {/* <TextField name="parentTask" variant="outlined" label="Parent Task *optional*" fullWidth value={taskData.parentTask} onChange={(e) => setTaskData({ ...taskData, parentTask: e.target.value})} /> */}
                <TextField name="title" required variant="outlined" label="Name" fullWidth value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value})} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value})} />
                <TextField inputProps={{readOnly: true}} name="status" variant="outlined" label="Status" fullWidth value={taskData.status} onChange={(e) => setTaskData({ ...taskData, status: e.target.value})} />
                <div style={{width: '100%', padding: '5px', paddingBottom: '10px'}}>
                <Select 
                    // value={value}
                    // style={{width: '100%', paddingLeft: '10px', paddingRight:'10px'}}
                    isMulti
                    name="Child Tasks"
                    options = {parentTaskList}
                    onChange={handleSelectChange}
                    />
                </div>
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