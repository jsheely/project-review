import { NextPage } from "next";
import EnhancedTable from "../components/grid";
import { NavBar } from "../components/nav-bar";

const Core: NextPage = () => {
  return (
    <div>
      <NavBar />
      <div><EnhancedTable /></div>
    </div>
  );
};
export default Core;
