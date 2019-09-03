import React from 'react';
import CardMod from "./Card"

export default function CardList(props){
            return (
            <div>
                {console.log(props)}
                <CardMod 
                    image={props.user.avatar_url}
                    header={props.user.name}
                    meta={`Followers: ${props.user.followers}`}
                    description={`Location: ${props.user.location}`}
                />
            </div>
        )
}