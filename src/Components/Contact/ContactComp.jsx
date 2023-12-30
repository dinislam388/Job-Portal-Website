import "./ContactComp.css" 
import contactImg from "./contact icon.png";
const ContactComp = () => {
  return (
    <div>
      <div className="conatiner">
        <div className="formBox">
          <div className="inputFild">
            <div className="inputBorder">
              <div>
                <img className="conatctImg" src={contactImg} alt="" />
              </div>
              <h1 className="contactHeading">CONTACT</h1>
                <input type="text" placeholder="Enter your name" /> <br />
                <input type="email" placeholder="Enter your email" /> <br />
                <input type="number" placeholder="Enter your number" /> <br />
                <input type="text" placeholder="Enter your website link" /> <br />
                <button className="submitBtn">Submit</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
