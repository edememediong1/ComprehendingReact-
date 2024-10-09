import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
        <h1 className='text-3xl font-bold underline'>Hello World</h1>
      </main>
    </>
  );
}
