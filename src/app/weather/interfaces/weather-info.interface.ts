export interface WeatherInfo {
    coord: {
      lon: number,
      lat: number,
    },
    weather: [
      {
        id: number,
        main: string,
        description: string,
        icon: string,
      }
    ],
    main: {
      temp: number,
      feels_like: number,
      temp_min: number,
      temp_max: number,
      pressure: number,
      humidity: number,
    },
    wind: {
      speed: number
    }
    name: string,
}