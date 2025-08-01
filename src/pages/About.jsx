export default function About() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Me</h1>
      <p>I'm Koki Yamanaka</p>
      <ul style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>
        <li>Grew up in Kuala Lumpur, Malaysia for 16 years</li>
        <li>Studied in Chiba, Japan during high school</li>
        <li>Pursued Mathematics and Computer Science in British Columbia, Canada</li>
        <li>Worked remotely for a Japanese company while building a product to solve meal planning issues in Vancouver</li>
      </ul>

      <h1 style={{ marginTop: '2rem' }}>Final Goal</h1>
      <p style={{ marginTop: '1rem' }}>
        Build a low-cost (<strong>$1,000</strong>) single robot arm that can cook and clean end-to-end —
        so people no longer need to spend 3–4 hours a day on these repetitive tasks. The goal is to help people
        reclaim their time, enjoy life with loved ones, and still eat delicious, cost-effective meals sourced from online recipes.
      </p>
      <p style={{ marginTop: '1rem' }}>
        <strong>Constraint:</strong> Ingredients are simply spread on the table, with a single overhead camera capturing the setup. No need for expensive sensors or industrial setups.
      </p>

      <p style={{ marginTop: '1rem' }}>
        <strong>Inspiration:</strong>
      </p>
      <ul style={{ lineHeight: '1.8' }}>
        <li>
          <a href="https://openvla.github.io/" target="_blank" rel="noopener noreferrer">
            VLA Model – $660 robot arm
          </a>
        </li>
        <li>
          <a href="https://github.com/Vector-Wangel/XLeRobot" target="_blank" rel="noopener noreferrer">
            XLeRobot – Low-cost single robot arm
          </a>
        </li>
        <li>
          <a href="https://x.com/VectorWang2/status/1917178007749529933" target="_blank" rel="noopener noreferrer">
            Related X post
          </a>
        </li>
      </ul>
    </div>
  );
}
