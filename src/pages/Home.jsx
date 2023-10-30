import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function Home() {
    const [data, setData] = useState({id:""})


    function handleChange(e) {
        const {name, value} = e.target
        setData((prevInput)=> ({
            ...prevInput,
            [name] : value
        }))
    }

    return (
        <div>
            <input 
                type="text"
                name="id"
                value={data.id}
                onChange={handleChange}
                placeholder='please enter your id'
                required
            />
            <button
                //onClick={handlePersonal}
            >
                Personal Details
            </button>
            <button
                //onClick={handleAdres}
            >
                Adress Informations
            </button>
        </div>
    )
}