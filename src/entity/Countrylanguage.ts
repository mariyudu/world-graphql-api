import { Column, Entity, Index, JoinColumn, ManyToOne, BaseEntity } from "typeorm";
import { Country } from "./Country";

@Index("CountryCode", ["countryCode"], {})
@Entity("countrylanguage", { schema: "world" })
export class Countrylanguage extends BaseEntity {
  @Column("char", { primary: true, name: "CountryCode", length: 3 })
  countryCode: string;

  @Column("char", { primary: true, name: "Language", length: 30 })
  language: string;

  @Column("enum", {
    name: "IsOfficial",
    enum: ["T", "F"],
    default: () => "'F'",
  })
  isOfficial: "T" | "F";

  @Column("decimal", {
    name: "Percentage",
    precision: 4,
    scale: 1,
    default: () => "'0.0'",
  })
  percentage: string;

  @ManyToOne(() => Country, (country) => country.countrylanguages, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "CountryCode", referencedColumnName: "code" }])
  country: Country;
}
