import { createContext, useState } from "react";

export const UIContext = createContext({
  isModalOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
  toggleMenu: () => {},
  toggle: false,
});

const UIContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const toggleMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const value = {
    handleOpen,
    handleClose,
    isModalOpen: open,
    toggle: isMobileMenuActive,
    toggleMenu,
  };
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
export default UIContextProvider;
