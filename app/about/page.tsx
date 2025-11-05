"use client";
import { useState } from "react";
import axios from "axios";
export default function AboutPage(){
    const [status, setstatus] = useState({
        email:"",
        name:""

    });

    const handleSubmit = async (e: React. FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setstatus({...status,});
    
    try {
    const formData = new FormData(e.currentTarget);
    const data = {
        email: formData.get('email'),
        name:formData.get('name')
    };
    await axios.post("/api/send", data);
    }catch (error: any) {
        console.log('error en la ruta axios')
        }
    }


    return(
        <div className="container mx-auto p-8 ">
            <h1 className="text-3xl font-bold">Acerca de nosotros</h1>
            <p className="mt-4">Informacion de nuestra empresa</p>

    <form onSubmit={handleSubmit}>
        <div>
        <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name"></input>
        </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
        </div>
        <button type="submit">enviar</button>
    </form> 
        </div>

    )
}
