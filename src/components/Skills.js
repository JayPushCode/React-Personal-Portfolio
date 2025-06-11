import '../app.css';

function Skills() {
  return (
    <div>
      <hr className="m-0" />
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>

          {/* Icons Section */}
          <ul className="list-inline dev-icons">
            <li className="list-inline-item"><i className="fab fa-html5" title="HTML5" /></li>
            <li className="list-inline-item"><i className="fab fa-css3-alt" title="CSS3" /></li>
            <li className="list-inline-item"><i className="fab fa-js-square" title="JavaScript" /></li>
            <li className="list-inline-item"><i className="fab fa-react" title="React.js" /></li>
            <li className="list-inline-item"><i className="fab fa-node-js" title="Node.js" /></li>
            <li className="list-inline-item"><i className="fa-brands fa-python" title="Python" /></li>
            <li className="list-inline-item"><i className="fab fa-npm" title="NPM" /></li>
            <li className="list-inline-item"><i className="fab fa-bootstrap" title="Bootstrap" /></li>
            <li className="list-inline-item"><i className="fab fa-git-alt" title="Git" /></li>
            <li className="list-inline-item"><i className="fab fa-github" title="GitHub" /></li>
            <li className="list-inline-item"><i className="fab fa-gitlab" title="GitLab" /></li>
            <li className="list-inline-item"><i className="fab fa-linux" title="Linux" /></li>
            <li className="list-inline-item"><i className="fab fa-windows" title="Windows" /></li>
            <li className="list-inline-item"><i className="fab fa-apple" title="Mac OS" /></li>
            <li className="list-inline-item"><i className="fab fa-wordpress" title="WordPress" /></li>
          </ul>

          {/* Skills by Category */}
          <div className="subheading mb-3">Frontend</div>
          <ul id="skillsList">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js (Context API & Redux)</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>Tailwind CSS</li>
            <li>Handlebars</li>
            <li>Kendo UI</li>
          </ul>

          <div className="subheading mb-3">Backend</div>
          <ul id="skillsList">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>C#</li>
            <li>Classic ASP</li>
            <li>.NET</li>
            <li>RESTful APIs</li>
            <li>GraphQL API</li>
            <li>Apollo Server</li>
            <li>Snowflake</li>
          </ul>

          <div className="subheading mb-3">Databases</div>
          <ul id="skillsList">
            <li>SQL</li>
            <li>MySQL</li>
            <li>MS SQL Server</li>
            <li>NoSQL</li>
            <li>MongoDB</li>
            <li>MongoDB Atlas</li>
            <li>MariaDB</li>
            <li>PostgreSQL</li>
            <li>Mongoose</li>
            <li>Sequelize</li>
          </ul>

          <div className="subheading mb-3">Tools & Technologies</div>
          <ul id="skillsList">
            <li>Git, GitHub, GitLab</li>
            <li>VS Code, Visual Studio IDE</li>
            <li>Xcode</li>
            <li>WordPress</li>
            <li>Azure</li>
            <li>Heroku</li>
            <li>Docker & Docker Compose</li>
            <li>Postman, Insomnia</li>
            <li>Adobe Suite</li>
            <li>Slack, Trello</li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li><span className="fa-li"><i className="fas fa-check" /></span>Mobile-First, Responsive Design</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>Google Analytics & SEO Optimization</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>Bootstrap & Custom CSS Front-End Development</li>
            <li><span className="fa-li"><i className="fas fa-check" /></span>Agile Web Development Method</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Skills;
