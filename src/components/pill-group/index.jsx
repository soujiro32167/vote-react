import React from 'react';
import categories from '../../data/categories';
import Pill from '../pill';


export default class PillGroup extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills nav-stacked">
        {categories.map( (category, index) => <Pill label={category.label} anchor={category.id} isActive={ index === 0 } key={ category.id }/> )}
      </ul>
    )
  }
}

//<li role="presentation" class="{% if include.isfirst %}active{% endif %}"><a href="#{{ include.anchor }}" data-toggle="pill">{{ include.label }}</a></li>
