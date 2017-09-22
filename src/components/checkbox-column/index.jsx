import React from 'react';
import Checkbox from '../checkbox';

export default class CheckboxColumn extends React.Component {

  render(){
    const { classes, checkboxes } = this.props;
    return (
      <div className={ classes }>
        {checkboxes.map(checkbox => <Checkbox {...checkbox} value="true" key={ checkbox.name }/>)}
      </div>
    );
  }
}
