const getTodo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true;
            if(!error)
                resolve({ text : "done" })
            else 
                reject()
        }, 2000)
    })
}

async function fetchTodo () {
    //try {
        const todo = await getTodo()
        return todo
   // } catch {
     //   console.log("error")
    //}
   
}

fetchTodo()
    .then(todo => {
        console.log(toto.text)
    })
    .catch(error => {
        console.log("Error")
    })