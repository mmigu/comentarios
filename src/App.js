import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import Header from "./Header";
import Footer from "./Footer";



function App() {

  const usersData = [
    { id: uuidv4(), name: 'Miguel',email:'mail@email.com' , website:'site.com',comments:'Loren Upsun Dolor' },
    { id: uuidv4(), name: 'Jairo',email:'mail@email.com' , website:'site.com',comments:'Loren Upsun Dolor' },
    { id: uuidv4(), name: 'Jimena', email:'mail@email.com' , website:'site.com' ,comments:'Loren Upsun Dolor'},
  ]

  const [users, setUsers] = useState(usersData)
  
  //Agregar Datos
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user 
    ])
  }

  //Eliminar Comentarios 
  const deleteUser = (id) =>{
    console.log(id)
    setUsers(users.filter(user => user.id !== id))

  }

  //Editar Comentarios
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '' ,
    email: '' ,
    website:  '',
    comments: '' ,
  });
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      email: user.email,
      website: user.website,
      comments: user.comments
    })
  }

  //Update Comentarios
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }


  return (
    <><><Header />

      <div className='container'>


        <div className="flex-row">
          <div className="flex-large">
            <h2 className="titles">Ver comentarios</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}

              editRow={editRow} />
          </div><hr></hr>

          {editing ? (
            <div className="flex-large">
              <h2 className="titles" id="title"> Edición de comentarios</h2>
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser} />
            </div>
          ) : (<div className="flex-large">
            <h2 id="title" className="titles"> Creación de comentarios</h2>
            <AddUserForm addUser={addUser} />
          </div>)}

        </div>


      </div></><Footer /></>
  );
}

export default App;
