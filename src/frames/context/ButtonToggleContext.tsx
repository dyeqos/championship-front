import { createContext, useState, type PropsWithChildren } from "react";
interface ButtonToggleContext {
  isOpenToggle: boolean;
  setOpenToggle: (isOpen: boolean) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ButtonToggleContext = createContext({} as ButtonToggleContext);

export const ButtonToggleProvider = ({ children }: PropsWithChildren) => {
  const [toggleButton, setToggleButton] = useState(true);

  const setOpenToggle = (isOpen: boolean) => setToggleButton(isOpen);

  return (
    <ButtonToggleContext value={{ isOpenToggle: toggleButton, setOpenToggle }}>
      {children}
    </ButtonToggleContext>
  );
};
