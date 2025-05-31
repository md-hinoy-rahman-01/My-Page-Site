import "./Welcome.css";

function Welcome() {
  return (
    <>
    <div className="main-container">
      <div className="side-panel">
        <div className="profile-container">
          <img className="profile-picture" src="/images/profile_picture.jpg" alt="Md Hinoy Rahman" />
          <h2>Md Hinoy Rahman</h2>
          <br/>
          <p>Phone: +353 830290037</p>
          <p>Email: mostafizurrahmanhinoy@gmail.com</p>
          <a href="mailto:mostafizurrahmanhinoy@gmail.com?subject=Greetings&body=I would like to connect!">
            Connect through Email
          </a>
          
          <a href="https://www.linkedin.com/in/mdhinoyrahman/">Connect through LinkedIn </a>
          <br/>
          <p>Current Role: MSc in Computing (Data Analytics), <a href="https://www.dcu.ie">Dublin City University </a></p>

          <br/>
          <p>Location: Swords, Dublin, Ireland</p>
        </div>

      </div>
      
      <div className="main-body">
          <h1>About Me</h1>
          <p>
            I am a passionate and dedicated MSc in Computing (Data Analytics) student at Dublin City University, with a strong foundation in data analysis, machine learning, and software development. My academic journey has equipped me with the skills to extract insights from complex datasets and develop innovative solutions to real-world problems.
          </p>
        </div>
    </div>
    </>
  );
}   

export default Welcome;