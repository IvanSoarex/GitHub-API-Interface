import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  input {
    border: 1px solid #808080;
    border-radius: 8px;
    width: 100%;
    height: 45px;
    padding: 8px;
    margin: 0 0 0 16px;
    font-weight: 500;
    &:hover {
      box-shadow: 3px 2px 10px rgba(1, 1, 1, 0.2);
    }
  }
  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }
    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
export const WrapperImage = styled.img`
    width: 50px;
`;