import React from "react";
import "./FollowersCard.css";

import { Followers } from "../../Info/FollowerData"

{/*import FollowersModal from "../FollowersModal/FollowersModal";
import { getAllUser } from "../../api/UserRequests";
import User from "../User/User";
import { useSelector } from "react-redux";

  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
*/}
const FollowersCard = ({ location }) => {
  return (
    <div className="FollowersCard">
      <h3>People you may know</h3>

      {Followers. map((follower, id)=>{
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImage" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">
              Follow
            </button>
          </div>
        )
      })}
    </div>
  );
};

export default FollowersCard;
