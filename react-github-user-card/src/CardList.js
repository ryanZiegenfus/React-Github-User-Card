import React from 'react';
import CardMod from "./Card";
import './App.css';

function CardList(props){
    return (
        <div className="cardList">
            <CardMod 
                image={props.user.data.avatar_url}
                header={props.user.data.name}
                meta={`Followers: ${props.user.data.followers}`}
                description={`Location: ${props.user.data.location}`}
            />
            {props.followers.map((element, index) => 
                <CardMod 
                    image={element.avatar_url}
                    header={element.login}
                    description={`Follower ID: ${index}`}
                    key={element.id}
                />
            )}
        </div>
    ) 
}

export default CardList