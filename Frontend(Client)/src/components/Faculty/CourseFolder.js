import React, { useState,useEffect } from "react";
import "../css/styles.css";
import Button from "@mui/material/Button";
import Popup from "../AuxillaryComponents/PopupFunction";
import { Box, Card, CardMedia,Modal } from "@mui/material";
import axios from "axios";
import { Viewer,Worker } from '@react-pdf-viewer/core';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  //   border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

export default function CourseFolder() {
  axios.defaults.withCredentials = true;
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  
  const [folders, setfolders] = useState("");

  useEffect(()=>{
    getTheory()
  },[])
  
  const[Assignments1,setAssignments1]=useState([])
  const[Assignments2,setAssignments2]=useState([])
  const[Quiz1,setQuiz1]=useState([])
  const[Quiz2,setQuiz2]=useState([])
  
  const getTheory = async () => {
    const res = await axios.get(
      "http://localhost:4000/Content/showTheory"
    );
    setfolders(res.data);  
    var quiz1= [];
    var assignments1= [];
    var quiz2= [];
    var assignments2= [];
  
    for (var i=1;i<=parseInt(res.data.Round1.Quiz)+parseInt(res.data.Round2.Quiz); i++) {
        if(i<=parseInt(res.data.Round1.Quiz)){
          quiz1.push(i);
        }
        else{
          quiz2.push(i);
        }
      } 
    for (var i=1;i<=parseInt(res.data.Round1.Assignment)+parseInt(res.data.Round2.Assignment); i++) {
      if(i<=parseInt(res.data.Round1.Assignment)){
        assignments1.push(i);
      }
      else{
        assignments2.push(i);
      }
    }
    setQuiz1([...quiz1])
    setQuiz2([...quiz2])
    setAssignments1([...assignments1])
    setAssignments2([...assignments2])

  };
  const[Title,setTitle]=useState("")
  const quiztitle=(num)=>{
    var t = "Quiz "+num
    setTitle(t)
  }
  const Assignmenttitle=(num)=>{
    var t = "Assignment "+num
    setTitle(t)
  }
  const Midtitle=()=>{
    var t = "Mid"
    setTitle(t)
  }
  const Sess1=()=>{
    var t = "Sessional 1"
    setTitle(t)
  }
  const Sess2=()=>{
    var t = "Sessional 2"
    setTitle(t)
  }
  const Final=()=>{
    var t = "Terminal"
    setTitle(t)
  }

  const [Question, setQuestion] = useState("");
  const [Awardlist, setAwardlist] = useState("");
  const [Best, setBest] = useState("");
  const [Average, setAverage] = useState("");
  const [Worst, setWorst] = useState("");
  const [Solution, setSolution] = useState("");
  const [Question1, setQuestion1] = useState("");
  const [Awardlist1, setAwardlist1] = useState("");
  const [Best1, setBest1] = useState("");
  const [Average1, setAverage1] = useState("");
  const [Worst1, setWorst1] = useState("");
  const [Solution1, setSolution1] = useState("");

  const [fileBase64String, setFileBase64String] = useState("");
  console.log("fileBase64String",fileBase64String)
  const encodeFileBase64 = (file,ty) => {
    var reader = new FileReader();
    console.log("\nfile",file)
    console.log("\nty",ty)

      reader.readAsDataURL(file);
      reader.onload = () => {
        var Base64 = reader.result;
        console.log("Base64",Base64);
        if(ty=="Question"){
          //setQuestion1([file.name]);
          setQuestion(Base64)}
        else if(ty=="Awardlist"){
         // setAwardlist1([file.name]);
          setAwardlist(Base64)}
        else if(ty=="Best"){
          setBest1(file)
          setBest(Base64)}
        else if(ty=="Average"){
          setAverage1(file);
          setAverage(Base64)}
        else if(ty=="Worst"){
          setWorst1(file);
          setWorst(Base64)}
        else if(ty=="Solution"){
          setSolution1({name:file.name});
          setSolution(Base64)}
        setFileBase64String(Base64);
      };
      var a =base64toData()
      const url = URL.createObjectURL(a);
      console.log("\nurl",url)
      const pdf =url.substring(url.indexOf(":") + 1)
      setDecoded(pdf)

      reader.onerror = (error) => {
        console.log("error: ", error);
    }
  };
  const [Decoded, setDecoded] = useState("");
console.log("\nDecoded",Decoded)

  const base64toData = () => {
    const base64WithoutPrefix = fileBase64String.substring(fileBase64String.indexOf(",") + 1)
    const bytes = atob(base64WithoutPrefix)
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
        out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: 'application/pdf' });
    // return(ecodeURIComponent(bytes.split("")
    // .map((c)=> {
    //   return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    // })
    // .join("")
    // ))
  };
  return (
    <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>
      <h1 style={{ marginBottom: 30 }}>Course Folder Maintainence</h1>

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload ICEF</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload OBE</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Best</b>
              </label>
              <input type="file" class="form-control"  id="customFile" onChange={(e)=>{encodeFileBase64(e.target.files[0],"Best")}} />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Average</b>
              </label>
              <input type="file" class="form-control" id="customFile" onChange={(e)=>{encodeFileBase64(e.target.files[0],"Average")}}/>
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Worst</b>
              </label>
              <input type="file" class="form-control" id="customFile" onChange={(e)=>{encodeFileBase64(e.target.files[0],"Worst")}}/>
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Question Paper</b>
              </label>
              <input type="file" class="form-control" id="customFile" onChange={(e)=>{encodeFileBase64(e.target.files[0],"Question")}} />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Solution</b>
              </label>
              <input type="file" class="form-control" id="customFile" onChange={(e)=>{encodeFileBase64(e.target.files[0],"Solution")}}/>
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Award List</b>
              </label>
              <input type="file" class="form-control" id="customFile" onChange={(e)=>{encodeFileBase64(e.target.files[0],"Awardlist")}}/>
            </div>

            <div class="d-grid">
              <a class="btn btn-primary btn-block" href="login.html">
                SUBMIT
              </a>
            </div>
          </form>
        </Box>
      </Modal>

      <table class=" table  tablecourse">
        <tbody>
          <div className="row">
            <div className="col">
              <tr
                className="card p-4 m-2"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <th className="py-2">
                  <h2>Round 1</h2>
                  <h4
                    style={{ color: "red", textAlign: "center", marginTop: 20 }}
                  >
                    Deadline: 07/13/2022 04:38 PM
                  </h4>
                </th>
                {Quiz1.map((i)=>{return(
                    <td className="d-grid py-2 px-2">
                    <button
                      class="btn btn-block py-2 btn-primary"
                      id="quiz1"
                      type="button"
                      onClick={()=>{
                        quiztitle(i)
                        handleOpen()}}
                    >
                      Quiz {i}
                    </button>                
                    </td>)
                    })
                  }
                    
                  
                {Assignments1.map((i)=>{return(
                     <td className="d-grid py-2 px-2">
                     <button
                       class="btn btn-block py-2 btn-primary"
                       id="assignmet1"
                       type="button"
                       onClick={()=>{
                        Assignmenttitle(i)
                        handleOpen()}}
                     >
                       Assignment {i}
                     </button>
                   </td>)
                    })
                  }
            {folders!=""&&folders.Round1.MidorSessioanls=="Mid"?(
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="Mid"
                    type="button"
                    onClick={()=>{
                      Midtitle()
                      handleOpen()}}
                  >
                    Midterm Exam
                  </button>
                </td>):(<>
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="Sessional1"
                    type="button"
                    onClick={()=>{
                      Sess1()
                      handleOpen()}}
                  >
                    Sessional 1
                  </button>
                </td>
                <td className="d-grid py-2 px-2">
                <button
                  class="btn btn-block py-2 btn-primary"
                  id="Sessional2"
                  type="button"
                  onClick={()=>{
                    Sess2()
                    handleOpen()}}
                >
                  Sessional 2
                </button>
              </td>
              </>)}
                <td className="d-grid py-4 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="quiz1"
                    type="button"
                    // onClick={handleOpen}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </div>
            <div className="col">
              <tr
                className="card m-2 p-4"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <th className="py-2">
                  <h2>Round 2</h2>
                  <h4
                    style={{ color: "red", textAlign: "center", marginTop: 20 }}
                  >
                    Deadline: 07/13/2022 04:38 PM
                  </h4>
                </th>
                {Quiz2.map((i)=>{return(
                    <td className="d-grid py-2 px-2">
                    <button
                      class="btn btn-block py-2 btn-primary"
                      id="quiz2"
                      type="button"
                      onClick={()=>{
                        quiztitle(i)
                        handleOpen()}}
                    >
                      Quiz {i}
                    </button>                
                    </td>)
                    })
                  }
                    
                  
                {Assignments2.map((i)=>{return(
                     <td className="d-grid py-2 px-2">
                     <button
                       class="btn btn-block py-2 btn-primary"
                       id="assignmet2"
                       type="button"
                       onClick={()=>{
                        Assignmenttitle(i)
                        handleOpen()}}
                     >
                       Assignment {i}
                     </button>
                   </td>)
                    })
                  }

                <td className="d-grid py-2 px-2">
                  <button
                    class="btn py-2  btn-block btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={()=>{
                      Final()
                      handleOpen()}}
                  >
                    Terminal Exam
                  </button>
                </td>
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn py-2  btn-block btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={handleOpen1}
                  >
                    ICEF
                  </button>
                </td>
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn py-2  btn-block btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={handleOpen2}
                  >
                    OBE
                  </button>
                </td>
                <td className="d-grid py-4 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="quiz1"
                    type="button"
                    // onClick={handleOpen}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </div>
          </div>
        </tbody>
      </table>
 {Decoded!=""?(  
 <>
 <div
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '750px',
    }}
>    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
    <Viewer  fileUrl={Decoded} />
    </Worker>
</div>
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							Height="1056px"
							src={Decoded}
						/>
					</Card>				
    </>
    ):(<>NO</>)}</div>
  );
}
