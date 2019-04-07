export interface CurrentWeather {
    lattitude: number;
    longitude: number;
    timezone: string;
    time: number;
    currenttemp: number;
    humidity: number;
    windspeed: number;
    hightemp: number;
    lowtemp: number;
    pressure: number;
    precipitation: number;
}

export interface DailyWeather {
    summary: string;
    icon: string;
    precipType: string;
    hightemp: number;
    hightemptime: number;
    lowtemp: number;
    lowtemptime: number;
    humidity: number;
    pressure: number;
    windspeed: number;
    precipitation: number;
}

export interface Alerts {
    title: string;
    time: number;
    expires: number;
    description: string;
    url: string;
}
