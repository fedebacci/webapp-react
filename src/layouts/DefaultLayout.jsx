import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";

import { useLoader } from "../contexts/LoaderContext";
import Loader from "../components/ui/Loader";



export default function DefaultLayout () {

    const { isLoading } = useLoader();

    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>


            <Loader isShow={isLoading} />
            {/* DEBUG */}
            {/* <Loader isShow={true} /> */}
            {/* <Loader isShow={false} /> */}
        </>
    );
};