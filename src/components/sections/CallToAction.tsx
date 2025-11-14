import Container from "../shared/Container";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";

const CTA = () => {
  return (
    <section className="pb-20 relative">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              Quick Start you{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">
                own AI{" "}
              </span>
              Business
            </h1>
            <Paragraph className="pt-10 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique in aspernatur deleniti. Natus harum laboriosam
              doloremque perferendis eum earum fugiat explicabo repellendus
              nulla. Nostrum, natus neque consequuntur totam ut maxime.
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
              <Button>Get In Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
