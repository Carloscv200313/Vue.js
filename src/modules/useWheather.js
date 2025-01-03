import { getTemperatura } from '@/helper/getWheater'
import { useWeatherStore } from '@/stores/weatherStore'
export const useWeather = async () => {
  const temperatura = await getTemperatura()
  const weatherStore = useWeatherStore()
  weatherStore.setTemperatura(temperatura)
}
