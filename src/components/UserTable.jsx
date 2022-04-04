import React from "react";

const UserTable = (props) => {
    console.log(props.users)
    return (
<table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Sitio Web</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length > 0 ? (
            props.users.map(user =>(
              <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
             
              <td>
                <button 
                    className="button muted-button"
                    onClick={() => {props.editRow(user)}}
                >Editar</button>
                <button 
                    className="button muted-button"
                    onClick={() => {props.deleteUser(user.id)}}
                    >Borrar</button>
              </td>
            </tr>
        ))
        ) : (
            <tr>
            <td colSpan={4}>No existen comentarios</td>
          </tr>
        )
    }

    
    </tbody>
  </table>

      );
}
 
export default UserTable;