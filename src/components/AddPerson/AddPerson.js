import React from 'react';

import './AddPerson.css';

class addPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
    };
    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleAge(event) {
    this.setState({
      age: event.target.value,
    });
  }
  render() {
    return (
      <div className="AddPerson">
        <input
          name="name"
          placeholder="Name"
          onChange={this.handleName}
        ></input>
        <input name="age" placeholder="Age" onChange={this.handleAge}></input>
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default addPerson;
