import { NotificationSettings } from "./components/NotificationSettings/NotificationSettings.tsx";

function App() {
  return (
    <section className='section'>
      <div className="container">
        <div className='heading-wrapper'>
          <span className='primary-heading'>Manage Your Notifications</span>
          <span className='secondary-heading'>Choose how you want to be notified about the latest updates and messages.</span>
        </div>
        <NotificationSettings />
      </div>
    </section>
  );
}

export default App;
