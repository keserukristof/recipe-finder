import { createContext, useContext } from "react";

interface NavigationContextProps {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
    navItems: string[];
}

export const NavigationContext = createContext<NavigationContextProps>({
    mobileOpen: false,
    handleDrawerToggle: () => {},
    navItems: [],
});

export const useNavitionContext = () => useContext(NavigationContext);