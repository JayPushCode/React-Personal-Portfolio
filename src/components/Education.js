import '../app.css';


function Education() {
  return (
    <div>
      <hr className="m-0" />
      {/* Education*/}
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">East Carolina University</h3>
              <div className="subheading mb-3">Bachelor of Science - Business Management</div>
              {/* <div>College of Business - Business Management</div> */}
              {/*                            <p>GPA: 3.23</p>*/}
            </div>
            <div className="flex-shrink-0"><span className="text-primary">August 2014 - December 2019</span></div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">University of North Carolina at Chapel Hill</h3>
              <div className="subheading mb-3">Trilogy Coding Bootcamp</div>
              {/*                            <p>GPA: 3.56</p>*/}
            </div>
            <div className="flex-shrink-0"><span className="text-primary">May 2021 - November 2021</span></div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Google</h3>
              <div className="subheading mb-3">Cybersecurity</div>
              {/*                            <p>GPA: 3.56</p>*/}
            </div>
            <div className="flex-shrink-0"><span className="text-primary">May 2024 - November 2024</span></div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Education;
