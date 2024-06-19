const {CityRepository} = require('../repository/index');

class CityService {
    constructor() {
        this.cityRepository = new CityRepository();

    }

    async createCity({data}) {
        try {
            const city = await this.cityRepository.createCity({data});
            return city;
            
        } catch (error) {
            console.log("Something went wrong");
            throw(error)

        }
    }
    async deleteCity(cityID) {
        try {
            const city = await this.cityRepository.deleteCity(cityID);
            return city;
            
        } catch (error) {
            console.log("Something went wrong");
            throw(error)
    }
}

    async updateCity(cityId,data) {
        try {
            const city = await this.cityRepository.updateCity(cityId,data);
            return city;
            
        } catch (error) {
            console.log("Something went wrong");
            throw(error)
    }
}

     async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
            
        } catch (error) {
            console.log("Something went wrong");
            throw(error)
    }
}