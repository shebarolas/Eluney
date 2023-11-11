import React from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Yup({ onSubmit }) {
   
    const schema = yup.object().shape({
        nombre: yup.string().required("Este campo es obligatorio"),
        email: yup.string().email("Por favor, introduce un correo electrónico válido").required("Este campo es obligatorio"),
        edad: yup.number().min(18, "Debes ser mayor de edad").required("Este campo es obligatorio")
      });
      

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" {...register("nombre")} />
        {errors.nombre && <p>{errors.nombre.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="edad">Edad</label>
        <input id="edad" type="number" {...register("edad")} />
        {errors.edad && <p>{errors.edad.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

