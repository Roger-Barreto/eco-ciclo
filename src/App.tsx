import NavBar from './components/Navbar';
import MainSection from './sections/MainSection';
import SecondSection from './sections/StatisticsSection';
import TypesTrash from './sections/TypesTrash';
import MapSection from './sections/MapSection';
import CreditsSection from './sections/CreditsSection';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <MainSection />
        <SecondSection />
        <TypesTrash />
				<MapSection />
        <CreditsSection />
      </main>
    </>
  );
}

export default App;
