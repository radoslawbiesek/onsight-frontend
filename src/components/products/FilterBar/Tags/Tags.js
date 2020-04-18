import React from 'react';
import './Tags.css';

const Tags = (props) => {
    return (
        <div className="tags">
            <h1 className="sidebar-section__title">{props.title}</h1>
            <p className="tags__content">{props.content}</p>
        </div>
    );
}

export default Tags;