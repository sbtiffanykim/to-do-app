import { createGlobalStyle } from 'styled-components';
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

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
