import React, { Component } from 'react';


export default class FilterList extends Component {


    render() {
        return (
            <form>
               
                    {
                        this.props.filters.map((el, index) =>
                        <fieldset>
                            <legend>{el.name}</legend>
                            <input type="checkbox" key={index} name="filter" id={el.name} value={el.name} />
                            <label>{el.name}</label>
                            <legend>{el.name}</legend>
                        </fieldset>
                        )
                    }
            </form>
        )
    }

}