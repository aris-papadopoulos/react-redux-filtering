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
    var filter_set = new Set(filters);
    return destinations.map(function (el) {
        let category_set = new Set(el.category.split(' '));
        let intersection = new Set([...filter_set].filter(x => category_set.has(x)));
        if ([...intersection].length > 0)  {
            el.cls = 'active'
        } else {
            el.cls = 'inactive';
        }
        return el
    })
}

function mapStatetoProps(state) {
    return {
        destinations: getFilteredDestinations(state.destinations, state.active_filters)
    };
}

export default connect(mapStatetoProps)(DestinationsList);
