function WeatherCard({ city, temperature, conditions, warning }) {
  let icon = '';

  if (conditions === 'sunny') {
    icon = '☀️';
  } else if (conditions === 'rainy') {
    icon = '🌧️';
  } else if (conditions === 'cloudy') {
    icon = '☁️';
  }

  const hasWarning = warning && warning.length > 0;

  return (
    <div>
      <h2>
        {icon} {city}, {temperature}°C
      </h2>

      {hasWarning && <div className="warning">⚠️ OSTRZEŻENIE: {warning}</div>}

      {conditions === 'rainy' && <p>Pogoda deszczowa, możliwe utrudnienia</p>}

      {conditions === 'sunny' ? (
        <p>Warunki stabilne</p>
      ) : (
        <p>Warunki zmienne</p>
      )}
    </div>
  );
}

export default WeatherCard;
