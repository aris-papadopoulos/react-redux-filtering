import React, { Component } from 'react';


export default class DestinationsList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.destinations.map((el, index) =>
                        <li key={index} data-category={el.category}>{el.title}</li>
                    )
                }
            </ul>
        )
    }

}