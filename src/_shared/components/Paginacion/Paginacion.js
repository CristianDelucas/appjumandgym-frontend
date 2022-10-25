import React, { useEffect, useState } from 'react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

const Paginacion = ({pagina,setPagina,maximo,filtro}) => {

    const [input,setInput] = useState(1);

    const nextPage = () => {
        setInput(input+1);
        setPagina(pagina+1);
    }

    const previousPage = () => {
        setInput(parseInt(input)-1);
        setPagina(parseInt(pagina)-1);
    }

    const onKeyDown = (e)=>{
        if(e.keyCode === 13){
            setPagina(parseInt(e.target.value));
        }
        if(
        parseInt(e.target.value < 1) || 
        parseInt(e.target.value)> Math.ceil(maximo) || 
        isNaN(parseInt(e.target.value))
            ){
                setPagina(1);
                setInput(1);
                
        }else{
            setPagina(parseInt(e.target.value));
        }
    }

    const onChange = (e)=>{
        setInput(e.target.value);
    }

    useEffect(()=>{
        setPagina(1);
        setInput(1);
    },[filtro,setPagina])

  return (
    <div className='c-paginacion'>
        <button disabled={pagina===1 || pagina <1} onClick={previousPage}><BsFillArrowLeftSquareFill/></button>
        <input 
        onChange={e => onChange(e)}
        onKeyDown={e => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input} />
        <p>de {maximo}</p>
        <button disabled={pagina===Math.ceil(maximo) || pagina > Math.ceil(maximo)} onClick={nextPage}><BsFillArrowRightSquareFill/></button>
    </div>
  )
}

export default Paginacion