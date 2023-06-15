import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../ui/Modal";


const Problem2 = () => {
  const [contacts, setContacts] = useState();
  const [usContacts, setUsContacts] = useState();
  useEffect(() => {
    const url = "https://contact.mediusware.com/api/contacts/";
    const fetchData = async () => {
      try {
        const result = await axios(url);
        if (result) {
          setContacts(result.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <Modal 
            className="btn btn-lg btn-outline-primary"
            btnContent="All Contacts"
            // response={contacts}
            link={'modal/A'}
          />
          {/* <Modal
            className="btn btn-lg btn-outline-warning"
            btnContent="US Contacts"
            // response={usContacts}
            link={'modal/B'}
          /> */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;

// import React, { useState, useEffect } from "react";
// import Modal from "../ui/Modal";
// import { Link, useLocation, useNavigate } from "react-router-dom";


// const Problem2 = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleCancel = () => {
//     navigate(-1);
//     setIsModalOpen(false);
//   };
//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
//         <div className="d-flex justify-content-center gap-3">
//           <Link to="modal/A" state={{ background: location }}>
//             <button
//               className="btn btn-lg btn-outline-primary"
//               onClick={showModal}
//             >
//               Modal
//             </button>
//             <Modal
//               isModalOpen={isModalOpen}
//               handleCancel={handleCancel}
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Problem2;
