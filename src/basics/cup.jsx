// bad component
//let guest = 0;

// eslint-disable-next-line react/prop-types
function Cup({ guest }) {
  //guest++;
  return <h2> Tea for guest #{guest}</h2>;
}

export default function Teaset() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
