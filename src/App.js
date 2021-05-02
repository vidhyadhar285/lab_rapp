import { Component, Fragment } from "react";

import Header from './Header';
import EmployeeManager from './EmployeeManager';
class App extends Component{
  constructor(props){
    super(props);

    this.state={
      title:"Employee management Portal",
      brand:"Open"
    }
  }

  render(){
    return (
      <Fragment>
        <Header title={this.state.title} brand={this.state.brand} />
        <EmployeeManager/>
      </Fragment>
    );
  }
}
export default App;
