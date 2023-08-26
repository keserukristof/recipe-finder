import { FunctionComponent, useState, ReactNode } from "react";

import { NavigationContext } from "../contexts/navigation.context";
import { PathNames, Paths } from "../constants/navigation.constants";


interface NavigationContextProviderProps {
    children: ReactNode;
}

export const NavigationContextProvider: FunctionComponent<NavigationContextProviderProps> = ({ children }) => {
    const navItems = [
        { name: PathNames.HOME, path: Paths.HOME },
        { name: PathNames.RECIPES, path: Paths.RECIPES },
        { name: PathNames.ABOUT, path: Paths.ABOUT }
    ];
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