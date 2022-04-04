import React from "react";
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {
    console.log(props.currentUser)

    const {register, errors, handleSubmit , setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('email', props.currentUser.email);
    setValue('website', props.currentUser.website);
    setValue('comments', props.currentUser.comments);

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
      
        //Limpiar Datos
        e.target.reset();
    }


    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
           
            <label>Nombre</label>
            <input 
            {...register('name',{
                maxLength : {
                    value: 30,
                    message: 'El maximo numero de' // JS only: <p>error message</p> TS only support string
                  }
              })}
                
                type="text" name="name" 
            />
            <div>
                {errors?.name?.message}
            </div>
            
            
            <label>Email</label>
            <input type="text" name="email" {
                ...register('email',{
                    required: true, message:'Campo requerido'})
                }/>
             <div>
                {errors}
            </div>
            
            <label>Sitio Web</label>
            <input type="text" name="website"{
                ...register('website',{
                    required: true, message:'Campo requerido'})
                } />
             <div>
                {errors?.website?.message}
            </div>
            
            <label>Comentario</label>
            <input type="text" name="comments"{
                ...register('comments',{
                    required: true, message:'Campo requerido'})
                }/>
            <div>
                {errors?.comments?.message}
            </div>
            <button>Editar Comentario</button>
    </form>
     );
}
 
export default EditUserForm;