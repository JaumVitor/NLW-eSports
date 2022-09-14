// Definindo a interface para as propiedades do componente
interface ButtonProps {
  title: string
}

function Button (props: ButtonProps) {
  // Caso eu queira o valor associados na instancia {}
  return <button>{props.title}</button>
}

function App() {
  return (
    <div>
      <Button title="Send 1" />
      <Button title="Send 2" />
      <Button title='Send 3' /> 
    </div>
  )
}

export default App
