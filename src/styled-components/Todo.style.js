import styled from "styled-components";

export const STodoCard = styled.div`
  width: 70%;
  margin: 3rem auto;
  padding: 1rem 3rem;
  border: 1px solid grey;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0.5rem 0.5rem 0.25rem 0px rgba(0, 0, 0, 0.75);
`;

export const SCardTitle = styled.h3({
  textAlign: "center",
  fontSize: "2rem",
  textDecoration: "underline",
});

export const SCardLabel = styled.span({
  fontSize: "1.2rem",
  fontWeight: "bold",
});

export const SCardText = styled.span({
  fontSize: "1.2rem",
  color: "#808080",
  fontWeight: "bold",
  textAlign: "justify",
});

export const SButton = styled.button`
  height: 3rem;
  background-color: #0076cc;
  color: white;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: bold;
`;
