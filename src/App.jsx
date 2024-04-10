import { Container, Presentation, Content } from "./styles"
import image from "../src/assets/icons8_github48.svg"
import image2 from "../src/assets/mobdevlinks.png"
import image3 from "../src/assets/desktopdevlink.png"
import image4 from "../src/assets/focustimermobile.png"
import image5 from "../src/assets/focustimerdesk.png"
import image6 from "../src/assets/rocketnotes1.png"
import image7 from "../src/assets/rocketnotes2.png"
import image8 from "../src/assets/agecalctablet.png"
import image9 from "../src/assets/agecalcdesk.png"
import image10 from "../src/assets/piano.png"


function App() {
  return (
    <Container>

      <Presentation>
        <div className="texts">
            <p>Hi there! My name is Ezequiel Rabello.</p>
            <h1>Frontend</h1>
            <h1>Developer</h1>
            <p>I am 26 years old with 2 years of experience in <br />Frontend development, working as a freelancer. </p>
        </div>

        <a href="https://github.com/ezequielrabello" target="#">
            <img src={image} alt="Github icon"/>
        </a>
      </Presentation>

      <Content>
        <div className="bc">

            <div className="details">
                <h1>DevLinks</h1>
                <h2>Technologies</h2>
                <p>This project was developed using the following technologies:</p>
                <li><strong>HTML</strong></li>
                <li><strong>CSS</strong></li>
                <li><strong>JAVASCRIPT</strong></li>
                <h2>About the project:</h2>
                <p>This is an application for people who want to share their social media, profile pages, or any other links. 
                  It was also developed with a toggle mode button, which can be switched between light mode and dark mode. </p>
                  
                  <button>
                    <a href="https://ezequielrabello.github.io/discover/" target="#">
                      Click here to <br />check it out!
                    </a>
                  </button>
            </div>

            <div className="images">

              <div className="imgtwo">
                <img src={image2} alt="" />
              </div>

              <div className="imgone">
                <img src={image3} alt="" />
              </div>

            </div>


        </div>
      </Content>

      <Content>
        <div className="bc">

            <div className="details">
                <h1>FocusTimer</h1>
                <h2>Technologies</h2>
                <p>This project was developed using the following technologies:</p>
                <li><strong>HTML</strong></li>
                <li><strong>CSS</strong></li>
                <li><strong>JAVASCRIPT</strong></li>
                <h2>About the project:</h2>
                <p>This application was created thinking about the people who
                  need concentration while studying. <br />
                  The timer allows you to set how long it is going to countdown, adding or removing five minutes
                  by clicking the plus or minus button. <br />
                  Not only that, but you can also set the kind of environment and climate that 
                  you want to be in, such as:
                </p>
                <div className="icons">
                  <li><img src="./src/assets/tree.svg" alt="tree" />Nature</li>
                  <li><img src="./src/assets/cloudrain.svg" alt="rain" />Rain</li>
                  <li><img src="./src/assets/fire.svg" alt="fire" />Fireplace</li>
                  <li><img src="./src/assets/storefront.svg" alt="store" />Cafeteria</li>
                  
                  
                </div>
                  
                <button>
                    <a href="https://ezequielrabello.github.io/focustimer2.0/" target="#">
                      Click here to <br />check it out!
                    </a>
                </button>
            </div>

            <div className="images">

              <div className="img6">
                <img src={image4} alt="" />
              </div>
              <div className="img5">
                <img src={image5} alt="" />
              </div>

              

            </div>


        </div>
      </Content>

      <Content>
        <div className="bc">

            <div className="details">
                <h1>Rocket Notes</h1>
                <h2>Technologies</h2>
                <p>This project was developed using the following technologies:</p>
                <li><strong>REACT</strong></li>
                <li><strong>HTML</strong></li>
                <li><strong>CSS</strong></li>
                <li><strong>JAVASCRIPT</strong></li>
                <h2>About the project:</h2>
                <p>This is an application for those who would like to take important notes about any subject they might 
                  think is necessary to remember. <br />Tags can be added onto each one of the notes, so that it gets even easier 
                  to find that important information. <br /> The application includes a Sign Up/Sign In page, as well as 
                  a profile page, which makes it possible to alter your login information and profile picture.
                </p>
                  
                  
            </div>

            <div className="images">

              <div className="img3">
                <img src={image6} alt="" />
              </div>

              <div className="img4">
                <img src={image7} alt="" />
              </div>

            </div>


        </div>
      </Content>

      <Content>
        <div className="bc">

            <div className="details">
                <h1>Age Calculator</h1>
                <h2>Technologies</h2>
                <p>This project was developed using the following technologies:</p>
                <li><strong>HTML</strong></li>
                <li><strong>CSS</strong></li>
                <li><strong>JAVASCRIPT</strong></li>
                <h2>About the project:</h2>
                <p>Sometimes we all forget exactly how old we are, isn't that right?<br /> This application is an 
                  age calculator that will inform your age, not only in years, but months and days too. <br />
                  It was coded thinking of all types of dates. Try inserting February 30th, for example, and check it yourself
                  if it works or not!
                </p>
                  
                  <button>
                    <a href="https://ezequielrabello.github.io/agecalculator/" target="#">
                      Click here to <br />check it out!
                    </a>
                  </button>
            </div>

            <div className="images">

              <div className="imgtwo">
                <img src={image8} alt="" />
              </div>

              <div className="imgone">
                <img src={image9} alt="" />
              </div>

            </div>


        </div>
      </Content>

      <Content>
        <div className="bc">

            <div className="details">
                <h1>My Piano</h1>
                <h2>Technologies</h2>
                <p>This project was developed using the following technologies:</p>
                <li><strong>HTML</strong></li>
                <li><strong>CSS</strong></li>
                <li><strong>JAVASCRIPT</strong></li>
                <h2>About the project:</h2>
                <p>In this project, I created a Piano and it was inspired by Manual do Dev channel on Youtube! <br />
                If you are a musician like me, this is a project that you can't miss out on! <br />
                I am sure that, with the skills you learn by working on this project, you will be able to reach way more complex solutions for applications like this one! <br />
                Something interesting about this piano is the possibility to choose between showing the keys or not by clicking on the switch button.
                </p>
                  
                  <button>
                    <a href="https://ezequielrabello.github.io/mypiano/" target="#">
                      Click here to <br />check it out!
                    </a>
                  </button>
            </div>

            <div className="images">

              <div className="img3">
                <img src={image10} alt="Piano" />
              </div>

              

            </div>


        </div>
      </Content>


    </Container>
    
  )
}

export default App
