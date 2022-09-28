import Task from "../models/task.js";

//run on update
export const verifyUpdate = async (targetTask) => {

    //If no childTasks then just markk as done
    if(!targetTask.childTasks)
        return true;
    else if(targetTask.childTasks.length > 0){
        //If the children tasks are ALL marked as DONE, then mark as complete
        //Requires searching for each child by ID -> 

            // await targetTask.childIds.forEach(element => {
            targetTask.childTasks.forEach(element => {
                // console.log(element);
                // childElement = Task.find(element._id)
                // if(childElement.status != "DONE")
                //     return Boolean.false;
            });
    }
};

//run on create
//link to Parent on task creation. Takes the new task id, and appends it to .childIds of the parent task 
export const verifyParent = async (req, res) => {
    const { id } =  req.params;


};

//run on delete
//same logic as verifyUpdate, make sure all of it are COMPLETE before delete
//additionally, remove it as a parent task and as a child task if all occurences
//proof that having an array of childIds might not be the best way
export const verifyDelete = async (req, res) => {
    const Task = new Task();
    let childElement = {};

    //If there are no children tasks, then mark as complete
    if(targetTask.childIds == 'undefined' || targetTask.childIds == '')
        return Boolean.true;

    //If the children tasks are ALL marked as DONE, then mark as complete
    //Requires searching for each child by ID -> 
    targetTask.childIds.forEach(element => {
        childElement = Task.find(element._id)
        if(childElement.status != "DONE")
            return Boolean.false;
    });

};