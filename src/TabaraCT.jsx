import React from "react";

export default function TabaraCT() {
  const program = [
    {
      date: "Duminică – 03 august 2025",
      activities: [
        "15:00 – Check-in & timp liber 🧳",
        "18:30 – Cină 🍽️",
        "19:00 – Întâlnire introductivă: bun venit, prezentări, orientare 🗣️",
      ],
    },
    {
      date: "Luni – 04 august 2025",
      activities: [
        "08:30 – Scurtă mișcare de înviorare în curtea castelului 🏃‍♀️",
        "09:00 – Mic dejun ☕🥐",
        "10:00 – Devoțional & rugăciune 🙏",
        "11:00 – Jocuri de ștafetă (grupuri mixte) 🏃‍♂️🏅",
        "13:00 – Prânz 🍛",
        "18:00 – Cină 🍲",
        "19:00 – Laudă, închinare și mesaj ✝️🎶",
      ],
    },
    {
      date: "Marți – 05 august 2025",
      activities: [
        "08:30 – Plimbare ușoară & timp de părtășie 🤝",
        "09:00 – Mic dejun",
        "10:00 – Devoțional",
        "11:00 – Ateliere (scris, pictură, discuții tematice) ✍️🎨",
        "13:00 – Prânz",
        "15:00 – Jocuri de societate & timp de relaționare 🎲",
        "18:00 – Cină",
        "19:00 – Film cu mesaj creștin + discuție 🎬💬",
      ],
    },
    {
      date: "Miercuri – 06 august 2025",
      activities: [
        "08:30 – Mic dejun",
        "10:00 – Excursie în zonă (ex: lac Millstatt sau alt obiectiv local) 🚌",
        "13:00 – Prânz tip picnic 🧺",
        "17:00 – Întoarcere & timp liber",
        "18:00 – Cină",
        "19:30 – Seară de rugăciune și mărturii 🌌🕊️",
      ],
    },
    {
      date: "Joi – 07 august 2025",
      activities: [
        "09:00 – Mic dejun",
        "10:00 – Devoțional",
        "11:00 – Activitate în echipă: treasure hunt 🧭",
        "13:00 – Prânz",
        "15:00 – Jocuri în aer liber sau activități pe echipe 🎯",
        "18:00 – Cină",
        "19:30 – Seară de laudă și închinare 🎸🔥",
      ],
    },
    {
      date: "Vineri – 08 august 2025",
      activities: [
        "09:00 – Mic dejun",
        "10:00 – Devoțional + rugăciune în grupuri",
        "11:30 – Activitate de grup: 'Bătălia talentelor' 🎤🎭",
        "13:00 – Prânz",
        "16:00 – Timp liber & pregătire bagaje",
        "18:30 – Cină festivă 🍽️✨",
        "20:00 – Seară de încheiere: celebrare, binecuvântare & momente speciale 💌",
      ],
    },
    {
      date: "Sâmbătă – 09 august 2025",
      activities: [
        "08:00 – Mic dejun",
        "09:00 – Check-out & plecare 🚗💼",
      ],
    },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">Program Tabără CT – Austria 🇦🇹</h1>
      {program.map((day, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">{day.date}</h2>
          <ul className="list-disc list-inside space-y-1">
            {day.activities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
