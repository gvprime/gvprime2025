export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} GV Prime AI Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}