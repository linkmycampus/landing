import { createContext, useContext, useState, type ReactNode, type FC } from 'react';

type LoginType = 'student' | 'creator' | 'organization';

interface ModalContextType {
  isLoginOpen: boolean;
  isApplyOpen: boolean;
  loginType: LoginType;
  openLoginModal: (type?: LoginType) => void;
  closeLoginModal: () => void;
  openApplyModal: () => void;
  closeApplyModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [loginType, setLoginType] = useState<LoginType>('student');

  const openLoginModal = (type?: LoginType) => {
    if (type) setLoginType(type);
    setIsLoginOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
    document.body.style.overflow = '';
  };

  const openApplyModal = () => {
    setIsApplyOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeApplyModal = () => {
    setIsApplyOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <ModalContext.Provider value={{
      isLoginOpen,
      isApplyOpen,
      loginType,
      openLoginModal,
      closeLoginModal,
      openApplyModal,
      closeApplyModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
