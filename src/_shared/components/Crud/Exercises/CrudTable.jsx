import React, { useContext, useState } from "react";
import { AdminContext } from "../../../../context/AdminContext";
import CrudTableRow from "./CrudTableRow";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Paginacion from "../../Paginacion/Paginacion";

const CrudTable = ({ setDataToEdit, deleteData }) => {
  const { exercises } = useContext(AdminContext);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);
  const [filtro, setFiltro] = useState("");
  const maximo = Math.ceil(exercises.length / porPagina);

  const handleChangeFiltro = (e) => {
    setFiltro(e.target.value);
    setPagina(1);
  };

  return (
    <div>
      <div className="card">
        <div className="card--title">Buscador:</div>
        <div className="card--content">
          <input
            className="input-filter"
            placeholder="Buscar nombre ejercicio"
            type={"text"}
            value={filtro}
            onChange={handleChangeFiltro}
          />
        </div>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>Nombre ejercicio</Th>
            <Th>Músculo</Th>
            <Th>Indicaciones</Th>
            <Th>Imagen</Th>
            <Th>Video</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {exercises.length === 0 ? (
            <Th>
              <Td colSpan={6}>Sin datos</Td>
            </Th>
          ) : (
            exercises
            .filter((el) => el.nombre.toLowerCase().includes(filtro.toLowerCase()))
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
            .map((el) => (
              <CrudTableRow
                el={el}
                key={el._id}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </Tbody>
      </Table>
      <Paginacion
        pagina={pagina}
        setPagina={setPagina}
        maximo={maximo}
        filtro={filtro}
      />
    </div>
  );
};

export default CrudTable;
