import React, { useState } from 'react';

const SortButton = ({ onClick }) => {
    const [order, setOrder] = useState('asc');

    const handleSort = () => {
        const newOrder = order === 'asc' ? 'desc' : 'asc';
        setOrder(newOrder);
        onClick(newOrder);
    };

    return (
        <button
            onClick={handleSort}
            className="py-2 px-4 rounded bg-white border border-blue-600 text-blue-600"
        >
            Sort by Price: {order === 'asc' ? ' Low to High' : 'High to Low'}
        </button>
    );
};

export default SortButton;
