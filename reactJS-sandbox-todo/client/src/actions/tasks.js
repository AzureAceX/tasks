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

export const updateTaskStatus = (tasks) => async (dispatch) => {
    try{
        const { data } = await api.updateTaskStatus(tasks);
        dispatch({ type: 'UPDATE', payload: data });
    }catch(error) {
        console.log(error.message);
    }    
}