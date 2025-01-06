function AboutUs() {
  return (
    <div>
      <div className="flex ">
        <div>
          <img
            src="Images/About Us 1.jpg"
            alt="About Us"
            className=" h-[39rem] my-36 ml-[-3rem]"
          />
        </div>
        <div className="w-[60rem] mt-36 text-xl space-y-6 mb-4">
          <p>
            At Teeny Tech Trek, we are passionate about leveraging technology to
            drive innovation and empower businesses in the digital age. Founded
            by a team of experienced professionals, our mission is to provide
            cutting-edge solutions that address the unique challenges faced by
            organizations today. With a strong focus on customer satisfaction,
            we strive to deliver exceptional results that not only meet but
            exceed our clients' expectations.
          </p>
          <p>
            Mission : Our mission is to empower businesses through innovative
            technology solutions that enhance efficiency, drive growth, and
            foster meaningful connections with their customers.
          </p>
          <p>
            Vision : We envision a future where every organization harnesses the
            power of technology to achieve their goals and create lasting impact
            in their industries. Our diverse range of services includes web
            development, digital marketing, and Salesforce Cloud Development,
            among others. We understand that each business is unique, which is
            why we take the time to listen to our clients and tailor our
            solutions to fit their specific needs. Whether you’re looking to
            enhance your online presence, streamline your sales processes, or
            improve customer engagement, Teeny Tech Trek has the expertise and
            resources to help you succeed.
          </p>
          <p>
            Values : We are committed to integrity, innovation, collaboration,
            and excellence. These core values guide our actions and decisions as
            we work towards building lasting partnerships with our clients. We
            pride ourselves on staying at the forefront of technological
            advancements and industry trends. Our team is constantly exploring
            new tools and methodologies to ensure that our clients benefit from
            the latest innovations. By fostering a culture of continuous
            learning and improvement, we empower our team members to bring fresh
            ideas and creative solutions to every project.
          </p>
          <p>
            At Teeny Tech Trek, we believe in building lasting partnerships with
            our clients. Your success is our success, and we are committed to
            supporting you every step of the way. Join us on this exciting
            journey as we navigate the ever-evolving landscape of technology
            together!
          </p>
        </div>
      </div>
      <div className="flex gap-40 absolute bottom-[-8rem] left-16">
        <button className="border px-8 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white min-w-44">Terms & Conditions</button>
        <button className="border px-8 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 text-white min-w-44">Privacy Policy</button>
      </div>
    </div>
  );
}

export default AboutUs;
