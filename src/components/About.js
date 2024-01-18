import '../app.css';

function About() {
  return (
    <div className="container-fluid p-0">
  {/* About*/}
  <section className="resume-section" id="about">
    <div className="resume-section-content">
      <h1 className="mb-0">
        Wongani F. &nbsp;
        <span className="text-primary">Jere</span>
      </h1>
      <div className="subheading mb-5">
        Content Creater · Producer · Web Developer ·
        <a href="mailto:name@email.com">jaypushcode@gmail.com</a>
      </div>
      <p className="lead mb-5">I am a Full Stack Developer with a background in Music Production, Photography, Filmmaking, and Event Planning. I hope to sharpen my skills within the browser to create websites and applications that can further the crafts of many like-minded artists in the industries I have been a part of. I want to turn as many concepts as possible into reality and push the scope of what's imaginable on the internet.</p>
      <div id='aboutMeSection'>
        <div className="social-icons">
        <a className="social-icon" href="http://www.linkedin.com/in/wonganifjere" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"title="LinkedIn" /></a>
        <a className="social-icon" href="http://www.github.com/jaypushcode" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"title="GitHub" /></a>
        <a className="social-icon" href="https://www.instagram.com/jaypushcode/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram" title="Instagram"/></a>
        <a className="social-icon" href="https://twitter.com/JayPushCode" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"title="Twitter" /></a>
      </div>
      <a href={process.env.PUBLIC_URL + '/2024_WFJ_Resume.pdf'} target='_blank' download="Resume_WFJ_2024.pdf">
      <button> Download My Resume</button>
      </a>
      </div>
      
    </div>
  </section>
  <hr className="m-0" />
</div>
  );
}

export default About;
