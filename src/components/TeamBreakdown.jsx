export const TeamBreakdown = () => {
  const team = [
    {
      name: "Justinne",
      role: null,
      contributions: [
        "UI Mockups",
        "Fragments & Layouts",
        "Threaded Design Diagram"
      ],
    },
    {
      name: "Mark",
      role: null,
      contributions: [
        "API setup",
        "Database schema",
        "Data handling",
      ],
    },
    {
      name: "Kevin",
      role: null,
      contributions: [
        "MVVM Diagram",
        "Show and Tell 1",
      ],
    },
    {
      name: "Brian",
      role: null,
      contributions: [
        "MVVM design",
        "Component structure",
        "Show and Tell 2 Video",
      ],
    },
    {
      name: "Yan Ting",
      role: null,
      contributions: [
        "Recipe Repository",
        "Recipe ViewModel"
      ],
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 md:py-24 bg-[#06402B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          Team Effort Breakdown
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-10 max-w-3xl">
          A breakdown of each team member’s contributions to the Recipe Finder project.
        </p>

        {/* grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {team.map((member, index) => (
                <div
                key={index}
                className="w-full max-w-sm bg-[#d9e7d3] rounded-xl p-6 shadow hover:shadow-md transition"
                >
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    {member.name}
                </h2>
                {member.role && 
                <p className="text-sm font-semibold text-[#06402B] mb-4">
                    {member.role}
                </p>}

                <ul className="list-disc list-inside text-gray-800 space-y-1">
                    {member.contributions.map((item, i) => (
                    <li key={i}>{item}</li>
                    ))}
                </ul>
                </div>
            ))}
        </div>


      </div>
    </div>
  );
};
