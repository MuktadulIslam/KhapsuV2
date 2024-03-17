import Navbar from "./Navbar";

export default function MainBody( {children }) {
    return(<>
    <Navbar/>
    {children}
    </>)
}