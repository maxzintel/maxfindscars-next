// components/Footer.js
export default function Footer() {
  return (
    <footer className="w-full p-4 fixed bottom-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-folio">2023, MaxFindsCars LLC</div>
        <div className="flex items-center space-x-4">
          <a href="https://twitter.com/maxjzin" target="_blank" rel="noreferrer">
            <img src="/twitter.png" alt="Twitter" className="h-6" />
          </a>
          <a href="https://github.com/maxzintel" target="_blank" rel="noreferrer">
            <img src="/github.png" alt="Github" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
