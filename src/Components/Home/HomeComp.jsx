import './HomeComp.css'
import  MyImage  from "./Myimage.png";
const HomeComp = () => {
    return (
        <div className='fullBody'>
            <div class="hero-area">
            <div class="hero-text">
                <h1>Better Solution <br/> <span>For Your </span>
                <br/> Business.</h1>
                <p>We are team of talented Designers making Websites with <br/> HTML CSS & JavaScript (React).</p>
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