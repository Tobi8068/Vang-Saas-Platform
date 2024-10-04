import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "layout/NavBar";
import LeftSideBar from "layout/LeftSideBar";
import MyStackPage from 'layout/my stack';
import DiscoverPage from 'layout/discover';
import AnalyticsPage from 'layout/analytics';
import TopBar from 'components/TopBar';

function MainApp() {

    return (
        <Router>
            <TopBar />
            <div className="bg-white flex flex-col md:flex-row items-end md:items-start height-full">
                <LeftSideBar />
                <div className='flex flex-col pl-[10px] pt-[10px] bg-white justify-between w-full h-full'>
                    <div className='bg-[#dde3ef]'>
                        <NavBar></NavBar>
                        <Routes>
                            <Route path="/discover" element={<DiscoverPage />} />
                            <Route path="/mystack" element={<MyStackPage />} />
                            <Route path="/analytics" element={<AnalyticsPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )

}

export default MainApp;