import "./PrimaryButton.css";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

const PrimaryButton = (props: any) => {

    return (
        <Router>
            <Link className="PrimaryButton" to={`/${props.link}`}> SHOP THE LOOK </Link>
            <Routes>
                <Route path="/:id" element={""}/>
            </Routes>
        </Router>
        
    )
}
export default PrimaryButton;