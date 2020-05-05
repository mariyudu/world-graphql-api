const { GraphQLScalarType } = require('graphql')

export const resolverType = {

  DateTime: new GraphQLScalarType({
    name: `DateTime`,
    description: `A valid date time value.`,
    parseValue: (value: string) => new Date(value),
    serialize: (value: Date) => new Date(value).toISOString(),
    parseLiteral: (ast: any) => ast.value
  }),

  Continent: {
    Asia: 'Asia',
    Europe: 'Europe',
    North_America: 'North America',
    Africa: 'Africa',
    Oceania: 'Oceania',
    Antarctica: 'Antarctica',
    South_America: 'South America',
  },
}
