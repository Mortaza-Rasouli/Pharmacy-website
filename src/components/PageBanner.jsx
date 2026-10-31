import Container from "./Container";

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="bg-forest">
      <Container className="py-9 min-[330px]:py-10 sm:py-14 lg:py-16">
        <h1 className="text-3xl min-[330px]:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm sm:text-base lg:text-lg text-[#CCE5FF]">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
