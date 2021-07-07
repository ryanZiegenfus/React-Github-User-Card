import React from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function CardMod(props) {
    return (
        <Card
            image={props.image}
            header={props.header}
            meta={props.meta}
            description={props.description}
        />
    )
}

export default CardMod