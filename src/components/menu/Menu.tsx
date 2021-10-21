import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  z-index: 1000;

  &:hover {
    .bar0 {
      transform: translateY(-3px);
    }

    .bar2 {
      transform: translateY(3px);
    }
  }

  &.clicked {
    .bar0 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    .bar1 {
      opacity: 0;
    }
    .bar2 {
      -webkit-transform: rotate(45deg) translate(-9px, -6px);
      transform: rotate(45deg) translate(-9px, -6px);
    }
  }
`;

const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
`;

interface MenuBtnProps {
  active?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const MenuBtn = (props: MenuBtnProps) => {
  const { active, onClick, className, style } = props;

  return (
    <div className={className} style={style}>
      <BtnContainer className={active ? "clicked" : ""} onClick={onClick}>
        {[0, 1, 2].map((num) => (
          <Bar className={`bar${num}`} />
        ))}
      </BtnContainer>
    </div>
  );
};

const MenuContainer = styled.nav`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  overflow: auto;
`;

const MenuArea = styled.ul`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &.inactive {
    transform: translateX(-100%);
  }

  &.active {
    transform: translateX(0);
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

const MenuOption = styled.li`
  margin: 16px 0;
  padding: 8px 1.8em;
  width: max-content;
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

interface MenuProps {
  active: boolean;
  onClick: () => void;
  menuOptions: {
    name: string;
    url: string;
  }[];
}

export const Menu = (props: MenuProps) => {
  const { active, onClick, menuOptions } = props;

  return (
    <MenuContainer>
      <MenuArea className={`${active ? "active" : "inactive"}`}>
        {menuOptions.map((menuOption) => (
          <MenuLink to={menuOption.url} onClick={onClick}>
            <MenuOption>{menuOption.name}</MenuOption>
          </MenuLink>
        ))}
      </MenuArea>
    </MenuContainer>
  );
};
