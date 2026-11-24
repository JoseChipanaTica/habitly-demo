import Link from "next/link";
import { habits } from "./habits";

export default function Today() {
  const done = habits.filter((h) => h.doneToday).length;
  return (
    <main>
      <h1>Today</h1>
      <p className="sub">{done} of {habits.length} habits done</p>
      <section className="week" aria-label="This week">
        <div className="week-head">
          <strong>This week</strong>
          <span>5 of 7 days on track</span>
        </div>
        <div className="week-days">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className={i < 5 ? "day on" : "day"}>{d}</span>
          ))}
        </div>
      </section>
      <div className="list">
        {habits.map((h) => (
          <Link key={h.id} href={`/habits/${h.id}`} className="row">
            <span className="dot" style={{ background: h.color }} />
            <span className="name">{h.name}</span>
            <span className="streak">{h.streak} days</span>
            <span className={h.doneToday ? "check done" : "check"}>{h.doneToday ? "✓" : ""}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
