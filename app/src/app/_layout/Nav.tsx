export function Nav() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white sticky top-0 w-full">
      <div className="text-lg font-bold">Unbound</div>
      <div className="space-x-4">
        <appkit-button label="Log in" />
      </div>
    </nav>
  );
}
