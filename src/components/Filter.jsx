import React, { useState } from 'react';

const FilterButton = ({ onClick }) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
        onClick(!active);
    };

    return (
        <button
            onClick={handleClick}
            className={`py-2 px-4 rounded ${active ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}
        >
            {active ? 'Show All' : 'Filter CarPlay'}
        </button>
    );
};

export default FilterButton;
