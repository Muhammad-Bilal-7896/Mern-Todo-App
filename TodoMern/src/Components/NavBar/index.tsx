import {FC} from "react";

//Interface for Navigation Component Props
interface NavProps {
    text: string
}

const NavBar:FC <NavProps> = (props) => {
    return (
        <>
            <nav className="navbar navbar-primary bg-primary">
                <div className="container-fluid">
                    <a href="http://localhost:3000/" className="navbar-brand text-light text-bold">{props.text}</a>
                    <form className="d-flex input-group w-auto">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fas fa-search" />
                        </span>
                    </form>
                </div>
            </nav>
        </>
    )
}
export default NavBar;