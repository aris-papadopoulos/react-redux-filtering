import React, { Component } from 'react';


export default class FilterList extends Component {
    
    render() {
        return (
               <fieldset>
                    <legend>{this.props.name}</legend>
                    {
                        
                        this.props.filters.map((el, index) =>
                        <div>
                            <input type="checkbox" key={index} name="filter" id={el} value={el} />
                            <label>{el}</label>
                        </div>
                        )
                    }
                </fieldset>
        )
    }

}