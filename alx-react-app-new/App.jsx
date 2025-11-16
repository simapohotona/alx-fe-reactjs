import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile
        name="Mosima"
        age={23}
        bio="A passionate learner exploring React."
      />
      <Footer />
    </>
  );
}

export default App;
