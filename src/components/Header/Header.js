import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { MyContext } from "../../context";
import {
  Container,
  Menu,
  ContainerButton,
  ButtonMenu,
  ContainerIcon,
  ContainerText,
  TextMenu,
  BoxLine,
  GridBoxLine,
  ContainerLogo,
} from "./styled";
import Headroom from "react-headroom";

const Header = () => {
  const theme = useContext(ThemeContext);
  const {
    context: {
      global: { menu },
    },
  } = useContext(MyContext);
  const basic = menu === "primary";

  return (
    <Headroom>
      <Container theme={theme} basic={basic}>

        {/* <MenuHeader basic={basic} /> */}

        <BoxLine className="box-line">
          <GridBoxLine basic={basic}>
            <ContainerLogo basic={basic}>
              <a href="/" className="link-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="512pt"
                  viewBox="-68 0 512 512.001"
                  width="512pt"
                >
                  <path d="m372.261719 463.78125-102.351563-154.210938c-20.167968 8.519532-42.238281 13.386719-65.375 13.792969l115.992188 174.753907c5.769531 8.695312 15.457031 13.882812 25.910156 13.882812 6.09375 0 12.019531-1.792969 17.128906-5.183594 14.261719-9.46875 18.164063-28.773437 8.695313-43.035156zm0 0" />
                  <path d="m0 83.425781v126.679688c9.097656-5.414063 19.714844-8.535157 31.046875-8.535157h31.046875v-109.609374h-31.046875c-11.335937 0-21.949219-3.121094-31.046875-8.535157zm0 0" />
                  <path d="m31.046875 323.402344c-11.335937 0-21.949219-3.121094-31.046875-8.535156v166.082031c0 17.117187 13.929688 31.042969 31.046875 31.042969 17.121094 0 31.046875-13.925782 31.046875-31.042969v-157.546875zm0 0" />
                  <path d="m201.394531 293.53125c80.925781 0 146.765625-65.839844 146.765625-146.765625s-65.839844-146.765625-146.765625-146.765625h-170.347656c-17.121094 0-31.046875 13.929688-31.046875 31.046875s13.929688 31.046875 31.046875 31.046875h170.347656c46.6875 0 84.671875 37.984375 84.671875 84.671875 0 46.691406-37.984375 84.671875-84.671875 84.671875h-170.347656c-17.121094 0-31.046875 13.929688-31.046875 31.046875 0 17.121094 13.929688 31.046875 31.046875 31.046875zm0 0" />
                </svg>
              </a>
            </ContainerLogo>
          </GridBoxLine>
        </BoxLine>
      </Container>
    </Headroom>
  );
};

const MenuHeader = ({basic}) => {
  return (
    <Menu>
      <ContainerButton>
        <ButtonMenu aria-hidden="true" basic={basic}>
          <ContainerIcon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              role="img"
            >
              <path d="M0 4h24v2H0zM0 11h14v2H0zM0 18h20v2H0z"></path>
            </svg>
          </ContainerIcon>
          <ContainerText>
            <TextMenu className="text-menu">Menú</TextMenu>
          </ContainerText>
        </ButtonMenu>
      </ContainerButton>
    </Menu>
  );
};

export default Header;
