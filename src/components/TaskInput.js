import React ,{useState} from "react";

const TaskInput = ({addTask}) => {

    const [task,setTask] = useState("")
    const handleAdd =()=>{
        if(task.trim()==="")return;
        addTask(task)
        setTask("")
    }
  return (
    <div>
        <input type="text" placeholder="Add a task" value={task} onChange={(e)=> setTask(e.target.value)}/>
        <button onClick={handleAdd}>Submit</button>
    </div>
  )
}

export default TaskInput