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
        Full-Stack Web Developer · Technical Instructor · Data / Integration Engineer ·
        <a href="mailto:name@email.com">jaypushcode@gmail.com</a>
      </div>
      <p className="lead mb-5">I'm a Full Stack Developer with a strong focus on crafting intuitive, expressive web experiences that bring ideas to life. With a few years of hands-on development and a background in teaching, I understand how to turn complex concepts into clean, usable interfaces. I’m passionate about building tools, platforms, and interactive content that not only work well but feel purposeful — helping teams and creatives push their work further on the web.</p>
      <div id='aboutMeSection'>
        <div className="social-icons">
        <a className="social-icon" href="http://www.linkedin.com/in/wonganifjere" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"title="LinkedIn" /></a>
        <a className="social-icon" href="http://www.github.com/jaypushcode" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"title="GitHub" /></a>
        <a className="social-icon" href="https://www.instagram.com/jaypushcode/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram" title="Instagram"/></a>
        <a className="social-icon" href="https://twitter.com/JayPushCode" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"title="Twitter" /></a>
      </div>
      <a href={process.env.PUBLIC_URL + '/_WFJ_2025Resume.pdf'} target='_blank' rel="noopener noreferrer" download="_WFJ_Resume2025.pdf" title='Download My Resume'>
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
