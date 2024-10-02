// import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Data from "./Data"; // Ensure this file exports travelData

function App() {
const data = Data.map(function(item) {
  return (
    <Main
      key={item.id}
      img={item.img}
      name={item.name}
      link={item.link}
      location={item.location}
      fromDate={item.fromDate}
      toDate={item.toDate}
      description={item.description}
    />
  );
});

  return (
    <div>
      <Navbar />
    {data}
      
      
    </div>
  );
}

export default App;
