import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
