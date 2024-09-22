import NavigationHeader from "../components/layout/NavigationHeader";
import PageContent from "../components/layout/PageContent";
import Sidebar from "../components/layout/Sidebar";

<div className="App" style={styles.container}>
  {/* <header className="App-header">
  <Dashboard />
</header> */}
  <NavigationHeader />
  <div style={styles.main}>
    <Sidebar />
    <Routes>
      <Route path="/" element={<PageContent />} />
      <Route path="/docs" element={<PageContent />} />
    </Routes>
  </div>

  <footer className="home-footer">
    <p>&copy; 2024 Revogrit Solutions Ltd</p>
  </footer>
</div>;
const Welcome = () => {};

// Main layout styles, easy to adjust in one place
const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },
    main: {
      display: 'flex',
      flex: 1,  // Ensures content takes full height
    },
  };
export default Welcome;
