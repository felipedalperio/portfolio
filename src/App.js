import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Post from "./components/post/Post";
import Technologies from "./components/technologies/Technologies";
import Home from "./pages/home/Home";


function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Post/>
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
