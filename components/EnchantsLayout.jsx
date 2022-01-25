import React from "react";

export default function EnchantsLayout({ description, children }) {
    return (
        <>
            <p className="grid grid-cols-1 p-4 md:p-0 text-center mb-6">
                {description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 p-4 md:p-0 text-center ">
                {children}
            </div>
        </>
    );
}
