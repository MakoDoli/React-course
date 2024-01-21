import { getImageUrl } from "./utils";
function Profile(person) {
  console.log(person);
  return <img src={getImageUrl(person)} />;
}

export default Profile;
