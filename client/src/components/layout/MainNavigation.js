import { Button, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { reset } from "../../store/curriculum.js";
import { resetGrades } from "../../store/grades.js";

const MainNavigation = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resetStore = () => {
    dispatch(resetGrades());
    dispatch(reset());
    navigate(`/`);
  };

  return (
    <>
      <AppBar
        position='static'
        sx={{
          display: "flex",
          justifyContent: "space-between",
          direction: "rtl",
        }}
      >
        <Toolbar>
          <Typography variant='h6' component='div'>
            בדיקת מצב אקדמי
          </Typography>
          <Button
            onClick={() => {
              navigate(`/curriculum`);
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            תוכנית לימודים
          </Button>
          <Button
            onClick={() => {
              navigate(`/grades`);
            }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            מצב אקדמי
          </Button>
          <Button
            onClick={() => {
              resetStore();
            }}
            sx={{ my: 2, color: "white", display: "block", mr: "75%" }}
          >
            יציאה מהמערכת
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainNavigation;
