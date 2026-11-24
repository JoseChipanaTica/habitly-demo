import Link from "next/link";
import { habits } from "./habits";

export default function Today() {
  const done = habits.filter((h) => h.doneToday).length;
  return (
    <main>
      <h1>Today</h1>
      <p className="sub">{done} of {habits.length} habits done</p>
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
