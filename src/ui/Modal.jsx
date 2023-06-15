import { Modal } from "antd";
import { useState } from "react";
import { Dna } from "react-loader-spinner";
import Button from "../ui/Button";
import { Link, useNavigate, useParams } from "react-router-dom";

const App = ({ link, className, btnContent, response }) => {
  const { name } = useParams();
  // const location = useLocation();
  console.log(btnContent);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    navigate(-1);
    setIsModalOpen(false);
  };
  return (
    <>
      {/* <Link to={link} state={{ background: location }}> */}
      <Link to={link}>
        <button className={className} onClick={showModal}>
          {btnContent}
        </button>
      </Link>
      <Modal
        title={`Modal ${name}`}
        open={isModalOpen}
        onCancel={handleCancel}
        cancelText="Close"
        cancelButtonProps={{ style: { border: "2px solid #46139f" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <div className="d-flex gap-2">
          <Button className="btn-a" btnContent="All Contacts" />
          <Button className="btn-b" btnContent="Us Contacts" />
        </div>
      </Modal>
    </>
  );
};
export default App;

// import { Modal } from "antd";
// import { useState } from "react";
// import Button from "./Button";
// import { useParams } from "react-router-dom";

// const App = ({isModalOpen,handleCancel}) => {
// const {name} = useParams()
//   console.log(name);
//   return (
//     <>
//       <Modal
//         title={name}
//         open={isModalOpen}
//         onCancel={handleCancel}
//         cancelText="Close"
//         cancelButtonProps={{ style: { border: "2px solid #46139f" } }}
//         okButtonProps={{ style: { display: "none" } }}
//       >
//         <div className="d-flex gap-2">
//           <Button className="btn-a" btnContent="All Contacts" />
//           <Button className="btn-b" btnContent="Us Contacts" />
//         </div>
//       </Modal>
//     </>
//   );
// };
// export default App;
