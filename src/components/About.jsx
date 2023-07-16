const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              We are a lift and elevator company that provides a wide range of
              services, including maintenance, modernization, and repair. We are
              committed to providing our customers with the highest quality
              service and products.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> We are a leading
                provider of lift and elevator services.
              </li>
              <li>
                <i className="ri-check-double-line"></i> We have a team of
                experienced engineers and technicians.
              </li>
              <li>
                <i className="ri-check-double-line"></i> We are committed to
                providing our customers with the highest quality service and
                products.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p style={{ textAlign: "justify" }}>
              Welcome to ELEVATOR, a leading provider of innovative elevator
              solutions. With over 10 years of industry experience, we
              specialize in designing, installing, and maintaining cutting-edge
              elevators for a wide range of applications. Our commitment to
              excellence, safety, and customer satisfaction sets us apart in the
              industry.
            </p>
            <a href="#" className="btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
