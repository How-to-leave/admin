import { ReactNode } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Navbar, NavbarInner, NavbarItem, Content } from "./styles";

const adminRoutes = {
  countries: "/admin/countries",
  users: "/admin/users",
};

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  const history = useHistory();
  const location = useLocation();

  const handleLink = (href: string) => {
    history.replace(href);
  };

  return (
    <Container>
      <Navbar>
        <NavbarInner>
          <NavbarItem
            onClick={handleLink.bind(null, adminRoutes.countries)}
            isActive={location.pathname === adminRoutes.countries}
          >
            Страны
          </NavbarItem>
          <NavbarItem
            onClick={handleLink.bind(null, adminRoutes.users)}
            isActive={location.pathname === adminRoutes.users}
          >
            Пользователи
          </NavbarItem>
        </NavbarInner>
        <NavbarInner>
          <NavbarItem onClick={handleLink.bind(null, "/")} isActive={false}>
            Главная
          </NavbarItem>
          <NavbarItem onClick={handleLink.bind(null, "/")} isActive={false}>
            Выйти
          </NavbarItem>
        </NavbarInner>
      </Navbar>
      <Content>{children}</Content>
    </Container>
  );
}
