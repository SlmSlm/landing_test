import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ActivityMonitor from "./Components/ActivityMonitor/ActivityMonitor";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <ActivityMonitor />
    </div>
  );
}

export default App;
