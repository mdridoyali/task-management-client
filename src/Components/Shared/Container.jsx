import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1300px]  '>
            {children}
        </div>
    );
};

export default Container;