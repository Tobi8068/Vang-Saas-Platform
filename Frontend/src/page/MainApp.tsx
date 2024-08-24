import NavBar from "../layout/NavBar";
import LeftSideBar from "../layout/LeftSideBar";

function MainApp() {

    return (
        <div className="flex gap-5 p-2">
            <LeftSideBar></LeftSideBar>
            <div>
                <NavBar></NavBar>

            </div>
        </div>
    )

}

export default MainApp;