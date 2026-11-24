import { notFound } from "next/navigation";
import { habits } from "../../habits";

export function generateStaticParams() {
  return habits.map((h) => ({ id: h.id }));
}

export default async function HabitPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const habit = habits.find((h) => h.id === id);
  if (!habit) notFound();
  return (
    <main>
      <h1>{habit.name}</h1>
      <p className="sub">Current streak</p>
      <div className="big">{habit.streak} days</div>
    </main>
  );
}
