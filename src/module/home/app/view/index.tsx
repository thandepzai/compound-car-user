"use client";

import AppOutro from "./AppOutro";
import Banner from "./Banner";
import DownloadApp from "./DownloadApp";
import GuideSection from "./GuideSection";
import ListService from "./ListService";

const HomeView = () => {
    return (
        <>
            <Banner />
            {/* <ListService /> */}
            <GuideSection />
            <DownloadApp />
            <AppOutro />
        </>
    );
};

export default HomeView;
