// components/Header.js
export default function Header() {
  return (
    <header className="w-full p-4 fixed top-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-16" />
      </div>
    </header>
  );
}
