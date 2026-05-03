const driftItems = [
  { className: "nature-drift nature-drift-leaf nature-drift-a" },
  { className: "nature-drift nature-drift-leaf nature-drift-b" },
  { className: "nature-drift nature-drift-dust nature-drift-c" },
  { className: "nature-drift nature-drift-dust nature-drift-d" },
  { className: "nature-drift nature-drift-mist nature-drift-e" },
  { className: "nature-drift nature-drift-mist nature-drift-f" }
] as const;

export function AboutNatureDrift() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden md:block">
      {driftItems.map((item) => (
        <span key={item.className} className={item.className} />
      ))}
    </div>
  );
}
