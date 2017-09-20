import React from 'react';

export default class Chckbox extends React.Component {

  render(){
    const { name, value, label, votes } = this.props;
    return (
      <div className="checkbox">
          <label><input type="checkbox" name="{ name }" value="{ value }"/>{ label }</label>
          <span className="badge badge-pill badge-info">{ votes } votes</span>
      </div>
    );
  }
}
