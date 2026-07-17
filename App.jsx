import "./styles.css";

function DiscussionForm() {
  function prepareEmail(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const organization = String(form.get("organization") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const continuity = String(form.get("continuity") ?? "").trim();
    const subject = organization ? `Operational Infrastructure Discussion — ${organization}` : "Operational Infrastructure Discussion";
    const body = [`Name: ${name}`, `Organization: ${organization}`, `Email: ${email}`, "", "What must continue:", continuity].join("\n");
    window.location.href = `mailto:contact@matrixbusiness.biz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="discussion-form" onSubmit={prepareEmail}>
      <div className="form-row">
        <label><span>Name</span><input name="name" autoComplete="name" required /></label>
        <label><span>Organization</span><input name="organization" autoComplete="organization" required /></label>
      </div>
      <label><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
      <label><span>What must continue?</span><textarea name="continuity" rows={3} required /></label>
      <button className="button button-light" type="submit">Prepare the discussion <span aria-hidden="true">↗</span></button>
      <p className="form-note">This prepares an email to Matrix. Nothing is sent automatically.</p>
    </form>
  );
}

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function App() {
  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header shell">
          <a className="wordmark" href="#top" aria-label="Matrix Business Systems home">
            <span>MATRIX</span>
            <small>Business Systems</small>
          </a>

          <nav aria-label="Primary navigation">
            <a href="#model">The model</a>
            <a href="#recovery-paths">Recovery paths</a>
            <a href="#best-fit">Best fit</a>
            <a href="#discussion">Discussion</a>
          </nav>

          <details className="mobile-nav">
            <summary>Menu</summary>
            <div>
              <a href="#model">The model</a>
              <a href="#recovery-paths">Recovery paths</a>
              <a href="#best-fit">Best fit</a>
              <a href="#discussion">Discussion</a>
            </div>
          </details>

          <a className="header-action" href="#discussion">
            Start a discussion <Arrow />
          </a>
        </header>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow">Operational infrastructure</p>
            <h1>Keep critical operations moving.</h1>
            <p className="hero-deck">
              Matrix redesigns the print, copy, scan, and label environments
              critical work depends on, reducing unnecessary service dependency
              while improving control, recovery, and continuity.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#discussion">
                Start with your environment <Arrow />
              </a>
              <a className="text-link" href="#model">
                See how the model changes <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="operating-model" aria-label="Traditional and redesigned recovery models">
            <div className="model-label">
              <span>OPERATING MODEL / 01</span>
              <b>Recovery determines continuity.</b>
            </div>
            <div className="model-row inherited">
              <p>Inherited model</p>
              <div className="model-flow" aria-label="Problem, call and wait, outside recovery">
                <span>Problem</span><i></i><span>Call + wait</span><i></i><span>Outside recovery</span>
              </div>
            </div>
            <div className="model-row redesigned">
              <p>Redesigned model</p>
              <div className="model-flow" aria-label="Problem, guided recovery, continue">
                <span>Problem</span><i></i><span>Guided recovery</span><i></i><span>Continue</span>
              </div>
            </div>
          </div>
        </div>

        <div className="outcome-rail shell" aria-label="Primary outcomes">
          <div><span>01</span><b>Less outside intervention</b></div>
          <div><span>02</span><b>Greater operational control</b></div>
          <div><span>03</span><b>Faster recovery</b></div>
          <div><span>04</span><b>Stronger continuity</b></div>
        </div>
      </section>

      <section className="dependency section shell" id="model">
        <div className="dependency-copy">
          <p className="eyebrow">Inherited dependency</p>
          <h2>Traditional service models are built around consumption.</h2>
          <p>
            Parts, fusers, drums, scheduled replacement, and technician labor do
            more than create cost. They create an operating model that assumes
            recurring outside intervention.
          </p>
        </div>

        <div className="dependency-chain" aria-label="How consumption creates service dependency">
          <article><span>01</span><h3>Wear components</h3><p>Mechanical processes consume parts over time.</p></article>
          <article><span>02</span><h3>Replacement</h3><p>Consumed components require planned intervention.</p></article>
          <article><span>03</span><h3>Service event</h3><p>Recovery moves outside the organization.</p></article>
          <article><span>04</span><h3>Dependency</h3><p>The operation waits for availability, access, and response.</p></article>
        </div>

        <aside className="dependency-conclusion">
          <span>THE DEVICE IS AN ENDPOINT</span>
          <p>Print, copy, scan, and label systems connect people, information, workflows, security, and service. The device is only one part of the decision.</p>
        </aside>
      </section>

      <section className="operating-change section shell dark-surface">
        <div className="change-heading">
          <p className="eyebrow">Change the operating model</p>
          <h2>InPower<sup className="registered">®</sup> is not another managed print program.</h2>
          <p>
            InPower is a 24/7 inside-out operating model designed around
            capability, recovery, and continuity, not the recurring service
            intervention traditional programs were built to administer.
          </p>
        </div>

        <div className="change-grid">
          <article>
            <span>TRADITIONAL RESPONSE</span>
            <h3>Recovery begins outside.</h3>
            <div className="change-flow"><b>Problem</b><i></i><b>Dispatch</b><i></i><b>Wait</b><i></i><b>Recover</b></div>
          </article>
          <article className="change-inside">
            <span>INPOWER<sup className="registered">®</sup> RESPONSE</span>
            <h3>Recovery begins where the interruption occurs.</h3>
            <div className="change-flow"><b>Problem</b><i></i><b>Guided recovery</b><i></i><b>Continue</b></div>
          </article>
        </div>

        <div className="principle-rail">
          <article><span>01 / RECOGNIZE</span><h3>See the dependency.</h3></article>
          <article><span>02 / REDESIGN</span><h3>Challenge the assumption.</h3></article>
          <article><span>03 / TRANSFER</span><h3>Build capability inside.</h3></article>
        </div>
      </section>

      <section className="technology-band shell" id="recovery-paths">
        <div className="technology-intro">
          <p className="eyebrow">Technology serves the model</p>
          <h2>Three platforms. Three recovery paths.</h2>
          <p>InPower<sup className="registered">®</sup> applies the recovery path supported by each platform&apos;s engineering.</p>
        </div>
        <div className="technology-list">
          <article>
            <span>01</span>
            <div>
              <p className="platform-type">SCREEN-LED RECOVERY</p>
              <h3>Epson PrecisionCore</h3>
              <p>Digitized imaging replaces many mechanical service dependencies with screen-guided recovery at the device panel.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <p className="platform-type">HOT-SWAP CONTINUITY</p>
              <h3>Brother Workhorse</h3>
              <p>No onsite repair. A 24-hour hot-swap provides replacement at no charge to the customer, with no hard drive to remove or manage.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <p className="platform-type">MODULAR RECOVERY</p>
              <h3>Kyocera</h3>
              <p>Replaceable subassemblies slide out and in, restoring operation without component-level repair.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="scenario-band shell dark-surface" id="best-fit">
        <div className="scenario-heading">
          <p className="eyebrow">Best-fit environments</p>
          <h2>Where inside capability changes the outcome.</h2>
        </div>
        <div className="scenario-grid">
          <article>
            <span>REMOTE + HARD TO REACH</span>
            <h3>When a service visit cannot be the first response.</h3>
            <p>Locations where travel is delayed, expensive, restricted, weather-dependent, or unavailable.</p>
          </article>
          <article>
            <span>CONTROLLED + COMPLIANCE-DRIVEN</span>
            <h3>When outside intervention must be limited.</h3>
            <p>Environments where access, network proximity, and chain of custody require greater control.</p>
          </article>
          <article>
            <span>HEALTHCARE + CAPABLE TEAMS</span>
            <h3>When qualified people are already close to the work.</h3>
            <p>Technical, biomedical, facilities, or IT staff can follow guided recovery without taking on equipment repair.</p>
          </article>
        </div>
        <aside className="responsibility-note">
          <span>THE BOUNDARY MATTERS</span>
          <div>
            <h3>Capability, not a second job.</h3>
            <p>InPower focuses on common recovery at the device panel. Your people follow structured guidance; they do not own technical repair. Anything outside that boundary is escalated.</p>
          </div>
        </aside>
      </section>

      <section className="decision dark-surface" id="discussion">
        <div className="fit-band shell">
          <div className="fit-heading">
            <p className="eyebrow">A discussion, not a conclusion</p>
            <h2>Your environment decides.</h2>
          </div>
          <div className="fit-grid">
            <article><span>01 / CONTINUITY</span><p>What work must continue, regardless of location, schedule, or outside availability?</p></article>
            <article><span>02 / INTERRUPTION</span><p>What happens when printing, scanning, labeling, or document movement stops?</p></article>
            <article><span>03 / DEPENDENCY</span><p>Which dependencies are intentional, and which were inherited without being questioned?</p></article>
          </div>
        </div>

        <div className="cta shell">
          <div>
            <p className="eyebrow">Begin with your operation</p>
            <h2>Your operation is the evidence.</h2>
          </div>
          <div className="cta-copy">
            <p>Matrix begins with your environment. Together, we examine what must continue, where dependency exists, and whether changing the operating model would create a better outcome.</p>
            <DiscussionForm />
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark wordmark-footer" href="#top">
          <span>MATRIX</span>
          <small>Business Systems</small>
        </a>
        <div className="company-context">
          <span>Lincoln, Nebraska</span>
          <span>Creator of InPower<sup className="registered">®</sup></span>
          <span>Designed to Change the Outcome.</span>
        </div>
        <div className="footer-contact">
          <a href="mailto:contact@matrixbusiness.biz">contact@matrixbusiness.biz</a>
          <a href="tel:+14024388030">402.438.8030</a>
        </div>
      </footer>
    </main>
  );
}
