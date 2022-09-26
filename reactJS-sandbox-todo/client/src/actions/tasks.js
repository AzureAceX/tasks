import * as api from '../api';

//  Action Creators
export const getTask = () => async (dispatch) => {
    try{
        const { data } = await api.fetchTask();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(error) {
        console.log(error.message);
    }    
}

export const createTask = (tasks) => async (dispatch) => {
    try{
        const { data } = await api.createTask(tasks);
        dispatch({ type: 'CREATE', payload: data });
    }catch(error) {
        console.log(error.message);
    }    
}

export const updateTaskStatus = (id, task) => async (dispatch) => {
    try{
        const { data } = await api.updateTaskStatus(id, task);
        dispatch({ type: 'UPDATE', payload: data });
    }catch(error) {
        console.log(error.message);
        if(error.response)
            console.log(error.response.data);
    }    
    window.location.reload(); //testing refressssssssssssshhing 
}

export const deleteTask = (id) => async (dispatch) => {
    // try{
        // const { data } = await api.deleteTask(id);
    //     dispatch({ type: 'DELETE', payload: data });
    // }catch(error) {
    //     console.log(error.message);
    // }    
}