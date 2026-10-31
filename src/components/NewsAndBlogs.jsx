import { useState } from "react";
import { HiCalendarDateRange } from "react-icons/hi2";
import Container from "./Container";

const featured = {
  id: 1,
  img: "/images/Rectangle12.jpg",
  tag: "Doctor",
  date: "24 Dec, 2023",
  title: "In this section, we delve into various aspects of health",
  desc: "Explore the world of medical specialties through our blog's spotlight feature. From cardiology to pediatrics, we share in-depth articles written by our expert physicians.",
};

const posts = [
  {
    id: 2,
    img: "/images/Rectangle13.jpg",
    tag: "Doctor",
    date: "24 Dec, 2023",
    title: "Discover a treasure trove of practical tips for enhancing",
    desc: "From nutrition advice to exercise routines, we're here to support your journey toward a healthier life.",
  },
  {
    id: 3,
    img: "/images/Rectangle14.jpg",
    tag: "Doctor",
    date: "24 Dec, 2023",
    title: "Our patients' journeys are filled with courage, resilience, and triumph.",
    desc: "In this section, we share inspiring narratives of individuals who have overcome health challenges.",
  },
  {
    id: 4,
    img: "/images/Rectangle15.jpg",
    tag: "Doctor",
    date: "24 Dec, 2023",
    title: "From organizing health fairs to partnering with local organizations",
    desc: "Find out how you can participate in community events and contribute to the health of your neighbourhood.",
  },
];

function Meta({ tag, date }) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
      <span className="rounded-md bg-[#007BFF0D] px-2.5 py-1 text-[12px] text-brand sm:text-[14px]">
        {tag}
      </span>
      <span className="flex items-center gap-1 text-[12px] text-copy sm:text-[14px]">
        <HiCalendarDateRange className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        {date}
      </span>
    </div>
  );
}

function ReadMore({ expanded, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={expanded}
      className="w-fit cursor-pointer rounded-md bg-brand px-3.5 py-1.5 text-[13px] text-white transition-all duration-300 ease-linear hover:scale-103 hover:bg-brand-hover sm:px-5 sm:py-2 sm:text-[15px]"
    >
      {expanded ? "Show Less" : "Read More"}
    </button>
  );
}

function FeaturedPost({ post }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[14px] bg-white shadow-md">
      <img
        src={post.img}
        alt=""
        loading="lazy"
        className="h-48 w-full object-cover sm:h-64 lg:h-72"
      />
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <Meta tag={post.tag} date={post.date} />
        <h3 className="text-[18px] font-medium leading-snug text-ink sm:text-2xl lg:text-3xl">
          {post.title}
        </h3>
        <p className={`text-[14px] leading-6 text-copy sm:text-[16px] ${expanded ? "" : "line-clamp-3 lg:line-clamp-none"}`}>
          {post.desc}
        </p>
        <ReadMore expanded={expanded} onClick={() => setExpanded((v) => !v)} />
      </div>
    </article>
  );
}

function CompactPost({ post }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="flex min-h-48 overflow-hidden rounded-[14px] bg-white shadow-md">
      <img
        src={post.img}
        alt=""
        loading="lazy"
        className="w-28 shrink-0 object-cover min-[400px]:w-36 sm:w-48 md:w-36 lg:w-44"
      />
      <div className="flex min-w-0 flex-col justify-center gap-2 p-3 sm:p-4">
        <Meta tag={post.tag} date={post.date} />
        <h3 className="text-[14px] font-medium leading-snug text-ink sm:text-[17px]">
          {post.title}
        </h3>
        <p className={`text-[12px] leading-5 text-copy sm:text-[14px] ${expanded ? "" : "line-clamp-3"}`}>
          {post.desc}
        </p>
        <ReadMore expanded={expanded} onClick={() => setExpanded((v) => !v)} />
      </div>
    </article>
  );
}

export default function NewsAndBlogs() {
  return (
    <Container as="section" className="mt-8 min-[330px]:mt-10 sm:mt-12">
      <h2 className="mb-5 text-center text-xl font-bold text-ink min-[330px]:mb-6 min-[330px]:text-2xl sm:mb-8 sm:text-3xl md:text-4xl">
        Our Latest News &amp; Blogs
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
        <FeaturedPost post={featured} />
        <div className="flex flex-col gap-4 sm:gap-5">
          {posts.map((post) => (
            <CompactPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </Container>
  );
}
