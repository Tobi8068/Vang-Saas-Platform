import NavBar from "../layout/NavBar";
import LeftSideBar from "../layout/LeftSideBar";
// import CustomCompanyStack from "../layout/CustomCompanyStack";

function MainApp() {

    return (
        <div className="flex gap-5 p-2">
            <LeftSideBar></LeftSideBar>
            <div>
                <NavBar></NavBar>
                {/* <CustomCompanyStack></CustomCompanyStack> */}
            </div>
        </div>
    )

}

export default MainApp;