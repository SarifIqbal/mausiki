"use client";

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
    return (
        <Toaster
            toastOptions={{
                style: {
                    background: '#004B55',
                    color: '#FFF',
                }
            }}
        />
    );
};

export default ToasterProvider;