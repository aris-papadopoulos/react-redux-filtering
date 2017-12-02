import React, { Component } from 'react';


export default class DestinationsList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.destinations.map((el) =>
                        <li>{el.title}</li>
                    )
                }
            </ul>
        )
    }

}