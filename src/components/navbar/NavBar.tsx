import styled from "styled-components";

const Nav = styled.nav`
  background-color: white;
`;

const List = styled.ul`
  position: relative;
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Link = styled.li`
  height: 100%;
  padding: 0 2em;
  border-radius: 64px;
  transition: 0.2s;
  color: black;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <List>
        <Link>Home</Link>
        <Link>Blog</Link>
        <Link>About</Link>
        <Link>Skills</Link>
      </List>
    </Nav>
  );
};
