import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./scss/app.scss";
import "./assets/main.scss";

function App() {
  return (
    <div className="App">
      <Header title="todo list app" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
