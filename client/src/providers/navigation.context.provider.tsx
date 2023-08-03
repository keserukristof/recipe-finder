import { FunctionComponent, useState, ReactNode } from "react";

import { NavigationContext } from "../contexts/navigation.context";


interface NavigationContextProviderProps {
    children: ReactNode;
}

export const NavigationContextProvider: FunctionComponent<NavigationContextProviderProps> = ({ children }) => {
    const navItems = [{ name: 'Home', path: "/" }, { name: 'About', path: "/about" }];
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <NavigationContext.Provider value={{ mobileOpen, handleDrawerToggle, navItems }}>
            {children}
        </NavigationContext.Provider>
    );
};