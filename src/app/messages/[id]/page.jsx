export default function MessagePage({ params }) {
  const { id } = params;

  return (
    <div className=" bg-red-600">
      <h1>Message ID: {id}</h1>
      <p>This message is displayed inside a modal.</p>
    </div>
  );
}
