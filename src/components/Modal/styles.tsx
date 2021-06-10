import styled from "styled-components";

export const StyledModal = styled.div<{ isOpen: Boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 500;
  padding: 24px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(57, 57, 57, 0.5);

  transition: opacity 0.3s linear;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  pointer-events: ${(props) => (props.isOpen ? "all" : "none")};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
