import React from 'react';
import { connect } from 'react-redux';
import * as actionType from '../reducer/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends React.Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddElement} />
        {this.props.finalResults.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeleteElement(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    finalResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddElement: (name, age) =>
      dispatch({
        type: actionType.CREATE_USER,
        personData: { name: name, age: age },
      }),
    onDeleteElement: (id) =>
      dispatch({ type: actionType.DELETE_USER, element_id: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
