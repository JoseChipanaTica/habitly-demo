export default function Settings() {
  return (
    <main>
      <h1>Settings</h1>
      <p className="sub">Make Habitly work the way you do.</p>
      <div className="card">
        <div className="setting">
          <div>
            <strong>Daily reminder</strong>
            <p>A nudge at 8:00 every morning</p>
          </div>
          <span className="toggle" />
        </div>
        <div className="setting">
          <div>
            <strong>Weekly summary</strong>
            <p>Your progress every Sunday</p>
          </div>
          <span className="toggle off" />
        </div>
      </div>
    </main>
  );
}
