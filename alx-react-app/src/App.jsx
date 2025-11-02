
import UserProfile from './components/UserProfile';


function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </>
  );
}

export default App;
