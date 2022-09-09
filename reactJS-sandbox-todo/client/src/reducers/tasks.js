export const defReducer = (tasks = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return action.payload;
        case 'FETCH_ALL':
            return [...tasks, action.payload];
        case 'UPDATE':
            return action.payload;
        default :
            return tasks;
    } 
}

