import React from 'react';

export const List = ({ list }) =>
    <div className="list">
        {list.map(item => <div className="list-row" key={item.objectID}>
            <a href={item.id}>{item.title}</a>
        </div>)}
    </div>


