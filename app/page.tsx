import Image from "next/image";
import { hero, intro, consulting } from "@/lib/content";
import { services } from "@/lib/services";
import { QuoteButton } from "@/components/QuoteButton";

export default function HomePage() {
  return (
    <>
      {/* Banner */}
      <section className="hero">
        <div className="row">
          <h1>
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </h1>
          <p>{hero.text}</p>
          <QuoteButton className="btn-connect">Let&rsquo;s Connect</QuoteButton>
        </div>
      </section>

      {/* Intro + core services */}
      <section className="core-section" id="about">
        <div className="row intro">
          {intro.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>

        <div className="row" id="core-services">
          <h2 className="core-heading">Core Services</h2>
          <div className="cards">
            {services.map((s) => (
              <article key={s.slug} id={s.slug} className="card">
                <div className="card-title">
                  <h3>{s.title}</h3>
                </div>
                <div className="card-image">
                  <Image src={s.image} alt={s.imageAlt} width={640} height={460} unoptimized />
                </div>
                <div className="card-desc">
                  <p>{s.description}</p>
                </div>
                <ul className="card-items">
                  {s.items.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BIM support & consultancy */}
      <section className="grey consult-head" id="consultancy">
        <div className="row">
          <h2>Our BIM Support &amp; Consultancy Services include:</h2>
        </div>
      </section>
      <section className="grey consult-grid-section">
        <div className="row consult-grid">
          {consulting.map((c) => (
            <article key={c.title} className="consult-card">
              <div className="consult-image">
                <Image src={c.image} alt={c.imageAlt} width={640} height={460} unoptimized />
              </div>
              <div className="consult-body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Split call to action */}
      <section className="cta">
        <div className="cta-half cta-blue">
          <p>Explore our services.</p>
          <a href="#core-services" className="btn-outline-white">View Services</a>
        </div>
        <div className="cta-half cta-red">
          <p>Contact us Now.</p>
          <QuoteButton className="btn-outline-white">Contact Us</QuoteButton>
        </div>
      </section>
    </>
  );
}
