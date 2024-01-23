// bad component
let guest = 0;

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
