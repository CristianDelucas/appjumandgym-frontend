import React from 'react'
import CrudClients from '../../../_shared/components/Crud/Clients/CrudClients';

const initialDb = [
    {
        id:1,
        name:"Joaquin",
        rol:"user",
        active:true,
    },
    {
        id:2,
        name:"Aitor",
        rol:"admin",
        active:true,
    },
    {
        id:3,
        name:"Federico",
        rol:"user",
        active:false,
    },
];

const Clients = () => {
  return (
    <>
    <CrudClients />
    </>
  )
}

export default Clients