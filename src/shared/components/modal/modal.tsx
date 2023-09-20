import './modal.scss';

export enum ModalType {
  SignUp,
  Menu,
}

interface ModalProps {
  children: React.ReactNode;
  modalType: ModalType;
}

export const Modal = ({ children, modalType }: ModalProps) => {
  return (
    <div className={`modal ${modalType === ModalType.SignUp ? 'sign-up-modal' : 'menu-modal'}`}>
      <div></div>
      <div>{children}</div>
      <div></div>
    </div>
  );
};
