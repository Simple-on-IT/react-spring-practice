import { PropsWithChildren } from 'react';
import style from './Modal.module.scss';
import { createPortal } from 'react-dom';
import { useTransition, animated } from '@react-spring/web';

type ModalProps = {
    isOpen: boolean;
    onClose?: () => void;
};

export const Modal = ({
    isOpen,
    onClose,
    children,
}: PropsWithChildren<ModalProps>) => {
    const transitions = useTransition(isOpen, {
        // настройки анимации
    });

    const onModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    };

    return createPortal(
        <dialog
            className={style.overlay}
            onClick={onClose}
        >
            <div className={style.modal} onClick={onModalClick}>
                {children}
            </div>
        </dialog>,
        document.body
    );
};
