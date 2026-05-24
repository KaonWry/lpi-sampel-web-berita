export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4">
      <div className="max-w-240 mx-auto px-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-red-700 uppercase">
          NewsPortal
        </a>
        <ul className="flex gap-5 list-none m-0 p-0">
          <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Home</a></li>
          <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Politics</a></li>
          <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Tech</a></li>
          <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Sports</a></li>
          <li><a href="#" className="text-sm font-bold text-gray-800 uppercase hover:text-red-700">Lifestyle</a></li>
        </ul>
      </div>
    </nav>
  );
}
