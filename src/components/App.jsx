import Profile from "./task-1/Profile";
import userData from "./task-1/user-data.json";
import Friends from "./task-2/Friend";
import friendData from "./task-2/friends.json";
import Transactions from "./task-3/transactions";
import transactionsList from "./task-3/transactions.json";

export default function App() {
  console.log(friendData)
  return (
    <div>
      <h2>Task 1. Profile</h2>

      <Profile
        name={userData.username}
        image={userData.avatar}
        tag={userData.tag}
        stats={userData.stats}
        location={userData.location}
      />
      
      <h2>Task 2. Friends</h2>
      
      <Friends friends={friendData} />
      
      <h2>Task 3. Transactions</h2>

      <Transactions transactionsData={transactionsList} />
    </div>
  );
} 
