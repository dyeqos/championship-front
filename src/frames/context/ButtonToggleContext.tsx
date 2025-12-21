import { createContext, useState, type PropsWithChildren } from "react";
interface ButtonToggleContext {
  //desktop
  isOpenToggle: boolean;
  setOpenToggle: (isOpen: boolean) => void;
  //mobile
  isMobileOpenToggle: boolean;
  setMobileOpenToggle: (isOpen: boolean) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ButtonToggleContext = createContext({} as ButtonToggleContext);

export const ButtonToggleProvider = ({ children }: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const setOpenToggle = (isOpen: boolean) => setSidebarOpen(isOpen);
  const setMobileOpenToggle = (isOpen: boolean) => setMobileMenuOpen(isOpen);

  return (
    <ButtonToggleContext
      value={{
        isOpenToggle: sidebarOpen,
        setOpenToggle,
        isMobileOpenToggle: mobileMenuOpen,
        setMobileOpenToggle,
      }}
    >
      {children}
    </ButtonToggleContext>
  );
};
