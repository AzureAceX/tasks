// import React, { useState } from "react";
// import { Grid, Typography, Paper, TextField, Button} from "@material-ui/core";
// import { useDispatch } from 'react-redux';
// import { createTask } from '../../actions/tasks';

// // import useStyles from './styles';
// import "./styles.css";

// const Todo = () => {
//     // const classes = useStyles(); 
//     const dispatch = useDispatch();
//     const [taskData, setTaskData ] = useState({parentId:'', title:'', description:'', childIds:'' });

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
//         dispatch(createTask(taskData));
//     }

//     const clear = (e) => {
//       e.preventDefault(); 
//       setTaskData({parentId:'', title:'', description:'', childIds:'' });
//     }

//     return (
//       <div className="todos-container">
//         <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
//         <div className="form-group">
//             <label htmlFor="parentId">Parent ID</label>
//             <TextField id="title" placeholder="Enter Parent Task ID *optional" name="title" required value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <TextField id="title" placeholder="Enter todo's title" name="title" required value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="description">Description</label>
//             {/* <textarea id="description" placeholder="Describe The Task" name="description" required /> */}
//             <TextField id="description" placeholder="Enter description" name="description" value={taskData.description} onChange={(e) => setTaskData({ ...taskData, description: e.target.value })} />
//           </div>
//           <div className="form-group">
//             <Button className="form-submit-btn" type="submit" variant="contained" fullWidth>
//               Submit
//             </Button>
//             <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>
//               Clear
//             </Button>
//           </div>
//         </form>
//       </div>
//     );
//   }

//   export default Todo;