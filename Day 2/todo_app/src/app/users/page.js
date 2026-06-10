// server component
export default async function Users() {
 

    //db call

    const res = await fetch("http://localhost:3000/api/v1/users");
    const data = await res.json();

  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {data.data.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}
