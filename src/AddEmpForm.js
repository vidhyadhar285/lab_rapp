import { Component } from "react";
class AddEmpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: { id: "", name: "", status: "" },
    };
  }

  formSubmitted = (event) => {
    event.preventDefault();
    this.props.addEmp({ ...this.state.emp });
  };

  render() {
    let emp = this.state.emp;
    return (
      <form onSubmit={this.formSubmitted}>
        <table>
          <tbody>
            <tr>
              <td>
                <label className="form-control-label">Emp Id</label>
                <input
                  type="number"
                  value={emp.id}
                  className="form-control mr-1"
                  onChange={(event) =>
                    this.setState({
                      emp: { ...emp, id: parseInt(event.target.value) },
                    })
                  }
                />
              </td>
              <td>
                <label className="form-control-label">Emp Name</label>
                <input
                  type="text"
                  value={emp.name}
                  className="form-control mr-1"
                  onChange={(event) =>
                    this.setState({ emp: { ...emp, name: event.target.value } })
                  }
                />
              </td>
              <td>
                <label className="form-control-label">Status</label>
                <select
                  className="form-control mr-1"
                  value={emp.status}
                  onChange={(event) =>
                    this.setState({
                      emp: { ...emp, status: event.target.value },
                    })
                  }
                >
                  <option value="">--SELECT----</option>
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </select>
              </td>
              <td>
                <button className="btn btn-primary">Add Employee</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default AddEmpForm;
