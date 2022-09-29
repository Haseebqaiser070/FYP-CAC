import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Folder Evaluation
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />

        <div
          className="container-fluid"
          style={{
            height: 700,
            width: "100%",

            overflow: "hidden",
          }}
        >
          <div style={{ padding: 30, overflowY: "scroll", maxHeight: "80vh" }}>
            <div>
              <h1
                className="mb-4 pb-4"
                style={{
                  padding: 10,
                  backgroundColor: "#4b2980",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Lecture Delivery Record
              </h1>
              {Folder.LectureDeliveryRecord == null ? (
                <p>No Lecture Delivery Record</p>
              ) : (
                <div style={{ marginTop: 50 }}>
                  <Card sx={{ maxWidth: "100%", marginTop: 0 }}>
                    <h2
                      className="my-4 py-4"
                      style={{ textTransform: "uppercase" }}
                    >
                      LectureDeliveryRecord
                    </h2>
                    <CardMedia
                      className="cardmedia"
                      component="iframe"
                      Height="1056px"
                      src={Folder.LectureDeliveryRecord.Base64.pdf}
                    />
                  </Card>
                </div>
              )}
            </div>
            {Folder.files.length > 0 &&
              Folder.files.map((i) => {
                var ind;

                if (i.Title.includes("Quiz") && cdf != null) {
                  cdf.CLOs.map((val) => {
                    console.log("sdggfsgajgsdk", val);
                    val.Quizzes.find((item, index) => {
                      if (item.title == i.Title) {
                        ind = val;
                        clo = val;
                        btl = ind.BTL[0].BTL;
                        title = i.Title;
                        console.log("hello", ind);
                      }
                    });
                  });
                  return (
                    <div>
                      <div style={{ marginTop: 50 }}>
                        <h1
                          className="mb-4 pb-4"
                          style={{
                            padding: 10,
                            backgroundColor: "#4b2980",
                            color: "#fff",
                            textTransform: "uppercase",
                          }}
                        >
                          {i.Title}
                        </h1>
                        <Card sx={{ maxWidth: "100%", marginTop: 0 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Question Paper
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Question.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Solution
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Solution.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Best)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Best.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Average)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Average.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Worst)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Worst.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Award List
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Awardlist.Base64.pdf}
                          />
                        </Card>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            marginTop: 35,
                            marginBottom: 35,
                            padding: 35,
                            paddingBottom: 35,
                          }}
                        >
                          <h2 className="my-4 py-4">{i.Title} Evalution</h2>
                          <div className="row ">
                            <div className="col">
                              <TextField
                                className="mb-4"
                                label="CLO NO iN CDF"
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={clo.sr}
                                defaultValue={(e) => {
                                  setquiz((existingValues) => ({
                                    ...existingValues,
                                    clo_no: clo.sr,
                                  }));
                                }}
                                onChange={(e) => {
                                  setquiz((existingValues) => ({
                                    ...existingValues,
                                    clo_no: clo.sr,
                                    title: i.Title,
                                  }));
                                }}
                              />
                            </div>
                            <div className="col mb-4 pl-4 ml-4">
                              <FormControl>
                                <FormLabel>
                                  Is it have correct Mapping?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="yes"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setquiz((existingValues) => ({
                                      ...existingValues,
                                      clo_correct: e.target.value,
                                      title: i.Title,
                                    }));
                                  }}
                                >
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio size="small" />}
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio size="small" />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <TextField
                                className="mb-4"
                                label="BTL LEVEL iN CDF"
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={btl}
                                defaultValue={(e) => {
                                  setquiz((existingValues) => ({
                                    ...existingValues,
                                    btl_no: btl,
                                  }));
                                }}
                                onChange={(e) => {
                                  setquiz((existingValues) => ({
                                    ...existingValues,
                                    btl_no: btl,
                                  }));
                                }}
                              />
                            </div>
                            <div className="col mb-4">
                              <FormControl>
                                <FormLabel>
                                  Is it have correct BTL Level ?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="female"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setquiz((existingValues) => ({
                                      ...existingValues,
                                      btl_correct: e.target.value,
                                    }));
                                  }}
                                >
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio size="small" />}
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio size="small" />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div>
                            <TextField
                              multiline={true}
                              rows={2}
                              label="Other Comments:"
                              className="mb-4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={quiz.Comments}
                              onChange={(e) => {
                                setquiz((existingValues) => ({
                                  ...existingValues,
                                  Comments: e.target.value,
                                }));
                              }}
                            />
                            <TextField
                              multiline={true}
                              rows={3}
                              label="Feedback:"
                              className="mb-4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={quiz.Feedback}
                              onChange={(e) => {
                                setquiz((existingValues) => ({
                                  ...existingValues,
                                  Feedback: e.target.value,
                                }));
                              }}
                            />
                            <Button
                              style={{ float: "right" }}
                              variant="contained"
                              color="primary"
                              size="small"
                              type="submit"
                              onClick={() => addQuiz(i.Title)}
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

            {Folder.files.length > 0 &&
              Folder.files.map((i) => {
                var ind;
                if (i.Title.includes("Assignment") && cdf != null) {
                  cdf.CLOs.map((val) => {
                    console.log("sdggfsgajgsdk", val);
                    val.Assignment.find((item, index) => {
                      if (item.title == i.Title) {
                        ind = val;
                        cloa = val;
                        btla = ind.BTL[0].BTL;
                        titlea = i.Title;
                        console.log("hello", ind);
                      }
                    });
                  });
                  return (
                    <div>
                      <div style={{ marginTop: 50 }}>
                        <h1
                          className="mb-4 pb-4"
                          style={{
                            padding: 10,
                            backgroundColor: "#4b2980",
                            color: "#fff",
                            textTransform: "uppercase",
                          }}
                        >
                          {i.Title}
                        </h1>
                        <Card sx={{ maxWidth: "100%", marginTop: 0 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Question Paper
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Question.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Solution
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Solution.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Best)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Best.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Average)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Average.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Worst)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Worst.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Award List
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Awardlist.Base64.pdf}
                          />
                        </Card>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            marginTop: 35,
                            marginBottom: 35,
                            padding: 35,
                            paddingBottom: 35,
                          }}
                        >
                          <h2 className="my-4 py-4">{i.Title} Evalution</h2>
                          <div className="row ">
                            <div className="col">
                              <TextField
                                className="mb-4"
                                label="CLO NO iN CDF"
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={cloa.sr}
                                defaultValue={(e) => {
                                  setassignment((existingValues) => ({
                                    ...existingValues,
                                    clo_no: cloa.sr,
                                  }));
                                }}
                                onChange={(e) => {
                                  setassignment((existingValues) => ({
                                    ...existingValues,
                                    clo_no: cloa.sr,
                                    title: i.Title,
                                  }));
                                }}
                              />
                            </div>
                            <div className="col mb-4 pl-4 ml-4">
                              <FormControl>
                                <FormLabel>
                                  Is it have correct Mapping?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="female"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setassignment((existingValues) => ({
                                      ...existingValues,
                                      clo_correct: e.target.value,
                                      title: i.Title,
                                    }));
                                  }}
                                >
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio size="small" />}
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio size="small" />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <TextField
                                className="mb-4"
                                label="BTL LEVEL iN CDF"
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={btla}
                                defaultValue={(e) => {
                                  setassignment((existingValues) => ({
                                    ...existingValues,
                                    btl_no: btla,
                                  }));
                                }}
                                onChange={(e) => {
                                  setassignment((existingValues) => ({
                                    ...existingValues,
                                    btl_no: btla,
                                  }));
                                }}
                              />
                            </div>
                            <div className="col mb-4">
                              <FormControl>
                                <FormLabel>
                                  Is it have correct BTL Level ?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="female"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setassignment((existingValues) => ({
                                      ...existingValues,
                                      btl_correct: e.target.value,
                                    }));
                                  }}
                                >
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio size="small" />}
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio size="small" />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div>
                            <TextField
                              multiline={true}
                              rows={2}
                              label="Other Comments:"
                              className="mb-4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={assignment.Comments}
                              onChange={(e) => {
                                setassignment((existingValues) => ({
                                  ...existingValues,
                                  Comments: e.target.value,
                                }));
                              }}
                            />
                            <TextField
                              multiline={true}
                              rows={3}
                              label="Feedback:"
                              className="mb-4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={assignment.Feedback}
                              onChange={(e) => {
                                setassignment((existingValues) => ({
                                  ...existingValues,
                                  Feedback: e.target.value,
                                }));
                              }}
                            />
                            <Button
                              style={{ float: "right" }}
                              variant="contained"
                              color="primary"
                              size="small"
                              type="submit"
                              onClick={() => addAssignment(i.Title)}
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

            {Folder.files.length > 0 &&
              Folder.files.map((i) => {
                var ind;
                if (i.Title.includes("Terminal") && cdf != null) {
                  cdf.CLOs.map((val) => {
                    if (val.Final.includes("Final") && cdf != null) {
                      ind = val;
                      clof = val;
                      btlf = ind.BTL[0].BTL;
                      titlef = i.Title;
                    }
                  });
                  return (
                    <div>
                      <div style={{ marginTop: 50 }}>
                        <h1
                          className="mb-4 pb-4"
                          style={{
                            padding: 10,
                            backgroundColor: "#4b2980",
                            color: "#fff",
                            textTransform: "uppercase",
                          }}
                        >
                          {i.Title}
                        </h1>
                        <Card sx={{ maxWidth: "100%", marginTop: 0 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Question Paper
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Question.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Solution
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Solution.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Best)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Best.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Average)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Average.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Worst)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Worst.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Award List
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Awardlist.Base64.pdf}
                          />
                        </Card>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            marginTop: 35,
                            marginBottom: 35,
                            padding: 35,
                            paddingBottom: 35,
                          }}
                        >
                          <h2 className="my-4 py-4">{i.Title} Evalution</h2>
                          <div className="row ">
                            <div className="col">
                              <TextField
                                className="mb-4"
                                label="CLO NO iN CDF"
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={clof.sr}
                                defaultValue={(e) => {
                                  setfinal((existingValues) => ({
                                    ...existingValues,
                                    clo_no: clof.sr,
                                  }));
                                }}
                                onChange={(e) => {
                                  setfinal((existingValues) => ({
                                    ...existingValues,
                                    clo_no: clof.sr,
                                    title: i.Title,
                                  }));
                                }}
                              />
                            </div>
                            <div className="col mb-4 pl-4 ml-4">
                              <FormControl>
                                <FormLabel>
                                  Is it have correct Mapping?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="female"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setfinal((existingValues) => ({
                                      ...existingValues,
                                      clo_correct: e.target.value,
                                      title: i.Title,
                                    }));
                                  }}
                                >
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio size="small" />}
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio size="small" />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <TextField
                                className="mb-4"
                                label="BTL LEVEL iN CDF"
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={btlf}
                                defaultValue={(e) => {
                                  setfinal((existingValues) => ({
                                    ...existingValues,
                                    btl_no: btlf,
                                  }));
                                }}
                                onChange={(e) => {
                                  setfinal((existingValues) => ({
                                    ...existingValues,
                                    btl_no: btlf,
                                  }));
                                }}
                              />
                            </div>
                            <div className="col mb-4">
                              <FormControl>
                                <FormLabel>
                                  Is it have correct BTL Level ?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="female"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setfinal((existingValues) => ({
                                      ...existingValues,
                                      btl_correct: e.target.value,
                                    }));
                                  }}
                                >
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio size="small" />}
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio size="small" />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div>
                            <TextField
                              multiline={true}
                              rows={2}
                              label="Other Comments:"
                              className="mb-4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={final.Comments}
                              onChange={(e) => {
                                setfinal((existingValues) => ({
                                  ...existingValues,
                                  Comments: e.target.value,
                                }));
                              }}
                            />
                            <TextField
                              multiline={true}
                              rows={3}
                              label="Feedback:"
                              className="mb-4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={final.Feedback}
                              onChange={(e) => {
                                setfinal((existingValues) => ({
                                  ...existingValues,
                                  Feedback: e.target.value,
                                }));
                              }}
                            />
                            <Button
                              style={{ float: "right" }}
                              variant="contained"
                              color="primary"
                              size="small"
                              type="submit"
                              onClick={() => addfinal(i.Title)}
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            {Folder.files.length > 0 &&
              Folder.files.map((i) => {
                var ind;
                if (
                  i.Title.includes("Mid") ||
                  (i.Title.includes("Sessional") && cdf != null)
                ) {
                  cdf?.CLOs?.map((val) => {
                    if (
                      val.Mid.includes("Mid") ||
                      (val.Mid.includes("Sessional") && cdf != null)
                    ) {
                      ind = val;
                      clom = val.sr;
                      btlm = ind.BTL[0].BTL;
                      titlem = i.Title;
                    }
                  });
                  return (
                    <div>
                      <div style={{ marginTop: 50 }}>
                        <h1
                          className="mb-4 pb-4"
                          style={{
                            padding: 10,
                            backgroundColor: "#4b2980",
                            color: "#fff",
                            textTransform: "uppercase",
                          }}
                        >
                          {i.Title}
                        </h1>
                        <Card sx={{ maxWidth: "100%", marginTop: 0 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Question Paper
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Question.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Solution
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Solution.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Best)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Best.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Average)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Average.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} (Worst)
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Worst.Base64.pdf}
                          />
                        </Card>
                        <Card sx={{ maxWidth: "100%", marginTop: 20 }}>
                          <h2
                            className="my-4 py-4"
                            style={{ textTransform: "uppercase" }}
                          >
                            {i.Title} Award List
                          </h2>
                          <CardMedia
                            className="cardmedia"
                            component="iframe"
                            Height="1056px"
                            src={i.Awardlist.Base64.pdf}
                          />
                        </Card>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            marginTop: 35,
                            marginBottom: 35,
                            padding: 35,
                            paddingBottom: 35,
                          }}
                        >
                          <h2 className="my-4 py-4">{i.Title} Evalution</h2>
                          <div className="row ">
                            <div className="col">
                              <TextField
                                className="mb-4"
                                label="CLO NO iN CDF"
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={clom}
                                defaultValue={(e) => {
                                  setmid((existingValues) => ({
                                    ...existingValues,
                                    clo_no: clom,
                                  }));
                                }}
                                onChange={(e) => {
                                  setmid((existingValues) => ({
                                    ...existingValues,
                                    clo_no: clom,
                                    title: i.Title,
                                  }));
                                }}
                              />
                            </div>
                            <div className="col mb-4 pl-4 ml-4">
                              <FormControl>
                                <FormLabel>
                                  Is it have correct Mapping?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="female"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setmid((existingValues) => ({
                                      ...existingValues,
                                      clo_correct: e.target.value,
                                      title: i.Title,
                                    }));
                                  }}
                                >
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio size="small" />}
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio size="small" />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <TextField
                                className="mb-4"
                                label="BTL LEVEL iN CDF"
                                variant="outlined"
                                size="small"
                                fullWidth
                                value={btlm}
                                defaultValue={(e) => {
                                  setmid((existingValues) => ({
                                    ...existingValues,
                                    btl_no: btlm,
                                  }));
                                }}
                                onChange={(e) => {
                                  setmid((existingValues) => ({
                                    ...existingValues,
                                    btl_no: btlm,
                                  }));
                                }}
                              />
                            </div>
                            <div className="col mb-4">
                              <FormControl>
                                <FormLabel>
                                  Is it have correct BTL Level ?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="female"
                                  name="radio-buttons-group"
                                  onChange={(e) => {
                                    setmid((existingValues) => ({
                                      ...existingValues,
                                      btl_correct: e.target.value,
                                    }));
                                  }}
                                >
                                  <FormControlLabel
                                    value={true}
                                    control={<Radio size="small" />}
                                    label="Yes"
                                  />
                                  <FormControlLabel
                                    value={false}
                                    control={<Radio size="small" />}
                                    label="No"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </div>
                          </div>
                          <div>
                            <TextField
                              multiline={true}
                              rows={2}
                              label="Other Comments:"
                              className="mb-4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={mid.Comments}
                              onChange={(e) => {
                                setmid((existingValues) => ({
                                  ...existingValues,
                                  Comments: e.target.value,
                                }));
                              }}
                            />
                            <TextField
                              multiline={true}
                              rows={3}
                              label="Feedback:"
                              className="mb-4"
                              variant="outlined"
                              size="small"
                              fullWidth
                              value={mid.Feedback}
                              onChange={(e) => {
                                setmid((existingValues) => ({
                                  ...existingValues,
                                  Feedback: e.target.value,
                                }));
                              }}
                            />
                            <Button
                              style={{ float: "right" }}
                              variant="contained"
                              color="primary"
                              size="small"
                              type="submit"
                              onClick={() => addmid(i.Title)}
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}

            <div>
              <h1
                className="mb-4 pb-4"
                style={{
                  padding: 10,
                  backgroundColor: "#4b2980",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Outcome Based Education
              </h1>
              {Folder.Obe == null ? (
                <p>no OBE</p>
              ) : (
                <Card sx={{ maxWidth: 824 }}>
                  <CardMedia
                    className="cardmedia"
                    component="iframe"
                    Height="1056px"
                    src={Folder.Obe.pdf}
                  />
                </Card>
              )}
              <div style={{ marginTop: 50 }}>
                <h3 className="mb-4 pb-4">ICEF</h3>
                {Folder.ICEF == null ? (
                  <p>No ICEF</p>
                ) : (
                  <Card sx={{ maxWidth: 824 }}>
                    <CardMedia
                      className="cardmedia"
                      component="iframe"
                      Height="1056px"
                      src={Folder.ICEF.pdf}
                    />
                  </Card>
                )}
                <p>{}</p>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  onClick={() => addEvaluationstatus()}
                >
                  Evaluate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}
