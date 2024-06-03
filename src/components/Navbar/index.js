import React from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { DiCssdeck} from "react-icons/di";
import { FaBars } from "react-icons/fa";


export const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;


export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const Span = styled.div`

  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;

`;
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light+99};
  transition: all 0.6s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? '100%' : '0')};
  z-index: ${({ open }) => (open ? '1000' : '-1000')};

`

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavContainer>
                <NavLogo to ="/">
                  <a
                    style = {{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      marginBottom: "20",
                      cursor: "pointer",
                  }}
                  >
                    <DiCssdeck size = "3rem" /> <Span>Portfolio</Span>
                  </a>
                </NavLogo>
                <MobileIcon>
                  <FaBars 
                    onClick = {() => {
                      setOpen(!open);
                    }}
                  />
                </MobileIcon>
                <NavItems>
                    <NavLink href="#about">Sobre</NavLink>
                    <NavLink href="#skills">Habilidades</NavLink>
                    <NavLink href="#experience">Experiência</NavLink>
                    <NavLink href="#projects">Projetos</NavLink>
                    <NavLink href="#education">Educação</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton href="https://github.com/robspereira" target="_blank">Perfil do Github</GitHubButton>
                </ButtonContainer>
            </NavContainer>
            {
              open && <MobileMenu open={open}>
                Sobre
                <MobileMenuLinks
                  href="#about" 
                  onClick={() => {
                    setOpen(!open);
                  }}
                > 
                </MobileMenuLinks>

                Habilidades
                <MobileMenuLinks
                  href="#skills" 
                  onClick={() => {
                    setOpen(!open);
                  }}
                > 
                </MobileMenuLinks>

                Experiência
                <MobileMenuLinks
                  href="#experience" 
                  onClick={() => {
                    setOpen(!open);
                  }}
                > 
                </MobileMenuLinks>

                Projetos
                <MobileMenuLinks
                  href="#projects" 
                  onClick={() => {
                    setOpen(!open);
                  }}
                > 
                </MobileMenuLinks>

                Educação
                <MobileMenuLinks
                  href="#education" 
                  onClick={() => {
                    setOpen(!open);
                  }}
                > 
                </MobileMenuLinks>
                <GitHubButton 
                  style = {{
                    padding: "10 16px",
                    background: `${theme.primary}`,
                    color: "white",
                    width: "max-content",
                  }}
                  href = "/"
                  target = "_blank" 
                
                >

                </GitHubButton>

              </MobileMenu>

            }
     </Nav>
    );
};

export default Navbar;