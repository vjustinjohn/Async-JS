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

getTodo()
    .then(todo => {
        console.log(todo.text)
    })
    .catch(error => {
        console.log("Error")
    })