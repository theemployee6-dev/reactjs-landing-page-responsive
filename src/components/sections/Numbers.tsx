import Container from "../shared/Container";

const numberString = [
  { title: "100+", paragraph: "AI Models Implemented" },
  { title: "250+", paragraph: "Enterprise Clients" },
  { title: "99.9%", paragraph: "Uptime Guarantee" },
  { title: "10+", paragraph: "Years of Inovation" },
];

const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg border
        border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border 
        grid grid-cols-2 md:grid-cols-4"
        >
          {numberString.map((item, key) => {
            return (
              <div className="text-center px-5" key={key}>
                <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                  {item.title}
                </h2>
                <p className="mt-2 text-heading-3">{item.paragraph}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Numbers;
