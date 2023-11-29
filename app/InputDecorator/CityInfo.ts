export class CityInfo
{
    cityName:string;
    touristSpot:string[];

    constructor(cityName:string,touristSpot:string[])
    {
        this.cityName = cityName;
        this.touristSpot = touristSpot;
    }
}