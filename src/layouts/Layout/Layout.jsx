import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Container from "../../components/Container/Container.jsx";

const Layout = () => {
    return (
        <div>
            <div>
                <Container>
                    <Navbar/>
                </Container>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Container>
                    <Footer/>
                </Container>
            </div>
        </div>
    )
}

export default Layout;