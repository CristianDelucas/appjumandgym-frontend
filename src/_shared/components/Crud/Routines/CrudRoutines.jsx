import React, { useEffect, useState } from 'react'
import CrudFormRoutines from './CrudFormRoutines';
import CrudTable from './CrudTable';
import "../Crud.scss";
import { useForm } from 'react-hook-form';

 

  const initialDb = [
    {
    "idRutina":'0',
    "nombreRutina":'Rutina para hipertrofia',
    "diasRutina":[{
        "dia": [
            {
                "musculosEntrenados": "Biceps y Triceps",
                "ejercicios": [
                    
                        {
                            "nameExercise": "extension de pierna",
                            "series": "2",
                            "repeticiones": "2",
                            "descanso": "60"
                        }
                    ,
                        {
                            "nameExercise": "extension de biceps",
                            "series": "2",
                            "repeticiones": "3",
                            "descanso": "120"
                        }
                    
                ]
            }
        ]
    },
    {
        "dia": [
            {
                "musculosEntrenados": "Biceps y Triceps",
                "ejercicios": [
                    
                        {
                            "nameExercise": "extension de pierna",
                            "series": "2",
                            "repeticiones": "2",
                            "descanso": "60"
                        },
                        {
                            "nameExercise": "extension de biceps",
                            "series": "2",
                            "repeticiones": "2",
                            "descanso": "60"
                        }
                    ]
                
            }
        ]
    }]
  
  }];


const CrudRoutines = () => {

    
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState();

    //variable de estado para la rutina que se esta editando
    const [rutina, setRutina] = useState({});

    const addData = (data) => {
        data.idRutina = db.length + 1;
        setDb([...db, data]);

    }
    const updateData = (data) => {
        console.log(data);
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);


    }
    const deleteData = (idRutina) => {
        let isDelete = window.confirm(`¿Estás seguro de eliminar la rutina ´${idRutina}´`);
        if(isDelete){
            let newData = db.filter(el => el.idRutina !== idRutina);
            setDb(newData);
        }
        return;
        
        

    }


    const {register, handleSubmit, watch, reset,setValue, formState: {errors}} = useForm({
      
    });


    const [diasRutina, setDiasRutina] = useState([]);

    const [selectFields, setSelectFields] = useState([]);

    

    useEffect(() => {
      const diasRutina = watch('diasRutina');
      
      const aux = [];
      const auxSelect = [];
      const auxRutina = [];

      for(let i = 1; i <= diasRutina; i++){
        aux.push(i);
        auxSelect.push({nameObject:`dia${i}`});

      }
      setSelectFields(auxSelect);
      setDiasRutina(aux);
      
      
      
    }, [watch('diasRutina')]);

    const editValues = (el) => {
      
      
      //elemnto.forEach((el) =>  {
        
        setValue('diasRutina', el.diasRutina.length);
        setValue('nombreRutina', el.nombreRutina);
        el.diasRutina.forEach((el,index) => {
        
        const dia = index+1;
        
        console.log('Objeto '+ index)
        console.log(el)
        el.dia.forEach(day => {
          //console.log(day.musculosEntrenados)
          setValue(`dia${dia}`, day.ejercicios.length);
          console.log('numero de ejercicios -->'+day.ejercicios.length)
          day.ejercicios.forEach((el,index) => {
            //console.log(index)
            const nejercicio = index+1;

              setValue(`nameDia${dia}ejercicio${nejercicio}`, el.nameExercise);
              setValue(`seriesDia${dia}ejercicio${nejercicio}`, el.series);
              setValue(`repeticionesDia${dia}ejercicio${nejercicio}`, el.repeticiones);
              setValue(`descansoDia${dia}ejercicio${nejercicio}`, el.descanso);
            
            
          })
        })

        })
          
        //})
        console.log(watch());
        setRutina(initialDb[0]);
        console.log(initialDb)
      
    }
  
    const submit = (data) => {

      //console.log(errors);
      // for (const property in data) {

      //   console.log(`${property}: ${data[property]}`);

      //   if(property === 'diasRutina'){
      //     console.log('verdad y su valor es'+ data[property])

      //   }
      // }
      const rutina = {
        
        "nombreRutina":data.nombreRutina,
        "diasRutina":[]
      };
      for(let i = 1; i<=data.diasRutina;i++){
        rutina.diasRutina.push({[`dia`]:[]});
        console.log(i);
        rutina.diasRutina[i-1].dia.musculosEntrenados='Biceps';
        const nEjercicios= data['dia'+i];
        console.log(nEjercicios);
        //numero de ejercicios de ese mismo dia
        for(let n=1; n<=nEjercicios;n++){
          const nEjercicio = n;
          rutina.diasRutina[i-1].dia.push(
            {
              nameExercise:data[`nameDia${i}ejercicio${nEjercicio}`],
              series:data[`seriesDia${i}ejercicio${nEjercicio}`],
              repeticiones:data[`repeticionesDia${i}ejercicio${nEjercicio}`],
              descanso:data[`descansoDia${i}ejercicio${nEjercicio}`]
            });

        }
      }
      console.log(rutina);
      addData(rutina);
      
    }

    const reiniciar =() => {
      reset();
      setRutina(null);
    }
    

  return (
    <div >
    <form onSubmit={handleSubmit(submit)}>
      <div>
      <label>Dias de rutina</label>
      <select  {...register('diasRutina', {required:{value:true, message:"Días de rutina requerido"}})}>
                <option value="">--SESIONES A LA SEMANA--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
      {errors.diasRutina && <p className="error">{errors.diasRutina.message}</p>}
      </div>
      <div>
          <input className="input" type="text" name="nombreRutina" placeholder='Nombre de rutina' {...register('nombreRutina', {required:{value:true, message: 'Se requiere url miniatura'}})} />
          {errors.nombreRutina && <span>{errors.nombreRutina.message}</span>}
      </div>
      
      { diasRutina === null ? "":  diasRutina.map((el,index) => (
        
        <>
        
        <div className='card' key={index}>
            <div className='card--title'><h2>Dia {index+1} de entrenamiento</h2></div>
            
            <div className='card--content'>
            
            <CrudFormRoutines

            nrutina={index+1}

            selectFields={selectFields}
            setSelectFields={setSelectFields}
            setRutina={setRutina}
            rutina={rutina}

            register={register}
            errors={errors}
            watch={watch}

            addData={addData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            </div>
        </div>
        </>)) }

        <button className="buttonBlue" type="submit">Crear rutina</button>
            <button className="buttonBlue" onClick={()=>reiniciar()} >Limpiar</button>
            
        </form>


        <CrudTable 
        data={db} 
        deleteData={deleteData}
        editValues={editValues}
        />
    </div>
  )
}


export default CrudRoutines;