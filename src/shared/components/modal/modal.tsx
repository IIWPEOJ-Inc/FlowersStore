import './modal.scss';

export enum ModalType {
  SignUp,
  Menu,
}

//переделать на передачу стринга и передавать сразу структуру нужную

interface ModalProps {
  children: React.ReactNode;
  modalType: ModalType;
}

export const Modal = ({ children, modalType }: ModalProps) => {
  return (
    <div className={`modal ${modalType === ModalType.SignUp ? 'sign-up' : 'menu'}`}>
      <div></div>
      <div>{children}</div>
      <div></div>
    </div>
  );
};
