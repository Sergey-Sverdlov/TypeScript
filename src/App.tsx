import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";


function App() {
    const [users, setUsers] = React.useState<IUser[]>([])
    return (
        <div>
            <Card width={'200px'} height={'200px'} variant={CardVariant.outlined}
                  onClick={(e) => console.log("HELLO SEREGA", e)}
            >
                <button>Кнопка</button>
                <p>ТЕКСТ</p>
            </Card>
            <UserList users={users}/>
        </div>
    )
}

export default App
