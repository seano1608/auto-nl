import React, { useState } from 'react';
import useCars from './hooks/useCars';
import Cars from './components/Cars';
import FilterButton from './components/Filter';
import SortButton from './components/Sort';


const App = () => {
    const [ownerId] = useState('toyota');
    const { cars, setCarplayFilter, setSortOrder } = useCars(ownerId);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Available Cars</h1>
            <div className="flex space-x-4 mb-4">
                <FilterButton onClick={(filter) => setCarplayFilter(filter)} />
                <SortButton onClick={(order) => setSortOrder(order)} />
            </div>
            <Cars cars={cars} />
        </div>
    );
};

export default App;
