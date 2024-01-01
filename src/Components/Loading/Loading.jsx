import "./LoadingStyle.css";
const Loading = () => {
  return (
    <div className="loadingContainer">
      <div class="bg"></div>
      <div class="content">
        <div class="circle">
          <span class="dot no1"></span>
          <span class="dot no2"></span>
          <span class="dot no3"></span>
          <span class="dot no4"></span>
          <span class="dot no5"></span>
          <span class="dot no6"></span>
          <span class="dot no7"></span>
          <span class="dot no8"></span>
          <span class="dot no9"></span>
          <span class="dot no10"></span>
        </div>
        <div class="text">Loading</div>
      </div>
    </div>
  );
};

export default Loading;
