import React, { useContext, useEffect, useState } from "react";
import CrudFormRoutines from "./CrudFormRoutines";
import CrudTable from "./CrudTable";
import "../Crud.scss";
import { useForm, Controller } from "react-hook-form";
import { AdminContext } from "../../../../context/AdminContext";
import { AiOutlineUser } from "react-icons/ai";
import Select from "react-select";
import { createRoutine } from "../../../Api/Routine/ApiRoutine";
const initialDb = [
  {
    idRutina: "1",
    id_user: "62e29735ee75a0b1f0504794",
    nombreRutina: "Rutina para hipertrofia",
    nDias: "1",
    dias: [
      {
        musculos: ["BICEPS","TRICEPS"],
        ejercicios: [
          {
            nameExercise: ["Curl de biceps"],
            series: "2",
            repeticiones: ["10"],
            descanso: "60",
            rir:"2"
          }
        ],
      }
    ],
  },
];

const CrudRoutines = () => {
  const { users,exercises } = useContext(AdminContext);
  const USERSOPTIONS = users.map((user) => {
    return { value: user._id, label: user.nombre + " " + user.apellidos };
  });
  const OPTIONSEXERCISES = exercises.map((exercise) => {
    return { value: exercise._id, label: exercise.nombre};
  });
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState();

  //variable de estado para la rutina que se esta editando
  const [rutina, setRutina] = useState({});

  const addData = async(data) => {
    //data.idRutina = db.length + 1;
    const createRoutineUser = await createRoutine(data);
    console.log(createRoutineUser)
    setDb(db=>[...db, data]);
  };
  const updateData = (data) => {
    console.log(data);
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (idRutina) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar la rutina ´${idRutina}´`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.idRutina !== idRutina);
      setDb(newData);
    }
    return;
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm({});

  const [diasRutina, setDiasRutina] = useState([]);

  const [selectFields, setSelectFields] = useState([]);

  useEffect(() => {
    const diasRutina = watch("diasRutina");

    const aux = [];
    const auxSelect = [];
    const auxRutina = [];

    for (let i = 1; i <= diasRutina; i++) {
      aux.push(i);
      auxSelect.push({ nameObject: `dia${i}` });
    }
    setSelectFields(auxSelect);
    setDiasRutina(aux);
  }, [watch("diasRutina")]);

  const editValues = (el) => {
    reset();
    console.log(el)
    console.log("rutina a editar");
    setValue("nombreRutina", el.nombreRutina);
    setValue("diasRutina", el.dias.length);
    setValue("id_user", USERSOPTIONS.find(user => user.value===el.idCliente));
    
    el.dias.forEach((day, index) => {
      const dia = index + 1;

      console.log("Objeto " + index);
      setValue(`dia${dia}`, day.ejercicios.length);
      //seguir con los musculo
      
      setValue(`dia${dia}_musculos`, day.musculos.map(musculo => ({value:musculo,label:musculo})));
      
      day.ejercicios.forEach((el, index) => {
        //console.log(index)
        const nejercicio = index + 1;
        console.log(el.repeticiones)
        setValue(`nameDia${dia}ejercicio${nejercicio}`, el.nameExercise.map(element => OPTIONSEXERCISES.find(exercise => exercise.value===element )));
        setValue(`seriesDia${dia}ejercicio${nejercicio}`, el.series);
        setValue(
          `repeticionesDia${dia}ejercicio${nejercicio}`,
          el.repeticiones.map(repes => ({value:repes,label:repes})));
        setValue(`descansoDia${dia}ejercicio${nejercicio}`, el.descanso);
      });
    });

    console.log(watch());
    setRutina(initialDb[0]);
  };

  const submit = (data,e) => {
    //inicializamos la variable de la rutina con parametros predeterminados
    console.log(data)
    e.preventDefault();
    const rutina = {
      nombre_rutina: data.nombreRutina,
      id_user: data.id_user.value,
      numero_dias: data.diasRutina,
      nivel: "Principiante",
      dias: [],
    };
    //realizamos una lectura sobre los datos que tenemos en el formulario
    //dinamico y construimos el objeto para completar la rutina
    for (let i = 1; i <= data.diasRutina; i++) {
      rutina.dias.push({});
      console.log(i);
      console.log(data["dia" + i+"_musculos"])
      rutina.dias[i - 1].musculos = data["dia" + i+"_musculos"].map(elemento => elemento.value)
      const nEjercicios = data["dia" + i];
      console.log(nEjercicios);
      //numero de ejercicios de ese mismo dia
      rutina.dias[i - 1].ejercicios = [];
      for (let n = 1; n <= nEjercicios; n++) {
        const nEjercicio = n;
        
        
        rutina.dias[i - 1].ejercicios.push({
          id_exercise: data[`nameDia${i}ejercicio${nEjercicio}`].map(elemento => elemento.value),
          series: data[`seriesDia${i}ejercicio${nEjercicio}`],
          repeticiones: data[`repeticionesDia${i}ejercicio${nEjercicio}`].map(elemento => elemento.value),
          descanso: data[`descansoDia${i}ejercicio${nEjercicio}`],
          rir: data[`rirDia${i}ejercicio${nEjercicio}`],
          comentario_usuario: "",
          registro_peso_usuario: "",
        });
        console.log(rutina.dias[i - 1].ejercicios)
      }
    }
    console.log(rutina);
    //añadimos la rutina a nuestra base de datos
    addData(rutina);
  };

  const reiniciar = () => {
    reset();

    setRutina(rutina => {});
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit(submit)}>
        <div className="row input-boxes ">
          

          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <i>
              <AiOutlineUser />
            </i>
            <span className="input-box__title">Nombre de rutina</span>
            <input
              className="input"
              type="text"
              name="nombreRutina"
              placeholder="Nombre de rutina"
              {...register("nombreRutina", {
                required: { value: true, message: "Nombre de rutina" },
              })}
            />
            {errors.nombreRutina && (
              <span className="error-message">
                {errors.nombreRutina.message}
              </span>
            )}
          </div>
          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <i>
              <AiOutlineUser />
            </i>
            <span className="input-box__title">Número de sesiones</span>
            <select
              {...register("diasRutina", {
                required: {
                  value: true,
                  message: "Número de sesiones requerido",
                },
              })}
            >
              <option value="">--SESIONES A LA SEMANA--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
            {errors.diasRutina && (
              <span className="error-message">{errors.diasRutina.message}</span>
            )}
          </div>
          <div className="col-12 col-lg-4 col-xl-3  input-box">
            <span className="input-box__title">Cliente</span>
            <Controller
              name="id_user"
              control={control}
              placeholder="Nombre"
              defaultValue={{ value: '', label: "Nombre de cliente" }}
              {...register("id_user", {
                required: { value: true, message: "Nombre de cliente" },
              })}
              render={({ field }) => (
                <Select
                  {...field}
                  ref={this}
                  options={USERSOPTIONS}
                  
                />
              )}
            />
            {errors.id_user && (
              <span className="error-message">{errors.id_user.message}</span>
            )}
          </div>
        </div>

        {diasRutina === null
          ? ""
          : diasRutina.map((el, index) => (
              <>
                <div className="card" key={index}>
                  <div className="card--title">
                    <h2>Día {index + 1} de entrenamiento</h2>
                  </div>

                  <div className="card--content">
                    <CrudFormRoutines
                      setValue={setValue}
                      nrutina={index + 1}
                      selectFields={selectFields}
                      setSelectFields={setSelectFields}
                      setRutina={setRutina}
                      rutina={rutina}
                      register={register}
                      errors={errors}
                      watch={watch}
                      addData={addData}
                      control={control}
                      updateData={updateData}
                      dataToEdit={dataToEdit}
                      setDataToEdit={setDataToEdit}
                    />
                  </div>
                </div>
              </>
            ))}
        <div className="input-buttons">
          <button className="col-6" type="submit">
            Crear rutina
          </button>
          <button className="col-6" onClick={() => reiniciar()}>
            Limpiar
          </button>
        </div>
      </form>

      <CrudTable data={db} deleteData={deleteData} editValues={editValues} />
    </div>
  );
};

export default CrudRoutines;
