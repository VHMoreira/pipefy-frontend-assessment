import React from 'react';
import {
  WrapperBackground,
  Wrapper,
  Container,
  Header,
  Content,
  CloseButton
} from './styles';

interface ModalProps {
  isOpen: boolean
  title?: string
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children
}) => {

  return (
    <Wrapper show={isOpen}>
      <Container>
        <Header>
          {title ? <h3>{title}</h3> : null}
          <CloseButton onClick={onClose}>&#10006;</CloseButton>
        </Header>
        <Content>{children}</Content>
      </Container>
      <WrapperBackground />
    </Wrapper>
  );
}

export default Modal;
