import '../app.css';

function Projects() {
  return (
<div>
  <hr className="m-0" />
  {/* Interests*/}
  <section className="resume-section" id="interests">
    <div className="resume-section-content">
      <h2 className="mb-5">Github Projects</h2>
      <section id="Portfolio-work">
        <a className="ProjectTemplate sample-img" id="Project1" href="https://github.com/JayPushCode/FEEDIT" target="_blank" rel="noopener noreferrer"> FEEDIT </a>
        <a className="ProjectTemplate sample-img2" href="https://jaypushcode.github.io/Code-Refactor/" target="_blank" rel="noopener noreferrer"> Code Refactoring </a>
        <a className="ProjectTemplate sample-img3" href="https://github.com/JayPushCode/PasswordGenerator" target="_blank" rel="noopener noreferrer"> Password Generator </a>
        <a className="ProjectTemplate sample-img4" href="https://github.com/JayPushCode/WorkDayScheduler" target="_blank" rel="noopener noreferrer"> Workday Scheduler </a>
        <a className="ProjectTemplate sample-img5" href="https://github.com/JayPushCode/JS-Code-Quiz" target="_blank" rel="noopener noreferrer"> Javascript Coding Quiz </a>
      </section>
    </div>
  </section>
</div>
  );
}

export default Projects;
