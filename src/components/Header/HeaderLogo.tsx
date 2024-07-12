export default function HeaderLogo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src="./icon/headerLogo.svg"
        alt="destinize logo"
        className="bg-cover bg-center"
      />
      <h5 className="text-lg font-bold">Destinize</h5>
    </div>
  );
}
