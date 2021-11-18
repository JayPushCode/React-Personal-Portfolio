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
        <li className="list-inline-item"><i className="fab fa-html5" /></li>
        <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
        <li className="list-inline-item"><i className="fab fa-js-square" /></li>
        {/*                        <li class="list-inline-item"><i class="fab fa-angular"></i></li>*/}
        <li className="list-inline-item"><i className="fab fa-react" /></li>
        <li className="list-inline-item"><i className="fab fa-node-js" /></li>
        {/*
                  <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                  <li class="list-inline-item"><i class="fab fa-less"></i></li>
*/}
        <li className="list-inline-item"><i className="fab fa-wordpress" /></li>
        {/*
                  <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                  <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
*/}
        <li className="list-inline-item"><i className="fab fa-npm" /></li>
        <li className="list-inline-item"><i className="fab fa-bootstrap" /></li>
        <br />
        <li className="list-inline-item"><i className="fab fa-gitlab" /></li>
        <li className="list-inline-item"><i className="fab fa-slack" /></li>
        <li className="list-inline-item"><i className="fab fa-trello" /></li>
        <li className="list-inline-item"><i className="fab fa-sketch" /></li>
        <li className="list-inline-item"><i className="fab fa-linux" /></li>
        <li className="list-inline-item"><i className="fab fa-windows" /></li>
        <li className="list-inline-item"><i className="fab fa-apple" /></li>
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
