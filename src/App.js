import "./App.css";
import Navbar from "./components/Navbar";
import NewsItem from "./components/NewsItem";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h2>NewsMonkey</h2>
      <h4>
        NewsMonkey is a news app which can be used to grap quick daily news
        bites. <br></br>
        If you are interested in weather, politics and sports, News Monkey is
        for you!
      </h4>

      <NewsItem></NewsItem>
    </div>
  );
}

export default App;
