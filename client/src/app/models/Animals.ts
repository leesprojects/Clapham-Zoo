export interface Animal {
  id: number
  commonName: string
  binomialName: string
  kingdom: string
  phylum: string
  class: string
  order: string
  subOrder: string
  family: string
  subFamily: string
  genus: string
  species: string
}

export interface AnimalTableFilter {
  columnName: AnimalColumns,
  value: string
}

export enum AnimalColumns {
  ID,
  CommonName,
  BinomialName,
  Kingdom,
  Phylum,
  Class,
  Order,
  SubOrder,
  Family,
  SubFamily,
  Genus,
  Species
}
