import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import WeatherCard from './components/WeatherCard.jsx';
import UserProfile from './components/UserProfile.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      zad3
      <div style={{ padding: '20px' }}>
        <WeatherCard city="Kraków" temperature={15} conditions="sunny" />

        <WeatherCard
          city="Gdańsk"
          temperature={8}
          conditions="rainy"
          warning="Możliwe burze i silny wiatr"
        />

        <WeatherCard city="Warszawa" temperature={10} conditions="cloudy" />
      </div>
      zad4
      <UserProfile
        name="Tung Tung Sahur"
        email="tung@sahur.pl"
        bio="Spec od nocnych alarmów i budzenia ludzi bez litości"
        website="https://sahur-zone.pl"
        isPremium={true}
        followerCount={1540}
      />
      <UserProfile
        name="Agent Fabryki Jaboli"
        email="agent@jabol.pl"
        isPremium={false}
        followerCount={87}
      />
      <UserProfile
        name="Sigma Observer"
        email="sigma@watcher.com"
        bio="Patrzę i oceniam wszystko z dystansu"
        isPremium={true}
        website="https://sigma.watch"
        followerCount={99999}
      />
    </>
  );
}

export default App;
