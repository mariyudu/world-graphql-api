import { City } from "../entity/City";
import { Country } from "../entity/Country";

export const resolverQuery = {

    City: async (_: any, args: any) => {
        const { id } = args;
        const city = await City.findOne({ where: { id: id }, relations: ["country"] });
        return city;
    },

    Country: async (_: any, args: any) => {
        const { code } = args;
        const country = await Country.findOne({ where: { code }, relations: ["cities", "countrylanguages"] });
        return country;
    },

    allCountries: async (_: any, args: any) => {
        const where = {where: Object.assign({}, args.filter)}
        const paging = args.paging || {skip: 0, take: 100};
        const order = {order: args.sorting ? {[args.sorting.sortBy]: args.sorting.sort} : {code: "ASC"}}
        const countries = await Country.find({
            ...where,
            ...paging,
            ...order,
            relations: ["cities", "countrylanguages"] 
        });
        return countries;
    }
}