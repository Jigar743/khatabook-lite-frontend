import styled from "styled-components";

export const StyledNavbar = styled.header`
  width: 100%;
  height: 10vh;
  padding: 0 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  .navbar-left-items {
    text-align: center;
    font-size: xx-large;
    display: flex;
    align-items: center;
  }
  .navbar-right-items {
    display: flex;
    gap: 20px;
    > button {
      margin: 15px 0;
      padding: 0 20px;
      font-size: larger;
      cursor: pointer;
      border-radius: 5px;
      border: none;
    }
  }
`;
