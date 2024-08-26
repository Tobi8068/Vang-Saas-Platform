import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "layout/NavBar";
import LeftSideBar from "layout/LeftSideBar";
import DesignPage from 'layout/design';
import DiscoverPage from 'layout/discover';
import AnalyticsPage from 'layout/analytics';

function MainApp() {

    return (
        <Router>
            <div className="flex gap-5 p-2">
                <LeftSideBar></LeftSideBar>
                <div className='w-full'>
                    <NavBar></NavBar>
                    <div className="mt-24 w-full">
                        <Routes>
                            <Route path="/design" element={<DesignPage />} />
                            <Route path="/discover" element={<DiscoverPage />} />
                            <Route path="/analytics" element={<AnalyticsPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )

}

export default MainApp;