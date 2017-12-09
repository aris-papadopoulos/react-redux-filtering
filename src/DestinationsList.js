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

function mapStatetoProps(state) {
    return {
        destinations: state.destinations
    };
}

export default connect(mapStatetoProps)(DestinationsList);