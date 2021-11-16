import '../app.css';

function Awards() {
  return (
<div>
  <hr className="m-0" />
  {/* Awards*/}
  <section className="resume-section" id="awards">
    <div className="resume-section-content">
      <h2 className="mb-5">Awards &amp; Certifications</h2>
      <ul className="fa-ul mb-0">
        <li>
          <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
          BB&amp;T Emerging Leaders Certification
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
          IBM Watson Data Analytics
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
          Pearson Microsoft Excel Introductory Certification
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
          Pearson Microsoft Excel Advanced Certification
        </li>
        <li>
          <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
          Trilogy Web Development Full-Stack Bootcamp
        </li>
      </ul>
    </div>
  </section>
</div>
  );
}

export default Awards;
