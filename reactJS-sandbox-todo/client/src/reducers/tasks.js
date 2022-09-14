// export const defReducer = (tasks = [], action) => {
//     switch (action.type) {
//         case 'CREATE':
//             return action.payload;
//         case 'FETCH_ALL':
//             return [...tasks, action.payload];
//         case 'UPDATE':
//             return action.payload;
//         default :
//             return tasks;
//     } 
// }

export const defReducerAlt = (state = { tasks: [] }, action) => {
    switch(action.type){
        case "FETCH_ALL":
           return {...state, tasks: action.payload}; // assuming action.payload = DB result[0]
        case 'CREATE':
            return {...state, tasks: action.payload};
        case 'UPDATE':
            return {...state, tasks: action.payload};
        default :
            return {tasks: action.payload};
     }
}


