import React, { useState } from 'react';

const SortButton = ({ onClick }) => {
    const [order, setOrder] = useState('asc');

    const handleClick = () => {
        const newOrder = order === 'asc' ? 'desc' : 'asc';
        setOrder(newOrder);
        onClick(newOrder);
    };

    return (
        <button
            onClick={handleClick}
            className="py-2 px-4 rounded bg-white border border-blue-600 text-blue-600"
        >
            {order === 'asc' ? 'Sort by Price: High to Low' : 'Sort by Price: Low to High'}
        </button>
    );
};

export default SortButton;
