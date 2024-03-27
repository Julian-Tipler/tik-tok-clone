import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

type ModalContextType = {
  showModal: (content: React.ReactNode) => void;
  hideModal: () => void;
};

export function useModal() {
  return useContext(ModalContext);
}

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const showModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isOpen && (
        <ModalWrapper onClose={hideModal} isOpen={isOpen}>
          {modalContent}
        </ModalWrapper>
      )}
    </ModalContext.Provider>
  );
};

const ModalWrapper = ({
  onClose,
  children,
  isOpen,
}: {
  onClose: () => void;
  children: React.ReactNode;
  isOpen?: boolean;
}) => {
  return (
    <div
      className={`${
        isOpen ? "fixed inset-0 z-50 overflow-y-auto" : "hidden"
      } bg-black bg-opacity-50`}
    >
      <div className="flex min-h-screen items-center justify-center">
        <div className="m-4 rounded-lg bg-white p-4 shadow-lg">
          {children}
          <button
            onClick={onClose}
            className="mt-4 rounded bg-red-500 px-4 py-2 text-white transition duration-150 hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
