import React from 'react';
import classNames from 'classnames';

export default class Checkbox extends React.Component {
  render() {
    const { isActive, anchor, label } = this.props;
    return <li role="presentation" className={ classNames({'active': isActive}) }><a href={'#' + anchor } data-toggle="pill">{ label }</a></li>
  }
}

//<li role="presentation" class="{% if include.isfirst %}active{% endif %}"><a href="#{{ include.anchor }}" data-toggle="pill">{{ include.label }}</a></li>
