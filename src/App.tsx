import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";


function App() {
    const users: IUser[] = [{
        id: 1,
        name: "Serega",
        email: '123@yandex.ru',
        address: {
            city: "Moscow",
            street: "TUX",
            zipcode: '123154'
        }
    },
        {
            id: 2,
            name: "Ser",
            email: '13@yex.ru',
            address: {
                city: "Mo",
                street: "T",
                zipcode: '123'
            }
        }]
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
