import React from 'react';

const Playground = ({...props}) => {
    return (
        <div className="flex justify-center items-center py-8 bg-neutral-1 rounded-sm border">
            <div className="">
                {props.children}
            </div>
        </div>
    );
};

export default Playground;