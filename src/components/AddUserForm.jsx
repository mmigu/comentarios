import React from "react";
import { useForm } from 'react-hook-form';




const AddUserForm = (props) => {

    const {register, handleSubmit, formState: { errors }} = useForm();
    //const error = errors?.name?.message;

    const onSubmit = (data, e) => {
        console.log(data)
        
        props.addUser(data)
        //Limpiar Datos
        e.target.reset();
        
    }


    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
           
            <label>Nombre</label>
            <input type="text" name="name" placeholder="Ingrese su Nombre"
            {...register('name',{
                    required: 'Este espacio es requerido.',
                    maxLength: { value: 20, message: 'Maximo 20 caracteres'} ,
                    pattern: /^[A-Za-z ]+$/i})
                }
            />
             <div>
             {errors?.name?.type === "required" && <p>El campo es requerido</p>}
             {errors?.name?.type === "pattern" && <p>El campo no acepta caracteres especiales</p>}
             {errors?.name?.type === "maxLength" && (
                 <p>Los caracteres maximos son de 35</p>
      )}
            </div>
            
            <label>Email</label>
            <input type="text" name="email" placeholder="Ingrese su Email"
             {...register('email',{
                required: 'Este espacio es requerido.',
                pattern: /^\S+@\S+$/i})
            } />
             <div>
             {errors?.email?.type === "required" && <p>El campo es requerido</p>}
             {errors?.email?.type === "pattern" && <p>Ingrese un correo valido</p>}
            </div>
            
            <label>Sitio Web</label>
            <input type="text" name="website" placeholder="Ingrese su Sitio Web"
            {...register('website',{
                pattern: /^\S+$/i})
            }/>
             <div>
             {errors?.website?.type === "pattern" && <p>Ingrese un Sitio web valido</p>}
            </div>
            
            <label>Comentario</label>
            <input type="text" name="comments" placeholder="Ingrese su Comentario"
            {...register('comments',{
                    required: 'Este espacio es requerido.',
                    maxLength: { value: 100, message: 'Maximo 100 caracteres'} ,
                    pattern: /^[A-Za-z ]+$/i})
                }/>
            <div>
            {errors?.comments?.type === "required" && <p>El campo es requerido</p>}
             {errors?.comments?.type === "pattern" && <p>El campo no acepta caracteres especiales. Solo letras</p>}
             {errors?.comments?.type === "maxLength" && (
                 <p>Los caracteres maximos son de 100</p>
      )}
            </div>
            <button>Agregar nuevo Comentario</button>
    </form>
     );
}
 
export default AddUserForm;
