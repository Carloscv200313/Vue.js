import axios from 'axios'
const URL =
  'https://api.open-meteo.com/v1/forecast?latitude=-10&longitude=-75.25&current=temperature_2m&timezone=auto&forecast_days=1'
export const getTemperatura = async () => {
  const resp = await axios.get(URL)
  const nuevaTemperatura = resp.data.current.temperature_2m
  return nuevaTemperatura
}
