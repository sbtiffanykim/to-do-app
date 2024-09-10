import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import ToDoList from './components/ToDoList';

const GlobalStyle = createGlobalStyle`
${reset}
body {
    font-family: "Poppins", sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  * {
        box-sizing: border-box;
    }
  a {
      text-decoration: none;
      color: inherit;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 90vh;
  width: 50vw;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 5vh auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ToDoList />
      </Container>
    </>
  );
}

export default App;
