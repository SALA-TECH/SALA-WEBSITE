import "../stylesheets/Landing.css";


// NO image imports when using public/

function Home() {
  return (
    <>
      {/* Navbar can be added later */}

      <main className="landing">
        {/* Hero Text */}
        <section className="text-overlay">
          <p>The South African Legacy Association is dedicated to preserving our heritage, 
                        developing ethical leaders, and building a sustainable future through education 
                        and community engagement.</p>
        </section>

        {/* Image Slider */}
        <section className="image-slider">
          <section className="slide-track">
            {[
              '/images/IMG-20250702-WA0031.jpg',
              '/images/IMG-20250703-WA0056.jpg',
              '/images/IMG-20250715-WA0002.jpg',
              '/images/IMG-20251230-WA0005.jpg',
              '/images/IMG-20250702-WA0031.jpg',
              '/images/IMG-20250703-WA0056.jpg',
              '/images/IMG-20250715-WA0001.jpg',
              '/images/IMG-20250715-WA0002.jpg',
              '/images/IMG-20251230-WA0005.jpg',
            ].map((src, i) => (
              <img key={i} src={src} alt={`Hero ${i + 1}`} />
            ))}
          </section>
        </section>

        {/* Categories */}
        <section className="categories">
          <h2>Explore Categories</h2>

          <section className="category-grid">
            <article
              className="category-card"
              onClick={() => console.log('clicked')}
            >
              {/* future content */}
            </article>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;

