import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

function App() {

  // <GalleryNavigation/>
  let galleries = harvardArt.records;
    console.log(galleries);
  // GalleryNavigation({galleries});
    
  return (
    <GalleryNavigation galleries={galleries}/> 
  );
}

export default App;
