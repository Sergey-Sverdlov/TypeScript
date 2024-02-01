import React, {FC} from 'react';
import EventsExample from "./EventsExample";
import Card, {CardVariant} from "./Card";

const Header:FC= () => {
    return (
        <div>
            <EventsExample />
            <Card width={'200px'} height={'200px'} variant={CardVariant.outlined}
                  onClick={(e) => console.log("HELLO SEREGA", e)}
            >
                <button>Кнопка</button>
                <p>ТЕКСТ</p>
            </Card>
        </div>
    );
};

export default Header;
