import styled from "styled-components";

export const StyledSearchBar = styled.input`
  background: #fff;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height: 40px;
  display: block;
  border-radius: 10px;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  outline:0;
  width: 400px;

    @media screen and (max-width: 420px){
        width: 300px;
    }

    @media screen and (max-width: 320px){
        width: 260px;
    }
`

export const SearchBarText = styled.p`
  font-size: 22px;
  margin-top: 10px;
  color: ${(props) => props.theme.text};
  text-align: center;
`