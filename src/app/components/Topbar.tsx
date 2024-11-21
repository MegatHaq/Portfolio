export function TopBar() {
  return (
    <div className="flex justify-between mx-[10vw] mt-4 py-2">
      <div>Logo</div>
      <div className="flex gap-4 text-1xl">
        <ul>Home</ul>
        <ul>Services</ul>
        <ul>About</ul>
        <ul>Portfolio</ul>
        <ul>News</ul>
        <ul>Contact</ul>
      </div>
    </div>
  );
}
