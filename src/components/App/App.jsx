import Profile from "../Profile/Profile";
import userData from "../Profile/Profile.json";
import Friends from "../FriendList/FriendList";
import friendData from "../FriendList/FriendList.json";
import Transactions from "../TransactionHistory/TransactionHistory";
import transactionsList from "../TransactionHistory/TransactionHistory.json";

export default function App() {
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
