import { useNavigate } from "react-router-dom";
import "./NotFound.css"
import ErrorPage from './NotFound page img.png'
const NotFound = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    };
    const handleHome = () => {
        navigate('/')
    }
    return (
        <div className="bg-black h-[100vh]">
            <img className="w-[40%] m-auto " src={ErrorPage} alt="" />
            {/* <img className="w-[70%] m-auto " src={"https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"} alt="" /> */}
            <div className="text-center ml-[10px] flex gap-5 items-center justify-center">
                <button onClick={handleBack} className="bg-white p-[10px] rounded hover:bg-slate-400	 ">Back</button>
                <button onClick={handleHome} className="bg-white p-[10px] gap-[30px] rounded hover:bg-slate-400	">Home</button>
            </div>
        </div>
    );
};

export default NotFound;