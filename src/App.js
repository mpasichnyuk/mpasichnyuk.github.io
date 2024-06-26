import { Home } from "@material-ui/icons";
import { Switch, Route } from "react-router";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/HomePage";
import Aboutpage from './pages/AboutPage';
import BlogPage from "./pages/BlogPage";
import ContactsPage from './pages/ContactsPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import {useState} from 'react';
import Contacts from './pages/Contacts'
import ScrollToTop from "./components/ScrollToTop";

function App() {

  const [navShow, setNavShow] = useState(false);

  

  return (
  <div className="App">
      <ScrollToTop>

    <Sidebar navShow={navShow}/>

    <div className="hamburger-menu">
      <IconButton onClick={ () => setNavShow(!navShow)}>
        {navShow ? <CancelIcon/>  : <MenuIcon/>}
      </IconButton>
    </div>

    <MainContentStyled className="main-content">
      {/* <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>   */}

        
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about" exact>
            <Aboutpage />
          </Route>
          <Route path="/resume" exact>
            <ResumePage/>
          </Route>
          <Route path="/portfolio" exact>
            <PortfolioPage/>
          </Route>
          <Route path="/blog" exact>
            <BlogPage/>
          </Route>
          <Route path="/contacts" exact>
            <Contacts/>
          </Route>
        </Switch>
    </MainContentStyled>
        </ScrollToTop>
  </div>
  );
}

const MainContentStyled = styled.div`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  /* background-color: black; */

  @media screen and (max-width: 1080px){
        margin-left: 0;
       
    }

  .lines{
    position: absolute;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
  

`;


export default App;
