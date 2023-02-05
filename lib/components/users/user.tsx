const getUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  return user;
};

export default async function User() {
  const user = await getUser();
  return (
    <p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </p>
  );
}
