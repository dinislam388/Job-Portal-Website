import Swal from "sweetalert2";
import "./ApplyForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AppyForm = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    link: '',
    link2: '',
    text: ''
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
    if (inputs.name.trim() === '' || inputs.email.trim() === '' || inputs.link.trim() === '' || inputs.link2.trim() === '' || inputs.text.trim() === '') {
      Swal.fire({
        title: 'Enter Valid information',
        icon: "warning",
      }) 
    } else {
      navigate('/')
      Swal.fire({
        title: 'Apply Successfully',
        icon: "success",
      })
    }
  };
  


  return (
    <div>
      
        <div className="applyConatiner">
          <div className="formBox">
            <form 
            onSubmit={handleInput} 
            >
            <div className="inputFild">
              <div className="inputBorder">
                <h1 className="contactHeading">Apply Form</h1>
                <input name="name" value={inputs.name} onChange={changingValue} type="text" placeholder="Full Name" /> <br />
                <input name="email" value={inputs.email} onChange={changingValue} type="text" placeholder="Email" /> <br />
                <input name="link" value={inputs.link} onChange={changingValue} type="text" placeholder="Port Folio Link" /> <br />
                <input name="link2" value={inputs.link2} onChange={changingValue} type="text" placeholder="CV Drive Link" /> <br />
                <input name="text" value={inputs.text} onChange={changingValue} type="text" placeholder="Job Position" /> <br />
                <input
                  type="text"
                  placeholder="Long Description Doc Link"
                />{" "}
                <br />
                {/* <input type="text" placeholder="Job Position" /> <br />
              <input type="text" placeholder="Job Position" /> <br />
              <input type="text" placeholder="Job Position" /> <br />
              <input type="text" placeholder="Job Position" /> <br /> */}
                <button className="submitBtn">Apply</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      
    </div>
  );
};

export default AppyForm;




// 