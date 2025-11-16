function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "20px auto",
        backgroundColor: "white",
      }}
    >
      <h2 style={{ color: "darkblue" }}>{name}</h2>
      <p style={{ fontSize: "18px" }}>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default UserProfile;
