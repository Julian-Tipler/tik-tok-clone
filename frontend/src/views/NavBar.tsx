const commonNavProperties = "flex flex-col text-lg font-semibold";

export const NavBar = () => {
  return (
    <nav className="p-6">
      <div className={`${commonNavProperties} w-10 text-lg lg:hidden`}>
        <div>FY</div>
        <div>FL</div>
        <div>FR</div>
        <div>EXP</div>
        <div>LVE</div>
        <div>PRF</div>
      </div>
      <div
        className={`${commonNavProperties} hidden w-48 gap-4 text-lg lg:flex`}
      >
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
