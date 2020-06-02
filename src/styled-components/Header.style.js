import styled from "styled-components";

export const SHeader = styled.header`
  height: 40px;
  margin: 0 auto;
  padding: 20px 50px;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SHeaderImg = styled.img`
  display: block;
  height: 100%;
`;

export const SHeaderButton = styled.button`
  background: transparent;
  font-weight: 600;
  font-size: 2rem;
  outline: none;
  border: none;
  cursor: pointer;
`;
