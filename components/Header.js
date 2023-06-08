// components/Header.js
export default function Header() {
  return (
    <header className="p-6 fixed top-4 left-4 right-4 z-10 bg-elevated-1 rounded-lg">
      <div className="container mx-auto flex items-center justify-between">
        <img src="/logo.png" alt="Logo" className="h-36" />
      </div>
    </header>
  );
}
