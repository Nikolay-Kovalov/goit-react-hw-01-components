import { Profile } from "./Profile/Profile"
import { StatList } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList";
import user from '../Data/user.json';
import statistics from '../Data/statistics.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";


export const App = () => {
    return (
        <>
      
        <Profile
            avatar={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
           stats={user.stats} />
       
            <StatList
                title="Upload stats"
                stats={statistics}
            />

            <FriendList
            friends={friends}
            />

            <TransactionHistory
                items={transactions} />

            </>
        
    )
}