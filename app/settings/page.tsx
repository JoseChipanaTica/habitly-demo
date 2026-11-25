import { Tabs } from "./tabs";

function Setting({ name, detail, on = true }: { name: string; detail: string; on?: boolean }) {
  return (
    <div className="setting">
      <div>
        <strong>{name}</strong>
        <p>{detail}</p>
      </div>
      <span className={on ? "toggle" : "toggle off"} />
    </div>
  );
}

export default function Settings() {
  return (
    <main>
      <h1>Settings</h1>
      <p className="sub">Make Habitly work the way you do.</p>
      <Tabs
        tabs={[
          {
            label: "Reminders",
            content: (
              <div className="card">
                <Setting name="Daily reminder" detail="A nudge at 8:00 every morning" />
                <Setting name="Weekly summary" detail="Your progress every Sunday" on={false} />
              </div>
            ),
          },
          {
            label: "Streaks",
            content: (
              <div className="card">
                <Setting name="Streak freeze" detail="Miss a day without losing your streak. 2 left this month" />
              </div>
            ),
          },
        ]}
      />
    </main>
  );
}
