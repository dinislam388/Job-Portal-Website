import "./LoadingStyle.css";
const Loading = () => {
  return (
    <div className="loadingContainer">
      <div className="bg"></div>
      <div className="content">
        <div className="circle">
          <span className="dot no1"></span>
          <span className="dot no2"></span>
          <span className="dot no3"></span>
          <span className="dot no4"></span>
          <span className="dot no5"></span>
          <span className="dot no6"></span>
          <span className="dot no7"></span>
          <span className="dot no8"></span>
          <span className="dot no9"></span>
          <span className="dot no10"></span>
        </div>
        <div className="text">Loading</div>
      </div>
    </div>
  );
};

export default Loading;
