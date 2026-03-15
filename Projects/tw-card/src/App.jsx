import './App.css'

function App() {

  return (
    <>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar'
            alt="Avatar"
            src=""
          />
          <div className='tw-followCard-info'>
            <strong> Daniel Marchena</strong>
            <span className='tw-followCard-infoUserName'>
              @daniel96
            </span>
          </div>
        </header>
        <aside>
          <button className='tw-followCard-button'>
            Follow
          </button>
        </aside>
      </article>
    </>
  )
}

export default App
