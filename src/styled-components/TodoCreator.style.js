import styled from "styled-components";

export const SForm = styled.form`
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;

export const SH2 = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;
`;

export const SLabel = styled.label`
  font-size: 1.5rem;
  color: #808080;
  font-weight: 500;
`;

export const STitle = styled.input`
  height: 2rem;
  padding: 0.25rem;
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
`;

export const SDescription = styled.textarea`
  height: 2rem;
  height: 6rem;
  padding: 0.25rem;
  background-color: #f5f5f5;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  margin-top: 0.5rem;
  /* margin-bottom: 3rem; */
`;

export const SCounter = styled.span`
  color: ${(props) => (props.overlimit ? "red" : "rgba(0, 0, 0, 0.8)")};
  margin-top: 0;
  margin-bottom: 3rem;
  margin-left: auto;
`;

export const SPriority = styled(STitle)`
  margin-bottom: 0;
`;

export const SButton = styled.button`
  width: 8rem;
  height: 4rem;
  margin: 3rem auto;
  border-radius: 0.3rem;
  background-color: #0076cc;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 800;
  outline: none;
`;

export const SMessage = styled.span`
  width: 60%;
  height: 2rem;
  padding-top: 0.5rem;
  text-align: center;
  background-color: ${(props) => (props.error ? "red" : "green")};
  color: #fff;
  margin: auto;
  font-weight: 500;
`;
