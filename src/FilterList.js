import React, { Component } from 'react';


export default class FilterList extends Component {
    
    createFilters(){

        return this.props.filters.map((el, index) =>
            <div key={index}>
                <input type="checkbox" key={index} name="filter" id={el} value={el} />
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