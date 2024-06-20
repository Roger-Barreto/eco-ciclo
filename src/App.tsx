import NavBar from './components/Navbar';
import MainSection from './sections/MainSection';
import SecondSection from './sections/StatisticsSection';
import TypesTrash from './sections/TypesTrash';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <MainSection />
        <SecondSection />
        <TypesTrash />
      </main>
    </>
  );
}

export default App;
