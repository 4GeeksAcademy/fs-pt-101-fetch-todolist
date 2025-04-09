import React, { useEffect, useState } from "react";


export const TodoList = () => {

    const [task, setTask] = useState('')
    const [data, setData] = useState([])

    const createUser = () => {
        //POST
        fetch('https://playground.4geeks.com/todo/users/abrara', {
            method: "POST", //metodo que se va a utilizar, siempre en mayusculas
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => {
                if (!resp.ok) throw new Error(`error status code: ${resp.status}`)
                return resp.json()
            })
            .then(data => getUserTodos())
            .catch(err => console.log(err))
    }

    const getUserTodos = () => {
        fetch('https://playground.4geeks.com/todo/users/abrara') ///GET
            .then(response => {
                console.log(response)
                if (!response.ok) throw new Error(`error code: ${response.status}`)
                return response.json()
            })
            .then(parsedJson => setData(parsedJson))
            .catch(err => createUser())
    }

    const createTask = () => {
        //POST
        fetch('https://playground.4geeks.com/todo/todos/abrara', {
            method: "POST", //metodo que se va a utilizar, siempre en mayusculas
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ label: task, is_done: false })
        })
            .then(resp => {
                if (!resp.ok) throw new Error(`error status code: ${resp.status}`)
                return resp.json()
            })
            .then(data => getUserTodos())
            .catch(err => console.log(err))
    }

    const handleDelete = id => {
        //delete
        fetch('https://playground.4geeks.com/todo/todos/' + id, {
            method: "DELETE", //metodo que se va a utilizar, siempre en mayusculas
            })
            .then(resp => {
                getUserTodos()
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {

        getUserTodos()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        createTask()
        setTask('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                <input type="submit" hidden />
            </form>

            <div>
                <ul>

                    {data.todos?.map((el, i) => <li key={i}>{el.label} <span className="btn btn-danger" onClick={()=>handleDelete(el.id)}>X</span> </li>)}
                </ul>
            </div>
        </div>
    )
}