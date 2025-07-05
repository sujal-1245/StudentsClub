export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} College Club. All rights reserved.
      </div>
    </footer>
  );
}
