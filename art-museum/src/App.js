import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Switch, Route } from "react-router-dom";



function App() {

  // <GalleryNavigation/>
  let galleries = harvardArt.records;
  console.log(galleries);
  // GalleryNavigation({galleries});

  return (
    <>
      <GalleryNavigation galleries={galleries} />
      <Switch>
        <Route path="/galleries/:galleryId" component={GalleryView} />
      </Switch>
    </>
  );
}



export default App;
