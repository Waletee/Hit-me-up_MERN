import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./FollowersCard.css";
import User from "../User/User";
import { Followers } from "../../Info/FollowerData"
import { getAllUser } from "../../api/UserRequests";

{/*import FollowersModal from "../FollowersModal/FollowersModal";
import { getAllUser } from "../../api/UserRequests";
import { useSelector } from "react-redux";

  const [modalOpened, setModalOpened] = useState(false);
  

*/}
const FollowersCard = ({ location }) => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {persons. map((person, id)=>{
        if(person._id !== user._id)
        return (
          <User person= {person} key = {id}/>
        )
      })}
    </div>
  );
};

export default FollowersCard;
