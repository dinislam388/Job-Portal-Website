import { useState } from "react";
import "./ContactComp.css";
import contactImg from "./contact icon.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const ContactComp = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    number: '', 
    link: ''
  })
  const changingValue = (e)=> {
    setInputs({
      ...inputs, 
      [e.target.name]: e.target.value
    })
  }
  const handleInput = (e) => {
    e.preventDefault();
    // console.log(inputs);
    if (inputs.name.trim() === '' || inputs.email.trim() === '' || inputs.number.trim() === '' || inputs.link.trim() === '') {
      Swal.fire({
        title: 'Enter Valid information',
        icon: "warning",
      }) 
    } else {
      navigate('/')
      Swal.fire({
        title: 'Thank You',
        icon: "success",
      })
    }
  };
  return (
    <div>
      <div className="conatiner">
        <div className="formBox">
          
            <form className="inputFild" onSubmit={handleInput}>
            <div className="inputBorder">
              <div>
                <img className="conatctImg" src={contactImg} alt="" />
              </div>
              <h1 className="contactHeading">CONTACT</h1>
              <input name="name" value={inputs.name} onChange={changingValue} type="text" placeholder="Full Name" /> <br />
              <input name="email" value={inputs.email} onChange={changingValue} type="email" placeholder="Enter email" /> <br />
              <input name="number" value={inputs.number} onChange={changingValue} type="number" placeholder="Enter number" /> <br />
              <input name="link" value={inputs.link} onChange={changingValue} type="text" placeholder="Enter your Portfolio Link" /> <br />
              <button className="submitBtn" >
                Submit
              </button>
            </div>
            </form>
          
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
