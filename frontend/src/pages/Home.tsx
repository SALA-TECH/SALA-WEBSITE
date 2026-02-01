import "../stylesheets/Landing.css";

// Images are served from /public/images (NO imports needed)

function Home() {
  return (
    <main className="landing">
      {/* HERO SECTION */}
      <section className="hero">
        {/* FIXED TEXT OVERLAY */}
        <section className="text-overlay">
          <h1>Who is SALA?</h1>
          <p>
            SALA is a registered non-profit organization established in 2022 by
            a diverse group of young professionals and students from various
            fields, including law, accounting, medicine, and engineering. To
            date, our network has grown to over 170 dedicated members,
            predominantly from the historically disadvantaged Pondoland areas of
            Lusikisiki, Flagstaff, and Port St. Johns in the Eastern Cape.
          </p>

          <h2>Our Mission</h2>
          <p>
            To provide a platform for individuals from disadvantaged backgrounds
            – including high school learners, university students, and young
            professionals for career, business and community development.
          </p>

          <h2>Our Vision</h2>
          <p>
            To cultivate a future where every individual, regardless of
            background, has equal access to opportunities, empowerment, and
            success through education, mentorship, and professional development.
          </p>
        </section>

        {/* FADE IMAGE SLIDESHOW */}
        <section className="image-slider">
          {[
            "/images/IMG-20250702-WA0031.jpg",
            "/images/IMG-20250703-WA0056.jpg",
            "/images/IMG-20250715-WA0002.jpg",
            "/images/IMG-20251230-WA0005.jpg",
            "/images/IMG-20250702-WA0031.jpg",
            "/images/IMG-20250703-WA0056.jpg",
            "/images/IMG-20250715-WA0001.jpg",
            "/images/IMG-20250715-WA0002.jpg",
            "/images/IMG-20251230-WA0005.jpg",
          ].map((src, index) => (
            <img key={index} src={src} alt={`Slide ${index + 1}`} />
          ))}
        </section>
      </section>

      {/* CATEGORIES SECTION (BELOW HERO) */}
      <section className="categories">
        <h2>Explore Categories</h2>
        {/* category cards will go here later */}
      </section>
    </main>
  );
}

export default Home;
