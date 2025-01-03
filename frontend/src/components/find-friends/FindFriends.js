import React, { useState } from 'react';

function FindFriends() {

    const [userIdInput, setUserIdInput] = useState("");
    const [friendIdInput, setFriendIdInput] = useState("");

    const sendFriendRequest = () => {
        fetch("http://localhost:5000/friendRoutes/sendFriendRequest",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Inform the server you're sending JSON
                },
                body: JSON.stringify({
                    userId: userIdInput,
                    friendId: friendIdInput,
                }),
            })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parse JSON if the server responds successfully
                } else {
                    throw new Error("Failed to send friend request");
                }
            })
            .then(data => {
                console.log("Friend request sent successfully :", data);
            })
            .catch(error => {
                console.error("Error during sending friend request:", error);
            });

        console.log("Request sent");
    };

    return (
        <div>
            <input
                placeholder="Friend ID"
                value={friendIdInput}
                onChange={(e) => setFriendIdInput(e.target.value)}
            />
            <input
                placeholder="User ID"
                value={userIdInput}
                onChange={(e) => setUserIdInput(e.target.value)}
            />
            <button onClick={sendFriendRequest}></button>
        </div>
    );
}

export default FindFriends;