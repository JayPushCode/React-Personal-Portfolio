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
      {/* 
      Template For Skill Icons
      <li className="list-inline-item"><i className="" title="" /></li>
       */}
        <li className="list-inline-item"><i className="fab fa-html5" title="HTML 5" /></li>
        <li className="list-inline-item"><i className="fab fa-css3-alt" title="CSS 3" /></li>
        <li className="list-inline-item"><i className="fab fa-js-square" title="Javascript"/></li>
        {/*                        <li class="list-inline-item"><i class="fab fa-angular"></i></li>*/}
        <li className="list-inline-item"><i className="fab fa-react" title="React JS"/></li>
        <li className="list-inline-item"><i className="fab fa-node-js"title="Node JS" /></li>
        <li className="list-inline-item"><i className="fa-brands fa-python" title="Python" /></li>
        <li className="list-inline-item"><i className="fab fa-wordpress"title="WordPress" /></li>
        <li className="list-inline-item"><i className="fab fa-npm" title="Node Package Manager"/></li>
        <li className="list-inline-item"><i className="fab fa-bootstrap"title="Bootstrap" /></li>
        <br />
        <li className="list-inline-item"><i className="fa-brands fa-git-alt" title="Git" /></li>
        <li className="list-inline-item"><i className="fab fa-gitlab"title="Github & Gitlab" /></li>
        <li className="list-inline-item"><i className="fa-solid fa-database" title="SQL & NoSQL" /></li>
        <li className="list-inline-item"><i className="fab fa-slack" title="Slack"/></li>
        <li className="list-inline-item"><i className="fab fa-trello"title="Trello" /></li>
        <li className="list-inline-item"><i className="fab fa-sketch"title="Sketch" /></li>
        <li className="list-inline-item"><i className="fab fa-linux"title="Linux Distributions" /></li>
        <li className="list-inline-item"><i className="fab fa-windows"title="Windows" /></li>
        <li className="list-inline-item"><i className="fab fa-apple" title="Mac OS"/></li>
      </ul>
      <div className="subheading mb-3"> Skills</div>
      <ul id="skillsList">
        <li title="HTML5">HTML5</li>
        <li title="CSS3">CSS3</li>
        <li title="SQL">SQL</li>
        <li title="Javascript ES6+">Javascript ES6+</li>
        <li title="NoSQL">NoSQL</li>
        <li title="Python">Python</li>
        <li title="C#">C#</li>
        <li title="Classing ASP">Classing ASP</li>
        <li title="MongoDB">MongoDB</li>
        <li title="Github">Github</li>
        <li title="MySQL">MySQL</li>
        <li title="Visual Studio Code">Visual Studio Code</li>
        <li title="Visual Studio IDE">Visual Studio IDE</li>
        <li title="Xcode">Xcode</li>
        <li title="WordPress">WordPress</li>
        <li title="Azure">Azure</li>
        <li title="Heroku">Heroku</li>
        <li title="MS SQL Server">MS SQL Server</li>
        <li title="Mongo DB Atlas">Mongo DB Atlas</li>
        <li title="Node">Node</li>
        <li title="React JS">React JS</li>
        <li title="Bootstrap">Bootstrap</li>
        <li title="JQuery">JQuery</li>
        <li title="Handlebards">Handlebards</li>
        <li title="Express">Express</li>
        <li title="Adobe Suite">Adobe Suite</li>
        <li title="Mongoose">Mongoose</li>
        <li title="Git">Git</li>
        <li title="Kendo UI">Kendo UI</li>
        <li title="Insomnia">Insomnia</li>
        <li title="Postman">Postman</li>
        <li title="Materialize">Materialize</li>
        <li title="Sequelize">Sequelize</li>
        <li title="jQuery">jQuery</li>
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
