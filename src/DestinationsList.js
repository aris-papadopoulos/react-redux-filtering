import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class DestinationsList extends Component {
    render() {
        return (
            <ul>
              {
                this.props.destinations.map((el, index) =>
                  <li key={index} data-category={el.category} className={el.cls}>{el.title}</li>
                )
              }
            </ul>
        )
    }

}

function getFilteredDestinations (destinations, filters) {
    return destinations.map(function (el) {
        let itemCategories = el.category.split(' ');
        let isActive = filters.every(function(filter)  {
            return itemCategories.includes(filter);
        });
        el.cls = isActive? 'active':'inactive';
        return el;
    })
}

function mapStatetoProps(state) {
    return {
        destinations: getFilteredDestinations(state.destinations, state.active_filters)
    };
}

export default connect(mapStatetoProps)(DestinationsList);
