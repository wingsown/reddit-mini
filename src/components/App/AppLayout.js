import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";


export default function AppLayout() {
    // State for managing search term and mobile navigation visibility
    return ( 
        <div>
            
            <Header/>


            <Nav/>


            <Content/>


            <Footer/>
            
        </div>
    )
}