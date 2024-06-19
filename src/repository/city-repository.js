const { City } = require('../models/index');

class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city;
        }
        catch(error) {
            console.log("Something went wrong");
            throw(error);
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy ({
                where: {
                    id: cityId
                }
            })
            }
         catch (error) {
            console.log("Something went wrong");
            throw(error);
        }
    }

    async updateCity(cityid, data){
        try {
            const city = await City.update(data, {
                where: {
                    id: cityid
                }
            })
            return city;
            
        } catch (error) {
            console.log("Something went wrong");
            throw(error);
            
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(error) {
            console.log("Something went wrong");
            throw(error);
        }
    }
}

module.exports =  CityRepository;