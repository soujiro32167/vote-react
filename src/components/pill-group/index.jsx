import React from 'react';
import Pill from '../pill';


export default class PillGroup extends React.Component {
  render() {
    const context = this.props.context;
    return (
      <ul className="nav nav-pills nav-stacked">
        {context.map( ({label, id}, index) => <Pill label={label} anchor={id} isActive={ index === 0 } key={ id }/> )}
      </ul>
    )
  }
}

//<li role="presentation" class="{% if include.isfirst %}active{% endif %}"><a href="#{{ include.anchor }}" data-toggle="pill">{{ include.label }}</a></li>
