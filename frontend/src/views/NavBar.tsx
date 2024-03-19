export const NavBar = () => {
  return (
    <nav className="p-6">
      <div className=" flex w-10 flex-col lg:hidden">
        <div>FY</div>
        <div>FL</div>
        <div>FR</div>
        <div>EXP</div>
        <div>LVE</div>
        <div>PRF</div>
      </div>
      <div className="hidden w-48 flex-col lg:flex">
        <div>For You</div>
        <div>Following</div>
        <div>Friends</div>
        <div>Explore</div>
        <div>LIVE</div>
        <div>Profile</div>
      </div>
    </nav>
  );
};
