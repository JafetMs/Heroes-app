import { Link, Outlet } from "react-router";

export const HeroesLayouts = () => {
  return (
    <div className="bg-blue-500 ">
      <ul className="flex justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/heroes/1">Hero</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>

      <section className="mt-10">
        <Outlet />
      </section>
    </div>
  );
};
