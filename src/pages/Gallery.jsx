const photos = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg"
];

export default function Gallery() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((src,i) => (
          <img key={i} src={src} alt={`Gallery ${i+1}`} className="w-full h-40 object-cover rounded-lg shadow"/>
        ))}
      </div>
    </div>
  );
}
