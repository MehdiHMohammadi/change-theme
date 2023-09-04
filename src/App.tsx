import Header from "./componenets/header";
import Content from "./componenets/content";
import { useThemeContext } from "./context/context.jsx";

function App() {
  const theme = useThemeContext();
  const darkMode = theme.darkMode;
  return (
    <div
      className={`${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <Header />
      <Content />
    </div>
  );
}

export default App;
