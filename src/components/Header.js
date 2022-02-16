import React from "react";

const Header = ({ title }) => {
  return (
    <header className="p-5 text-center font-bold text-2xl bg-slate-800 text-slate-300 tracking-widest	uppercase">
      {title}
    </header>
  );
};
Header.defaultProps = {
  title: "default title",
};

export default Header;
