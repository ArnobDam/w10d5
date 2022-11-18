import { NavLink } from "react-router-dom";
import './GalleryNavigation.css'

const GalleryNavigation = (galleries) => {

    console.log(galleries.galleries);
    const names = galleries.galleries.map(gallery => {
        // console.log(gallery)
        return (<NavLink to={`/galleries/${gallery.id}`}>
            {gallery.name}
        </NavLink>)
    })
    
    return (
        <nav>
            <NavLink to={"/"}>
                Home
            </NavLink>
            <h1>Galleries</h1>
            {names}
        </nav>
    )

}



export default GalleryNavigation;