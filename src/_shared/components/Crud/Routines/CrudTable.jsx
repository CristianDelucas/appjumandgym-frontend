import React, { useContext, useState } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table";
import { AdminContext } from "../../../../context/AdminContext";
import Paginacion from "../../Paginacion/Paginacion";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, editValues, deleteData }) => {
  const { routines } = useContext(AdminContext);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(5);
  const [filtro, setFiltro] = useState("");
  const maximo = Math.ceil(routines.length / porPagina);

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
            placeholder="Buscar por email"
            type={"text"}
            value={filtro}
            onChange={handleChangeFiltro}
          />
        </div>
      </div>
      <Table>
        <Thead>
          <Tr >
            <Th >Id rutina</Th>
            <Th >Nombre Rutina</Th>
            <Th >Días</Th>
            <Th >Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.length === 0 ? (
            <Tr>
              <Td colSpan={4}>Sin datos</Td>
            </Tr>
          ) : (
            routines
            .filter((el) => el.id_user.toLowerCase().includes(filtro.toLowerCase()))
              .slice(
                (pagina - 1) * porPagina,
                (pagina - 1) * porPagina + porPagina
              )
            .map((el) => (
              <CrudTableRow
                el={el}
                key={el.idRutina}
                editValues={editValues}
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
