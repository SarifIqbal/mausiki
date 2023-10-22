"use client";

import { MyUderContextProvider } from "@/hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({
    children
}) => {
    return (
        <MyUderContextProvider>
            {children}
        </MyUderContextProvider>
    )
};

export default UserProvider;