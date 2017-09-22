import React from 'react';
import classNames from 'classnames';
import CheckboxColumn from '../checkbox-column';

const columnNumber = 2;
// Bootstrap divides the page into 12 columns
const columnClass = `col-sm-${12 / columnNumber}`;

export default class TabPanel extends React.Component {

  render(){
    const { isActive, id, checkboxes } = this.props;

    const columns = [];
    const checkboxesPerColumn = Math.ceil(checkboxes.length / columnNumber);

    for (let i = 0; i < columnNumber; i++){
      let offset = i * checkboxesPerColumn,
        limit = offset + checkboxesPerColumn;
      columns.push(<CheckboxColumn classes={ columnClass } checkboxes={checkboxes.slice(offset, limit)} key={i} />);
    }

    return (
      <div role="tabpanel" className={classNames('tab-pane', {active: isActive})} id={ id }>
        <div className="form-group row">
          {columns}
        </div>
      </div>
    );
  }
}



// <div role="tabpanel" class="tab-pane {% if include.isfirst %}active{% endif %}" id="{{ include.id }}">
//     <div class="form-group row">
//         <div class="col-sm-6">
//             {% assign checkboxes = site.data.checkboxes[include.id] %}
//             {% assign half_length = checkboxes | size | divided_by: 2.0 | ceil %}
//             {% for checkbox in checkboxes limit: half_length %}
//                 {% include checkbox.html name=checkbox.id value=true label=checkbox.label %}
//             {% endfor %}
//         </div>
//         <div class="col-sm-6">
//             {% for checkbox in checkboxes offset: half_length %}
//                 {% include checkbox.html name=checkbox.id value=true label=checkbox.label %}
//             {% endfor %}
//         </div>
//     </div>
// </div>
