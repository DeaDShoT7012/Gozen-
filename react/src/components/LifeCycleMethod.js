import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

    return () => {
      console.log("Cleanup: Component will unmount or userId changed");
    };
  }, [userId]);

  const handleNextUser = () => {
    setUserId((prevUserId) => prevUserId + 1);
  };

  return (
    <div>
      <b>LifeCycleMethod</b>
      {userData ? (
        <div>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <button onClick={handleNextUser}>Next User</button>
    </div>
  );
}

export default DataFetchingComponent;
