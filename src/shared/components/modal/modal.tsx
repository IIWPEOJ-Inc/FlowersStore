import './modal.scss';
import { RootState } from '../../../store/store';
import { hideModal } from './modalSlice';
import { useDispatch, useSelector } from 'react-redux';

interface ModalProps {
  children: React.ReactNode;
  modalType: string;
}

export const Modal = ({ children, modalType }: ModalProps) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state: RootState) => state.modal.isActive);
  return (
    <div onClick={() => dispatch(hideModal())} aria-hidden="true" className={`modal ${isActive ? '' : 'closed'}`}>
      <div
        // onClick={(e) => {
        //   e.preventDefault();
        //   e.stopPropagation();
        // }}
        // aria-hidden="true"
        className={modalType}
      >
        {children}
      </div>
    </div>
  );
};
