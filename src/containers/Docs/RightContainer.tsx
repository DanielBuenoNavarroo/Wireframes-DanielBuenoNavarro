import {Outlet} from "react-router-dom";

const RightContainer = () => {
    return (
        <div className={'w-full p-8'}>
            <Outlet/>
        </div>
    );
}

export default RightContainer;