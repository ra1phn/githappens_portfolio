import { Link } from "react-router-dom";
import "./Home.css";

const homeData = {
  kicker: "Portfolio · Software Engineering Student",
  headline: "I build clean, functional interfaces  and enjoy the process of getting there.",
  subtext:
    "This site doubles as a Git & Jira workflow exercise: every page here was branched, reviewed, and merged the way a real team ships software.",
  highlights: [
    {
      title: "Clean Code",
      description: "Readable components over clever ones future-me (and my teammates) will thank me.",
    },
    {
      title: "Continuous Learning",
      description: "New to Git branching and Scrum this term, and getting more comfortable with every sprint.",
    },
    {
      title: "Team-First Workflow",
      description: "Comfortable with PRs, merge conflicts, and reviewing teammates' work  not just my own.",
    },
  ],
  currently: "Currently sharpening my Git & Jira workflow while building this very site.",
};

export default function Home() {
  const { kicker, headline, subtext, highlights, currently } = homeData;
  return (
    <div className="home-page">
      <section className="home-hero">
        <p className="home-kicker">{kicker}</p>
        <h1 className="home-headline">{headline}</h1>
        <p className="home-subtext">{subtext}</p>
        <div className="home-cta-row">
          <Link to="/projects" className="home-cta home-cta-primary">
            View My Work
          </Link>
          <Link to="/contact" className="home-cta home-cta-secondary">
            Let's Connect
          </Link>
        </div>
      </section>
      <section className="home-highlights">
        {highlights.map((item) => (
          <div className="home-highlight-card" key={item.title}>
            <h3 className="home-highlight-title">{item.title}</h3>
            <p className="home-highlight-desc">{item.description}</p>
          </div>
        ))}
      </section>
      <section className="home-currently">
        <p>
          {currently}{" "}
          <Link to="/about" className="home-currently-link">
            More about me →
          </Link>
        </p>
      </section>
    </div>
  );
}
