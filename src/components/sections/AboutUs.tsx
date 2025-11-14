import Container from "../shared/Container";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
import Info from "../cards/Info";

const AboutUs = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://images.foxtv.com/static.livenowfox.com/www.livenowfox.com/content/uploads/2024/09/764/432/GettyImages-2173579322.jpg?ve=1&tl=1"
              alt="About-page-AI-glasses"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col gap-2">
          <Title>About Our AI Solution</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illo
            tempora sequi, similique magni laborum mollitia quod saepe.
            Aspernatur minus quos nam alias. Aspernatur dolorem omnis quam,
            cumque esse nam.
          </Paragraph>
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Mission"
              description="Our mission is to use AI for the good of Humanity."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                />
              </svg>
            </Info>
            <Info
              title="Vision"
              description="Our vision is to drive business innovation and growth"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
