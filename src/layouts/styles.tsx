import styled, { css } from "styled-components";
import { rgba } from "polished";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100vh;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
`;

export const NavbarInner = styled.div``;

export const NavbarItem = styled.div<{ isActive: Boolean }>`
  padding: 24px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  transition: background 0.3s ease;

  ${(props) =>
    props.isActive
      ? css`
          font-weight: 600;
          background: ${props.theme.colors.primary};
        `
      : css`
          :hover {
            background: ${rgba(props.theme.colors.primary, 0.1)};
          }
        `}
`;

export const Content = styled.div`
  padding: 24px;
`;
