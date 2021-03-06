import NavBar from "../NavBar";
import Tasks from "../Tasks";

const Home = () => {
  return (
    <>
      <NavBar text="Mern Todo App" />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-primary">Mern Stack Todo App</h1>
            <hr />
            <Tasks />
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;