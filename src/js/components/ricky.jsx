import React, { useEffect, useState } from "react";
import { Card } from "./card";


export const Ricky = () => {

    const [data, setData] = useState()

    //notacion JSON 
    const obj = { nombre: 'pepe' }
    console.log(obj)
    const stringifiedObj = JSON.stringify(obj) //---> asi se envia y se recibe en fetch 
    console.log('asi se envia y se recibe en fetch ', stringifiedObj)
    const parsedObj = JSON.parse(stringifiedObj) // pasando respuesta fetch a objeto JS
    console.log('pasando respuesta fetch a objeto JS', parsedObj)



    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character') ///GET
            .then(response => {
                console.log(response)
                if (!response.ok) throw new Error(`error code: ${response.status}`)
                return response.json()
            })
            .then(parsedJson => setData(parsedJson))
            .catch(err => console.log(err))
    }, [])

    console.log('---------------------', data)

    return (
        <div className="row">
            {data.results?.map(el => <Card key={el.id} image={el.image} name={el.name} />)}
        </div>
    )
}