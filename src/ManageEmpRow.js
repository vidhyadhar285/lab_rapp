const ManageEmpRow = (props) => (
  <tr>
    <td>{props.edata.id}</td>
    <td>{props.edata.name}</td>
    <td>{props.edata.status}</td>
    <td>
            <button className="btn btn-sm btn-danger mr-1" 
                onClick={event => props.remove(props.edata.id)}>
                DELETE
            </button>
        </td>
  </tr>
);
export default ManageEmpRow;
