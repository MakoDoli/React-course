/* eslint-disable react/prop-types */
import { getImageUrl } from "./utils";
import { Avatar } from "./Avatar";
function Profile(props) {
  console.table(props.person);
  return (
    <>
      {" "}
      <img src={getImageUrl(props.person)} />
      <Avatar {...props} />
      {/* props with spread operator is used when we pass props unchanged*/}
    </>
  );
}

export default Profile;
