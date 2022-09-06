import React, { useState,useEffect } from "react";
import "../css/styles.css";
import Button from "@mui/material/Button";
import Popup from "../AuxillaryComponents/PopupFunction";
import { Box, Card, Modal } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate,useParams } from "react-router-dom";

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

export default function LabFolder() {
  axios.defaults.withCredentials = true;
  const { id } = useParams()

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
    getLab()
  },[])
 
  const[Assignments1,setAssignments1]=useState([])
  const[Assignments2,setAssignments2]=useState([])
  
  const getLab = async () => {
    const res = await axios.get(
      "http://localhost:4000/Content/showLab"
    );
    setfolders(res.data);  
    var assignments1= [];
    var assignments2= [];  
    for (var i=1;i<=parseInt(res.data.Round1.Assignment)+parseInt(res.data.Round2.Assignment); i++) {
      if(i<=parseInt(res.data.Round1.Assignment)){
        assignments1.push(i);
      }
      else{
        assignments2.push(i);
      }
    }
    setAssignments1([...assignments1])
    setAssignments2([...assignments2])
  };
  
  const[Title,setTitle]=useState("")
  
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
  const [ICEF, setICEF] = useState("");
  const [Obe, setObe] = useState("");
  
  const [fileBase64String, setFileBase64String] = useState("");
  console.log("fileBase64String",fileBase64String)
  
  const encodeFileBase64 = (file,ty) => {
    var reader = new FileReader();
    console.log("\nfile",file)
    console.log("\nty",ty)

      reader.readAsDataURL(file);
      reader.onload = () => {
        var Base64 = reader.result;
        if(ty=="Question"){
          setQuestion1(file.name);
          setQuestion(Base64)}
        else if(ty=="Awardlist"){
         setAwardlist1(file.name);
          setAwardlist(Base64)}
        else if(ty=="Best"){
          setBest1(file.name)
          setBest(Base64)}
        else if(ty=="Average"){
          setAverage1(file.name);
          setAverage(Base64)}
        else if(ty=="Worst"){
          setWorst1(file.name);
          setWorst(Base64)}
        else if(ty=="Solution"){
          setSolution1(file.name);
          setSolution(Base64)}
        else if(ty=="ICEF"){
          setICEF(Base64)}
        else if(ty=="Obe"){
          setObe(Base64)}
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
    // const base64WithoutPrefix = fileBase64String.substr('data:application/pdf;base64,'.length);

    const bytes = atob(base64WithoutPrefix)
    console.log("atob",bytes)
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
  useEffect(() => {
    getFolderData();
  }, []);
  const [Folder,setFolder]=useState({files:[],ICEF:null,Obe:null})
  
  const getFolderData = async () => {
    const res = await axios.get(
      `http://localhost:4000/Folders/showOne/${id}`
    );
    console.log(res.data);
    setFolder(res.data);
  };

  const SubmitICEF = async(e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:4000/Folders/addICEF/${id}`, {
      ICEF:ICEF
      })
      getFolderData()
      handleClose1()
  }
  const SubmitObe = async(e) => {
    e.preventDefault();
    const res = await axios.put(`http://localhost:4000/Folders/addObe/${id}`, {
      Obe:Obe
      })
      getFolderData()
      handleClose2()
      }
  const Submit1 = async(e) => {
    e.preventDefault();
    if(Question1!=""&&Question!=""&&Awardlist1!=""&&Awardlist!=""
    &&Best1!=""&&Best!=""&&Average1!=""&&Average!=""
    &&Worst1!=""&&Worst!=""&&Solution1!=""&&Solution!=""){
      
      console.log("Title",Title)
      console.log("Question1,Question",Question1,Question)
      console.log("Awardlist1,Awardlist",Awardlist1,Awardlist)
      console.log("Best1,Best",Best1,Best)
      console.log("Average1,Average",Average1,Average)
      console.log("Worst1,Worst",Worst1,Worst)
      console.log("Solution1,Solution",Solution1,Solution)
      const res = await axios.put(`http://localhost:4000/Folders/add/${id}`, {
        Title,
        Question:{
          Name:Question1,
          Base64:Question
        },
        Best:{
          Name:Best1,
          Base64:Best1
        },
        Average:{
          Name:Average1,
          Base64:Average
        },
        Worst:{
          Name:Worst1,
          Base64:Worst
        },
        Solution:{
          Name:Solution1,
          Base64:Solution
        },
        Awardlist:{
          Name:Awardlist1,
          Base64:Awardlist
        },
      });
      getFolderData()
      handleClose()
    }
    else{
      alert("upload all required files")
    }
  }
  const SubmitR1  = async() => {
    var Round1 = true
    Quiz1.forEach((i)=>{
       var res = Folder.files.find(obj => {
        var t = "Quiz "+i
        obj.Title == t 
       })
       if(res==undefined){
          Round1=false
        }
      })
      Assignments1.forEach((i)=>{
        var res = Folder.files.find(obj => {
         var t = "Assignment "+i
         obj.Title == t 
        })
        if(res==undefined){
           Round1=false
         }
       }) 
       if(folders.Round1.MidorSessioanls=="Mid"){
         var res = Folder.files.find(obj => {
          var t = "Mid"
          obj.Title == t 
         })
         if(res==undefined){
            Round1=false
          }}
        else if(folders.Round1.MidorSessioanls=="Sessional"){
        var res = Folder.files.find(obj => {
          var t = "Sessional 1"
          obj.Title == t 
         })
         if(res==undefined){
            Round1=false
          }        
          var res2 = Folder.files.find(obj => {
            var t = "Sessional 2"
            obj.Title == t 
           })
           if(res2==undefined){
              Round1=false
            }
        }
      if(Round1){
        console.log("Round1",{Round1:true})    
        const res = await axios.put(`http://localhost:4000/Folders/SubmitaRound/${id}`, {
          Round:"Round1"    
        })
        getFolderData()
      }
      else{
        alert("Enter all required documents for Round 1")
      }
    }

  
  const SubmitR2  = async() => {

    var Round2 = true
    Quiz2.forEach((i)=>{
       var res = Folder.files.find(obj => {
        var t = "Quiz "+i
        obj.Title == t 
       })
       if(res==undefined){
        Round2=false
        }
      })
      Assignments2.forEach((i)=>{
        var res = Folder.files.find(obj => {
         var t = "Assignment "+i
         obj.Title == t 
        })
        if(res==undefined){
          Round2=false
         }
       }) 
        var res = Folder.files.find(obj => {
          var t = "Terminal"
          obj.Title == t 
         })
         if(res==undefined){
            Round2=false}
      if(Folder.ICEF==""){
        Round2=false}
      if(Folder.Obe==""){
        Round2=false}
            
      if(Round2){
        console.log("Round2",{Round2:true})
        const res = await axios.put(`http://localhost:4000/Folders/SubmitaRound/${id}`, {
          Round:"Round2"    
        })
        getFolderData()
      }
      else{
        alert("Enter all required documents for Round 2")
      }
  
    }




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
          <form onSubmit={SubmitICEF}>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload ICEF</b>
              </label>
              <input type="file" class="form-control" id="customFile" onChange={(e)=>{encodeFileBase64(e.target.files[0],"ICEF")}}/>
            </div>
            <div class="d-grid">
            <button
              class="btn btn-block py-2 btn-primary"
              id="quiz1"
              type="submit"              
              >
                  Submit
                </button>
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
          <form onSubmit={SubmitObe}>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload OBE</b>
              </label>
              <input type="file" class="form-control" id="customFile" onChange={(e)=>{encodeFileBase64(e.target.files[0],"Obe")}}/>
            </div>
            <div class="d-grid">
            <button
              class="btn btn-block py-2 btn-primary"
              id="quiz1"
              type="submit"              
              >
                  Submit
                </button>
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
          <form onSubmit={Submit1}>
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
            <button
              class="btn btn-block py-2 btn-primary"
              id="quiz1"
              type="submit"              
              >
                  Submit
                </button>
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
                      {
                      Folder.files.find(obj => {
                      var t = "Assignment "+i
                      return obj.Title == t 
                      })?(<> Assignment {i} (Submited)</>):
                      (<> Assignment {i}</>)}
                       
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
                  >{Folder.files.find(obj => {
                    var t = "Mid"
                    return obj.Title == t 
                   })?(<> Midterm Exam (Submited)</>):
                    (<> Midterm Exam</>)}
            
                    
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
                    {Folder.files.find(obj => {
                    var t = "Sessional 1"
                    return obj.Title == t 
                   })?(<> Sessional 1 (Submited)</>):
                    (<> Sessional 1 </>)}
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
                  {Folder.files.find(obj => {
                    var t = "Sessional 1"
                    return obj.Title == t 
                   })?(<> Sessional 2 (Submited)</>):
                    (<> Sessional 2</>)}
            
                </button>
              </td>
              </>)}
                <td className="d-grid py-4 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    type="button"
                    onClick={SubmitR1}
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
                       {
                      Folder.files.find(obj => {
                      var t = "Assignment "+i
                      return obj.Title == t 
                      })?(<> Assignment {i} (Submited)</>):
                      (<> Assignment {i}</>)}

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
                  {Folder.files.find(obj => {
                    var t = "Terminal"
                    return obj.Title == t 
                    })?(<> Terminal Exam (Submited)</>):
                    (<> Terminal Exam </>)}
                    
                  </button>
                </td>
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn py-2  btn-block btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={handleOpen1}
                  > {Folder.ICEF==null?(<>ICEF</>):(<>ICEF (Submited)</>)}
                  </button>
                </td>
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn py-2  btn-block btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={handleOpen2}
                  >
                   {Folder.Obe==null?(<>OBE</>):(<>OBE (Submited)</>)}
                    
                  </button>
                </td>
                <td className="d-grid py-4 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={SubmitR2}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </div>
          </div>
        </tbody>
      </table>
    </div>
  );
}