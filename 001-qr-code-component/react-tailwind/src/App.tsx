import QrCard from './components/QrCard'

function App() {
  return (
    <>
      <main>
        <QrCard />
      </main>

      <footer className="text-[0.6875rem] text-center">
        Challenge by{' '}
        <a className="text-attribution-link" href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>.
        Coded by{' '}
        <a className="text-attribution-link" href="https://github.com/volod-one">
          Volodymyr Balashov
        </a>.
      </footer>
    </>
  )
}

export default App
