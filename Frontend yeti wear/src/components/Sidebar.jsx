import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const sidebar = [
    {
      name: "User",
      to: "/admin/user",
    },
    {
      name: "Products",
      to: "/admin/products",
    },
    {
      name: "Add Products",
      to: "/admin/addproducts",
    },
    {
      name: "Hero Slider",
      to: "/admin/hero",
    },
  ];

  return (
    <>
      <div className="bg-[#0F172A]">
        <div>
          {sidebar.map((l) => (
            <li
              key={l.name}
              onClick={() => navigate(l.to)}
              className="cursor-pointer p-6 text-[#CBD5E1] font-serif hover:bg-[#164E63] hover:text-[#67E8F9]"
            >
              {l.name}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
