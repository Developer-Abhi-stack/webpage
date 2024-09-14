import Footer from "./components/Footer";
import MainComponent from "./components/MainComponent";
import NewsLetter from "./components/NewsLetter";
import Package from "./components/Package";
import Team from "./components/Team";

// Main application component
const App = () => {
  return (
    <div>
      {/* Main component, typically the landing or hero section */}
      <MainComponent />
      
      {/* Package component, likely showcasing available packages or services */}
      <Package />
      
      {/* Team component, displaying team members or their information */}
      <Team />
      
      {/* Newsletter component, for user subscriptions or updates */}
      <NewsLetter />
      
      {/* Footer component, for the footer section of the page */}
      <Footer />
    </div>
  );
}

export default App;
