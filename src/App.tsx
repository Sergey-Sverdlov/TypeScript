import Card, {CardVariant} from "./components/Card";


function App() {

  return (
      <div>
          <Card width={'200px'} height={'200px'} variant={CardVariant.outlined}
                onClick={(e) => console.log("HELLO SEREGA", e)}
          >
              <button>Кнопка</button>
              <p>ТЕКСТ</p>
          </Card>
      </div>
  )
}

export default App
