import { Component } from "react";
import ManageEmpRow from "./ManageEmpRow";
import AddEmpForm from "./AddEmpForm";

class EmployeeManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empMasterList: [
        { id: 1, name: "Test", status: "Active" },
        { id: 2, name: "TestOne", status: "Active" },
        { id: 3, name: "TestTwo", status: "Active" },
      ],
    };
  }
  addNewEmployee = (emp) => {
    this.setState({ empMasterList: [...this.state.empMasterList, emp] });
  };
  delete = (id) => {
    this.setState({
      empMasterList: this.state.empMasterList.filter((emp) => emp.id !== id),
    });
  };

  render() {
    return (
      <section className="container-fluid p-4">
        <h3>Add Employee</h3>
        <AddEmpForm addEmp={this.addNewEmployee} />
        <h3> Employee List </h3>

        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>Emp#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empMasterList.map((emp) => (
              <ManageEmpRow edata={emp} remove={this.delete} />
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default EmployeeManager;
