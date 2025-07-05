const team = [
  { name: "Sujal", role: "President", photo: "/images/sujal bhagat.jpg" },
  { name: "Arbaaz", role: "Tech Lead", photo: "/images/Arbaaz.webp" },
  { name: "Sundaram", role: "Committee Head", photo: "/images/Sundar.webp" },
];

export default function Members() {
  return (
    <div className="container mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Meet the Team</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {team.map(person => (
          <div key={person.name} className="w-48">
            <img src={person.photo} alt={person.name} className="rounded-full w-48 h-48 object-cover mx-auto"/>
            <h3 className="mt-4 text-xl font-semibold">{person.name}</h3>
            <p className="text-gray-600">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
