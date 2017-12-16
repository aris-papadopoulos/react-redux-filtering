import React, { Component } from 'react';
import {filterChange} from './actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class FilterList extends Component {
    
    createFilters(){

        return this.props.filters.map((el, index) =>
            <div key={index}>
                <input
                    type="checkbox"
                    key={index}
                    onChange={(e) => this.props.filterChange(el, e)}
                    name="filter"
                    id={el}
                    value={el} />
                <label>{el}</label>
            </div>
        )

    }
    

    render() {
        return (
               <fieldset>
                    <legend>{this.props.name}</legend>
                    {   
                        this.createFilters()
                    }
                </fieldset>
        )
    }


}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({filterChange: filterChange}, dispatch)
}

export default connect(null, matchDispatchToProps)(FilterList);