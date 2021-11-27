import '../app.css';

function Skills() {
  return (
<div>
  <hr className="m-0" />
  {/* Skills*/}
  <section className="resume-section" id="skills">
    <div className="resume-section-content">
      <h2 className="mb-5">Skills</h2>
      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item"><i className="fab fa-html5" title="HTML 5" /></li>
        <li className="list-inline-item"><i className="fab fa-css3-alt" title="CSS 3" /></li>
        <li className="list-inline-item"><i className="fab fa-js-square" title="Javascript"/></li>
        {/*                        <li class="list-inline-item"><i class="fab fa-angular"></i></li>*/}
        <li className="list-inline-item"><i className="fab fa-react" title="React JS"/></li>
        <li className="list-inline-item"><i className="fab fa-node-js"title="Node JS" /></li>
        {/*
                  <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                  <li class="list-inline-item"><i class="fab fa-less"></i></li>
*/}
        <li className="list-inline-item"><i className="fab fa-wordpress"title="WordPress" /></li>
        {/*
                  <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                  <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
*/}
        <li className="list-inline-item"><i className="fab fa-npm" title="Node Package Manager"/></li>
        <li className="list-inline-item"><i className="fab fa-bootstrap"title="Bootstrap" /></li>
        <br />
        <li className="list-inline-item"><i className="fab fa-gitlab"title="Github & Gitlab" /></li>
        <li className="list-inline-item"><i className="fab fa-slack" title="Slack"/></li>
        <li className="list-inline-item"><i className="fab fa-trello"title="Trello" /></li>
        <li className="list-inline-item"><i className="fab fa-sketch"title="Sketch" /></li>
        <li className="list-inline-item"><i className="fab fa-linux"title="Linux Distributions" /></li>
        <li className="list-inline-item"><i className="fab fa-windows"title="Windows" /></li>
        <li className="list-inline-item"><i className="fab fa-apple" title="Mac OS"/></li>
      </ul>
      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>&nbsp;
          Mobile-First, Responsive Design
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>&nbsp;
          Google Analytics &amp; SEO Optimization
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>&nbsp;
          Bootstrap &amp; Custom CSS Front-End Development
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-check" /></span>&nbsp;
          Agile Web Development Method
        </li>
      </ul>
    </div>
  </section>
</div>
  );
}

export default Skills;
