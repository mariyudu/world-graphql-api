import { City } from "../entity/City";
import { Country } from "../entity/Country";
import { Countrylanguage } from "../entity/Countrylanguage";

export const resolverMutation = {

    putCity: async (_: any, args: any) => {
        try {
        const city = City.create(args.city);

        await city.save();
        const ret = await City.findOne({ where: { id: city.id }, relations: ["country"] });
        return ret;
        } catch (error) {
        return false;
        }
    },

    deleteCity: async (_: any, args: any) => {
        try {
        const result = await City.delete({id: args.id});
        return result.affected;
        } catch (error) {
        return false;
        }
    },

    putCountry: async (_: any, args: any) => {
        try {
        console.log(args.country)
        const country = Country.create(args.country);

        await country.save();
        const ret = await Country.findOne({ where: { code: country.code }, relations: ["cities", "countrylanguages"] });
        return ret;
        } catch (error) {
        return false;
        }
    },

    deleteCountry: async (_: any, args: any) => {
        try {
        //await City.delete({countryCode: args.code});
        const result = await Country.delete({code: args.code});
        return result.affected;
        } catch (error) {
        return false;
        }
    },

    putCountryLanguage: async (_: any, args: any) => {
        try {
        console.log(args.countryLanguage)
        const countryLanguage = Countrylanguage.create(args.countryLanguage);

        await countryLanguage.save();
        const ret = await Countrylanguage.findOne({ where: { countryCode: countryLanguage.countryCode, language: countryLanguage.language }, relations: ["country"] });
        return ret;
        } catch (error) {
        return false;
        }
    },

    deleteCountryLanguage: async (_: any, args: any) => {
        try {
        console.log(args);
        const result = await Countrylanguage.delete({countryCode: args.countryCode, language: args.language});
        return result.affected;
        } catch (error) {
        return false;
        }
    },

}