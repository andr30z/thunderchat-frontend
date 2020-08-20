import styled from 'styled-components';

export const Aside = styled.aside`
  height:100%;
  width:70%;

  position:absolute;
  top:0;
  left:0;

  transform: ${({ toggle }) => {
    return toggle ? 'translateX(0)' : 'translateX(-200%)'
  }};
  transition: transform 0.3s ease-in-out;

  box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.35);

  display:flex;
  flex-direction:column;

  background:#fff;

  overflow-y:auto;
  overflow-x: hidden;

  @media (min-width:767px){
    position:unset;
    

    min-width:315px;
    max-width:25%;

    transform: translateX(0);

    .sidebar-toggle{
      display:none !important;
    }
  }

`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  background:#ff1616;

  border:1px solid #ff1616;

  height:15%;

  box-shadow: 0 0px 5px 0px rgba(0,0,0,1);

`;

export const IconContainer = styled.div`
  width: 50px;
  height:45px;
  border-radius: 50%;
  
  cursor:pointer;

  background-color: #fff;
  
  display: flex;
  align-self: center;
  justify-content:center;
  
  margin-right: 5px;
  margin-top: 5px;
  
  box-shadow: 3px 4px 5px 0px rgba(0,0,0,1);
  
  @media screen and (min-width:767px){
    display:none;
  }
`;

export const Span = styled.span`
  position: absolute;

  bottom: -15px;
  right: 0;

  width: 100%;

  border-bottom: 1px solid #ff1616;
`;

export const ContactInfoContainer = styled.div`
  position:relative;

  display:flex;
  justify-content:flex-end;
  flex-direction:column;

  width:50%;

  p{
    margin-top:10px;
  }

`;

export const UserContacts = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;

  min-height:100px;
  max-height:110px;
  width:100%;

  cursor:pointer;

  :hover{
    opacity:0.8;
    background-color:#e5e5e5;
  }

  :hover span{
    visibility:hidden;
  }

  :last-child span{
    visibility:hidden;
  }
`;

export const ImgContainer = styled.div`
  border-radius:50%;
  border:1px solid #ff1616;
  
  height:65%;
  width:20%;
  display:flex;
  align-items:center;
`;
