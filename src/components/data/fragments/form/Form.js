import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Form.module.css";
import icon_checklistform from "../../../../assets/icon_checklistform.png";
function Form() {
  const [mainDataType, setmainDataType] = useState("");
  const [mainJob, setmainJob] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [inputs, setInputs] = useState({});
  //create initial menuCollapse state using useState hook
  const [showResponses, setShowResponses] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const submitOnClick = () => {
    //condition checking to change state from true to false and vice versa
    if (inputs.username && inputs.country && inputs.institution && inputs.email) {
      setShowResponses(true);
    }
    // showResponses ? setShowResponses(false) : setShowResponses(true);
  };
  const requestDataAgainOnClick = () => {
    //condition checking to change state from true to false and vice versa
    // showResponses ? setShowResponses(false) : setShowResponses(true);
    setShowResponses(false);
    setInputs({});
    setSubmitted(false);
    setValid(false);
  };

  const handleDataType = (event) => {
    setmainDataType(event.target.value);
  };
  const handleJob = (event) => {
    setmainJob(event.target.value);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (inputs.username && inputs.country && inputs.institution && inputs.email && inputs.request_data) {
      setValid(true);
    }
  };

  return (
    <>
      <div className={showResponses && valid ? style["form-show"] : ""}>
        <div className={style.formsection}>
          <p className={style.title}>Untuk mendapatkan data kami, isi form di bawah ini.</p>
          <form onSubmit={handleSubmit} className={style.form}>
            {/* <label className={style.label}>
              Jenis Data :
              <select className={style.select} value={mainDataType} onChange={handleDataType}>
                <option>Wind</option>
                <option>Wave</option>
              </select>
            </label> */}
            <label className={style.label}>
              Nama :
              <input className={style.input} type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
              {submitted && !inputs.username ? <span style={{ fontSize: "0.90em", float: "right", paddingRight: "3em", color: "red", margin: 0 }}>*username tidak boleh kosong</span> : null}
            </label>
            <label className={style.label}>
              Email :
              <input className={style.input} type="text" name="email" value={inputs.email || ""} onChange={handleChange} />
              <span style={{ fontSize: "0.90em", float: "right", paddingRight: "3em", color: "red", margin: 0 }}>
                {!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputs.email) && inputs.email ? "*email tidak sesuai format" : ""}
              </span>
              {submitted && !inputs.email ? <span style={{ fontSize: "0.90em", float: "right", paddingRight: "3em", color: "red", margin: 0 }}>*email tidak boleh kosong</span> : null}
            </label>
            <label className={style.label}>
              Negara :
              <input className={style.input} type="text" name="country" value={inputs.country || ""} onChange={handleChange} />
              {submitted && !inputs.country ? <span style={{ fontSize: "0.90em", float: "right", paddingRight: "3em", color: "red", margin: 0 }}>*negara tidak boleh kosong</span> : null}
            </label>
            <label className={style.label}>
              Perusahaan/Institusi :
              <input className={style.input} type="text" name="institution" value={inputs.institution || ""} onChange={handleChange} />
              {submitted && !inputs.institution ? <span style={{ fontSize: "0.90em", float: "right", paddingRight: "3em", color: "red", margin: 0 }}>*institusi tidak boleh kosong</span> : null}
            </label>
            <label className={style.label}>
              Pekerjaan :
              <select className={style.select} value={mainJob} onChange={handleJob}>
                <option>Student</option>
                <option>Lecturer</option>
                <option>Scientist</option>
                <option>Other</option>
              </select>
            </label>
            <label className={style.label}>
              Deskripsi Data :
              <textarea className={style["input-text"]} type="text" name="request_data" value={inputs.request_data || ""} placeholder="cth : Saya request data kecepatan angin anomali pada tahun 1998" onChange={handleChange} />
              {submitted && !inputs.request_data ? (
                <span style={{ fontSize: "0.90em", float: "right", paddingRight: "3em", color: "red", margin: 0 }}>*deskripsi data tidak boleh kosong</span>
              ) : (
                <span style={{ fontSize: "0.90em", float: "right", paddingRight: "3em", color: "red", margin: 0 }}>*tulis deskripsi data sedetail mungkin</span>
              )}
            </label>
            <input className={style.submit} type="submit" value="Submit" onClick={submitOnClick} />
          </form>
        </div>
      </div>
      {submitted && valid ? (
        <div className={style["form-response-position"]}>
          <div className={showResponses ? "" : style["form-response"]}>
            <div className={style["form-response-ket"]}>
              <div className={style["form-response-ket-position"]}>
                <img src={icon_checklistform} />
                <p className={style["form-response-ket-text"]}>Terkirim, terima kasih!</p>
              </div>
            </div>
            <div className={style["form-response-button-position"]}>
              <button className={style["form-response-button"]} onClick={requestDataAgainOnClick}>
                <Link to="/data">
                  <p className={style["form-response-button-text"]}>Request Data Lainnya</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Form;
