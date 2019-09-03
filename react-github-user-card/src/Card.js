import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class CardMod extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }

    render() {
        return (
            <Card
                image={this.props.image}
                header={this.props.header}
                meta={this.props.meta}
                description={this.props.description}
            />
        )
    } 
}

export default CardMod