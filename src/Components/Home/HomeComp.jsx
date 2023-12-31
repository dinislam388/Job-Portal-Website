import './HomeComp.css'
import  MyImage  from "./Myimage.png";
const HomeComp = () => {
    return (
        <div className='fullBody'>
            <div class="hero-area">
            <div class="hero-text">
                <h1>Best Platform<br />Find Your <br /> Perfect <span>JOB</span>  </h1>
                <p>Discover an array of thrilling career opportunities tailored to your interests and academic focus. Your ideal job is on the horizon, ready for you to seize.</p>
                <div class="btn">
                    <div class="btn-a">
                        <button>Join</button>
                    </div>
                    <div class="btn-b">
                        <button>◀ Watch Video</button>
                    </div>
                </div>
            </div>
            <div class="hero-img">
                <img src={MyImage} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default HomeComp;