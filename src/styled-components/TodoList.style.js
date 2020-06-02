import styled from "styled-components";

export const SLinkButton = styled.button`
  outline: none;
  border: none;
  border-radius: 0.4rem;
  color: #fff;
  background-color: #0076cd;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-left: 5rem;
  cursor: pointer;
`;

export const STodoInfo = styled.h3`
  text-align: center;
  font-size: 1.5rem;
`;

export const STodo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem;
  height: 3rem;
  width: 80%;
  margin: 3rem auto;
  border: 1px solid;
  border-color: ${(props) =>
    props.priority < 2 ? "green" : props.priority < 5 ? "orange" : "red"};
`;

export const SColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
`;

export const STodoAction = styled.button`
  outline: none;
  border-radius: 0.4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const SResetButton = styled(SLinkButton)`
  margin: 0;
  background-color: red;
`;
