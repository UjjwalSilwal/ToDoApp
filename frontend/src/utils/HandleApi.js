import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data --->', data);
            setToDo(data)
    })
}

const addTodo = (text,setText,setToDo) => {
    
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("");
            getAllToDo(setToDo)
        
    })
    .catch((err)=>console.log(err))

}

const updateTodo = (toDoId,text,setToDo,setText,setIsUpdating) => {
    
    axios
        .post(`${baseUrl}/update`, {_id :toDoId, text })
        .then((data) => {
            setText("");
            setIsUpdating(false)
            getAllToDo(setToDo)  
    })
    .catch((err)=>console.log(err))
}

const deleteTodo = (_id,setToDo) => {
    
    axios
        .post(`${baseUrl}/delete`, {_id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)  
    })
    .catch((err)=>console.log(err))
}

export { getAllToDo ,addTodo,updateTodo,deleteTodo}
