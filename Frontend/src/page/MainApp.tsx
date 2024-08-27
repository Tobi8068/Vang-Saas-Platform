import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "layout/NavBar";
import LeftSideBar from "layout/LeftSideBar";
import DesignPage from 'layout/design';
import DiscoverPage from 'layout/discover';
import AnalyticsPage from 'layout/analytics';

function MainApp() {

    return (
        <Router>
            <div className="bg-[#f5f4f4] flex flex-col md:flex-row items-end md:items-start gap-2 md:gap-5 pl-2 pt-2 height-full">
                <LeftSideBar></LeftSideBar>
                <div className='flex flex-col justify-between w-full h-full'>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path="/design" element={<DesignPage />} />
                        <Route path="/discover" element={<DiscoverPage />} />
                        <Route path="/analytics" element={<AnalyticsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )

}

export default MainApp;