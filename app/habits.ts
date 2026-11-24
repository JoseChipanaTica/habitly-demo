export type Habit = { id: string; name: string; streak: number; doneToday: boolean; color: string };

export const habits: Habit[] = [
  { id: "run", name: "Morning run", streak: 41, doneToday: true, color: "#6D4AFF" },
  { id: "read", name: "Read 10 pages", streak: 12, doneToday: false, color: "#FFC44D" },
  { id: "water", name: "Drink water", streak: 7, doneToday: true, color: "#3CC6A8" },
];
