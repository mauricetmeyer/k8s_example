/**
 * countries.ts
 *
 * Author: Maurice T. Meyer
 * E-Mail: maurice@lavireo.com
 *
 * (c) Laviréo. All rights reserved.
 *
 * This document is the property of Laviréo.
 * It is considered confidential and proprietary.
 *
 * This document may not be reproduced or transmitted in any form,
 * in whole or in part, without the express written permission of
 * Laviréo.
 */

interface Country {
  name:     string;
  alpha2:   string;
  alpha3:   string;
  currency: string;

  states_label?: string;
  states?: Record<string, string>;
}

const Countries: Country[] = [
  {
    alpha2:   'AD',
    alpha3:   'AND',
    currency: 'EUR',
    name:     'Andorra'
  },
  {
    alpha2:   'AE',
    alpha3:   'ARE',
    currency: 'AED',
    name:     'United Arab Emirates'
  },
  {
    alpha2:   'AF',
    alpha3:   'AFG',
    currency: 'AFN',
    name:     'Afghanistan'
  },
  {
    alpha2:   'AG',
    alpha3:   'ATG',
    currency: 'XCD',
    name:     'Antigua and Barbuda'
  },
  {
    alpha2:   'AI',
    alpha3:   'AIA',
    currency: 'XCD',
    name:     'Anguilla'
  },
  {
    alpha2:   'AL',
    alpha3:   'ALB',
    currency: 'ALL',
    name:     'Albania'
  },
  {
    alpha2:   'AM',
    alpha3:   'ARM',
    currency: 'AMD',
    name:     'Armenia'
  },
  {
    alpha2:   'AO',
    alpha3:   'AGO',
    currency: 'AOA',
    name:     'Angola'
  },
  {
    alpha2:   'AQ',
    alpha3:   'ATA',
    currency: 'USD',
    name:     'Antarctica'
  },
  {
    alpha2:   'AR',
    alpha3:   'ARG',
    currency: 'ARS',
    name:     'Argentina'
  },
  {
    alpha2:   'AS',
    alpha3:   'ASM',
    currency: 'USD',
    name:     'American Samoa'
  },
  {
    alpha2:   'AT',
    alpha3:   'AUT',
    currency: 'EUR',
    name:     'Austria'
  },
  {
    alpha2:       'AU',
    alpha3:       'AUS',
    currency:     'AUD',
    name:         'Australia',
    states_label: 'State',
    states: {
      ACT: 'Australian Capital Territory',
      NSW: 'New South Wales',
      NT:  'Northern Territory',
      QLD: 'Queensland',
      SA:  'South Australia',
      TAS: 'Tasmania',
      VIC: 'Victoria',
      WA:  'Western Australia',
    }
  },
  {
    alpha2:   'AW',
    alpha3:   'ABW',
    currency: 'AWG',
    name:     'Aruba'
  },
  {
    alpha2:   'AX',
    alpha3:   'ALA',
    currency: 'EUR',
    name:     'Åland Islands'
  },
  {
    alpha2:   'AZ',
    alpha3:   'AZE',
    currency: 'AZN',
    name:     'Azerbaijan'
  },
  {
    alpha2:   'BA',
    alpha3:   'BIH',
    currency: 'BAM',
    name:     'Bosnia and Herzegovina'
  },
  {
    alpha2:   'BB',
    alpha3:   'BRB',
    currency: 'BBD',
    name:     'Barbados'
  },
  {
    alpha2:   'BD',
    alpha3:   'BGD',
    currency: 'BDT',
    name:     'Bangladesh'
  },
  {
    alpha2:   'BE',
    alpha3:   'BEL',
    currency: 'EUR',
    name:     'Belgium'
  },
  {
    alpha2:   'BF',
    alpha3:   'BFA',
    currency: 'XOF',
    name:     'Burkina Faso'
  },
  {
    alpha2:   'BG',
    alpha3:   'BGR',
    currency: 'BGN',
    name:     'Bulgaria'
  },
  {
    alpha2:   'BH',
    alpha3:   'BHR',
    currency: 'BHD',
    name:     'Bahrain'
  },
  {
    alpha2:   'BI',
    alpha3:   'BDI',
    currency: 'BIF',
    name:     'Burundi'
  },
  {
    alpha2:   'BJ',
    alpha3:   'BEN',
    currency: 'XOF',
    name:     'Benin'
  },
  {
    alpha2:   'BL',
    alpha3:   'BLM',
    currency: 'EUR',
    name:     'Saint Barthélemy'
  },
  {
    alpha2:   'BM',
    alpha3:   'BMU',
    currency: 'BMD',
    name:     'Bermuda'
  },
  {
    alpha2:   'BN',
    alpha3:   'BRN',
    currency: 'BND',
    name:     'Brunei Darussalam'
  },
  {
    alpha2:   'BO',
    alpha3:   'BOL',
    currency: 'BOB',
    name:     'Bolivia'
  },
  {
    alpha2:   'BQ',
    alpha3:   'BES',
    currency: 'USD',
    name:     'Bonaire, Sint Eustatius and Saba'
  },
  {
    alpha2:       'BR',
    alpha3:       'BRA',
    currency:     'BRL',
    name:         'Brazil',
    states_label: 'State',
    states: {
      AC: 'Acre',
      AL: 'Alagoas',
      AM: 'Amazonas',
      AP: 'Amapá',
      BA: 'Bahia',
      CE: 'Ceará',
      DF: 'Distrito Federal',
      ES: 'Espírito Santo',
      GO: 'Goiás',
      MA: 'Maranhão',
      MG: 'Minas Gerais',
      MS: 'Mato Grosso do Sul',
      MT: 'Mato Grosso',
      PA: 'Pará',
      PB: 'Paraíba',
      PE: 'Pernambuco',
      PI: 'Piauí',
      PR: 'Paraná',
      RJ: 'Rio de Janeiro',
      RN: 'Rio Grande do Norte',
      RO: 'Rondônia',
      RR: 'Roraima',
      RS: 'Rio Grande do Sul',
      SC: 'Santa Catarina',
      SE: 'Sergipe',
      SP: 'São Paulo',
      TO: 'Tocantins',
    }
  },
  {
    alpha2:   'BS',
    alpha3:   'BHS',
    currency: 'BSD',
    name:     'Bahamas'
  },
  {
    alpha2:   'BT',
    alpha3:   'BTN',
    currency: 'BTN',
    name:     'Bhutan'
  },
  {
    alpha2:   'BV',
    alpha3:   'BVT',
    currency: 'NOK',
    name:     'Bouvet Island'
  },
  {
    alpha2:   'BW',
    alpha3:   'BWA',
    currency: 'BWP',
    name:     'Botswana'
  },
  {
    alpha2:   'BY',
    alpha3:   'BLR',
    currency: 'BYR',
    name:     'Belarus'
  },
  {
    alpha2:   'BZ',
    alpha3:   'BLZ',
    currency: 'BZD',
    name:     'Belize'
  },
  {
    alpha2:       'CA',
    alpha3:       'CAN',
    currency:     'CAD',
    name:         'Canada',
    states_label: 'Province',
    states: {
      AB: 'Alberta',
      BC: 'British Columbia',
      MB: 'Manitoba',
      NB: 'New Brunswick',
      NL: 'Newfoundland and Labrador',
      NS: 'Nova Scotia',
      NT: 'Northwest Territories',
      NU: 'Nunavut',
      ON: 'Ontario',
      PE: 'Prince Edward Island',
      QC: 'Quebec',
      SK: 'Saskatchewan',
      YT: 'Yukon Territory',
    }
  },
  {
    alpha2:   'CC',
    alpha3:   'CCK',
    currency: 'AUD',
    name:     'Cocos (Keeling) Islands'
  },
  {
    alpha2:   'CD',
    alpha3:   'COD',
    currency: 'CDF',
    name:     'Congo, The Democratic Republic Of The'
  },
  {
    alpha2:   'CF',
    alpha3:   'CAF',
    currency: 'XAF',
    name:     'Central African Republic'
  },
  {
    alpha2:   'CG',
    alpha3:   'COG',
    currency: 'XAF',
    name:     'Congo'
  },
  {
    alpha2:   'CH',
    alpha3:   'CHE',
    currency: 'CHF',
    name:     'Switzerland'
  },
  {
    alpha2:   'CI',
    alpha3:   'CIV',
    currency: 'XOF',
    name:     "Côte D'Ivoire"
  },
  {
    alpha2:   'CK',
    alpha3:   'COK',
    currency: 'NZD',
    name:     'Cook Islands'
  },
  {
    alpha2:   'CL',
    alpha3:   'CHL',
    currency: 'CLP',
    name:     'Chile'
  },
  {
    alpha2:   'CM',
    alpha3:   'CMR',
    currency: 'XAF',
    name:     'Cameroon'
  },
  {
    alpha2:   'CN',
    alpha3:   'CHN',
    currency: 'CNY',
    name:     'China'
  },
  {
    alpha2:   'CO',
    alpha3:   'COL',
    currency: 'COP',
    name:     'Colombia'
  },
  {
    alpha2:   'CR',
    alpha3:   'CRI',
    currency: 'CRC',
    name:     'Costa Rica'
  },
  {
    alpha2:   'CU',
    alpha3:   'CUB',
    currency: 'CUP',
    name:     'Cuba'
  },
  {
    alpha2:   'CV',
    alpha3:   'CPV',
    currency: 'CVE',
    name:     'Cape Verde'
  },
  {
    alpha2:   'CW',
    alpha3:   'CUW',
    currency: 'ANG',
    name:     'Curaçao'
  },
  {
    alpha2:   'CX',
    alpha3:   'CXR',
    currency: 'AUD',
    name:     'Christmas Island'
  },
  {
    alpha2:   'CY',
    alpha3:   'CYP',
    currency: 'EUR',
    name:     'Cyprus'
  },
  {
    alpha2:   'CZ',
    alpha3:   'CZE',
    currency: 'CZK',
    name:     'Czech Republic'
  },
  {
    alpha2:   'DE',
    alpha3:   'DEU',
    currency: 'EUR',
    name:     'Germany'
  },
  {
    alpha2:   'DJ',
    alpha3:   'DJI',
    currency: 'DJF',
    name:     'Djibouti'
  },
  {
    alpha2:   'DK',
    alpha3:   'DNK',
    currency: 'DKK',
    name:     'Denmark'
  },
  {
    alpha2:   'DM',
    alpha3:   'DMA',
    currency: 'XCD',
    name:     'Dominica'
  },
  {
    alpha2:   'DO',
    alpha3:   'DOM',
    currency: 'DOP',
    name:     'Dominican Republic'
  },
  {
    alpha2:   'DZ',
    alpha3:   'DZA',
    currency: 'DZD',
    name:     'Algeria'
  },
  {
    alpha2:   'EC',
    alpha3:   'ECU',
    currency: 'USD',
    name:     'Ecuador'
  },
  {
    alpha2:   'EE',
    alpha3:   'EST',
    currency: 'EUR',
    name:     'Estonia'
  },
  {
    alpha2:   'EG',
    alpha3:   'EGY',
    currency: 'EGP',
    name:     'Egypt'
  },
  {
    alpha2:   'EH',
    alpha3:   'ESH',
    currency: 'MAD',
    name:     'Western Sahara'
  },
  {
    alpha2:   'ER',
    alpha3:   'ERI',
    currency: 'ETB',
    name:     'Eritrea'
  },
  {
    alpha2:       'ES',
    alpha3:       'ESP',
    currency:     'EUR',
    name:         'Spain',
    states_label: 'Province',
    states:  {
      A:  'Alicante',
      AB: 'Albacete',
      AL: 'Almería',
      AV: 'Ávila',
      B:  'Barcelona',
      BA: 'Badajoz',
      BI: 'Vizcaya',
      BU: 'Burgos',
      C:  'A Coruña',
      CA: 'Cádiz',
      CC: 'Cáceres',
      CE: 'Ceuta',
      CN: 'Canary Islands',
      CO: 'Córdoba',
      CR: 'Ciudad Real',
      CS: 'Castellón',
      CU: 'Cuenca',
      GC: 'Las Palmas',
      GI: 'Girona',
      GR: 'Granada',
      GU: 'Guadalajara',
      H:  'Huelva',
      HU: 'Huesca',
      J:  'Jaén',
      L:  'Lleida',
      LE: 'León',
      LO: 'La Rioja',
      LU: 'Lugo',
      M:  'Madrid',
      MA: 'Málaga',
      ML: 'Melilla',
      MU: 'Murcia',
      NA: 'Navarra',
      O:  'Asturias',
      OR: 'Ourense',
      P:  'Palencia',
      PM: 'Baleares',
      PO: 'Pontevedra',
      S:  'Cantabria',
      SA: 'Salamanca',
      SE: 'Sevilla',
      SG: 'Segovia',
      SO: 'Soria',
      SS: 'Guipúzcoa',
      T:  'Tarragona',
      TE: 'Teruel',
      TF: 'Santa Cruz de Tenerife',
      TO: 'Toledo',
      V:  'Valencia',
      VA: 'Valladolid',
      VI: 'Álava',
      Z:  'Zaragoza',
      ZA: 'Zamora',
    }
  },
  {
    alpha2:   'ET',
    alpha3:   'ETH',
    currency: 'ETB',
    name:     'Ethiopia'
  },
  {
    alpha2:   'FI',
    alpha3:   'FIN',
    currency: 'EUR',
    name:     'Finland'
  },
  {
    alpha2:   'FJ',
    alpha3:   'FJI',
    currency: 'USD',
    name:     'Fiji'
  },
  {
    alpha2:   'FK',
    alpha3:   'FLK',
    currency: 'FKP',
    name:     'Falkland Islands (Malvinas)'
  },
  {
    alpha2:   'FM',
    alpha3:   'FSM',
    currency: 'USD',
    name:     'Micronesia, Federated States Of'
  },
  {
    alpha2:   'FO',
    alpha3:   'FRO',
    currency: 'DKK',
    name:     'Faroe Islands'
  },
  {
    alpha2:   'FR',
    alpha3:   'FRA',
    currency: 'EUR',
    name:     'France'
  },
  {
    alpha2:   'GA',
    alpha3:   'GAB',
    currency: 'XAF',
    name:     'Gabon'
  },
  {
    alpha2:   'GB',
    alpha3:   'GBR',
    currency: 'GBP',
    name:     'United Kingdom'
  },
  {
    alpha2:   'GD',
    alpha3:   'GRD',
    currency: 'XCD',
    name:     'Grenada'
  },
  {
    alpha2:   'GE',
    alpha3:   'GEO',
    currency: 'GEL',
    name:     'Georgia'
  },
  {
    alpha2:   'GF',
    alpha3:   'GUF',
    currency: 'EUR',
    name:     'French Guiana'
  },
  {
    alpha2:   'GG',
    alpha3:   'GGY',
    currency: 'GGP',
    name:     'Guernsey'
  },
  {
    alpha2:   'GH',
    alpha3:   'GHA',
    currency: 'GHS',
    name:     'Ghana'
  },
  {
    alpha2:   'GI',
    alpha3:   'GIB',
    currency: 'GIP',
    name:     'Gibraltar'
  },
  {
    alpha2:   'GL',
    alpha3:   'GRL',
    currency: 'DKK',
    name:     'Greenland'
  },
  {
    alpha2:   'GM',
    alpha3:   'GMB',
    currency: 'GMD',
    name:     'Gambia'
  },
  {
    alpha2:   'GN',
    alpha3:   'GIN',
    currency: 'GNF',
    name:     'Guinea'
  },
  {
    alpha2:   'GP',
    alpha3:   'GLP',
    currency: 'EUR',
    name:     'Guadeloupe'
  },
  {
    alpha2:   'GQ',
    alpha3:   'GNQ',
    currency: 'XAF',
    name:     'Equatorial Guinea'
  },
  {
    alpha2:   'GR',
    alpha3:   'GRC',
    currency: 'EUR',
    name:     'Greece'
  },
  {
    alpha2:   'GS',
    alpha3:   'SGS',
    currency: 'GBP',
    name:     'South Georgia and the South Sandwich Islands'
  },
  {
    alpha2:   'GT',
    alpha3:   'GTM',
    currency: 'GTQ',
    name:     'Guatemala'
  },
  {
    alpha2:   'GU',
    alpha3:   'GUM',
    currency: 'USD',
    name:     'Guam'
  },
  {
    alpha2:   'GW',
    alpha3:   'GNB',
    currency: 'XOF',
    name:     'Guinea-Bissau'
  },
  {
    alpha2:   'GY',
    alpha3:   'GUY',
    currency: 'GYD',
    name:     'Guyana'
  },
  {
    alpha2:       'HK',
    alpha3:       'HKG',
    currency:     'HKD',
    name:         'Hong Kong',
    states_label: 'Area',
    states: {
      'Hong Kong':       'Hong Kong',
      Kowloon:           'Kowloon',
      'New Territories': 'New Territories',
    }
  },
  {
    alpha2:   'HM',
    alpha3:   'HMD',
    currency: 'AUD',
    name:     'Heard and McDonald Islands'
  },
  {
    alpha2:   'HN',
    alpha3:   'HND',
    currency: 'HNL',
    name:     'Honduras'
  },
  {
    alpha2:   'HR',
    alpha3:   'HRV',
    currency: 'HRK',
    name:     'Croatia'
  },
  {
    alpha2:   'HT',
    alpha3:   'HTI',
    currency: 'USD',
    name:     'Haiti'
  },
  {
    alpha2:   'HU',
    alpha3:   'HUN',
    currency: 'HUF',
    name:     'Hungary'
  },
  {
    alpha2:   'ID',
    alpha3:   'IDN',
    currency: 'IDR',
    name:     'Indonesia'
  },
  {
    alpha2:       'IE',
    alpha3:       'IRL',
    currency:     'EUR',
    name:         'Ireland',
    states_label: 'County',
    states: {
      C:  'Cork',
      CE: 'Clare',
      CN: 'Cavan',
      CW: 'Carlow',
      D:  'Dublin',
      DL: 'Donegal',
      G:  'Galway',
      KE: 'Kildare',
      KK: 'Kilkenny',
      KY: 'Kerry',
      LD: 'Longford',
      LH: 'Louth',
      LK: 'Limerick',
      LM: 'Leitrim',
      LS: 'Laois',
      MH: 'Meath',
      MN: 'Monaghan',
      MO: 'Mayo',
      OY: 'Offaly',
      RN: 'Roscommon',
      SO: 'Sligo',
      TA: 'Tipperary',
      WD: 'Waterford',
      WH: 'Westmeath',
      WW: 'Wicklow',
      WX: 'Wexford',
    }
  },
  {
    alpha2:   'IL',
    alpha3:   'ISR',
    currency: 'ILS',
    name:     'Israel'
  },
  {
    alpha2:   'IM',
    alpha3:   'IMN',
    currency: 'IMP',
    name:     'Isle of Man'
  },
  {
    alpha2:       'IN',
    alpha3:       'IND',
    currency:     'INR',
    name:         'India',
    states_label: 'State',
    states: {
      AN: 'Andaman and Nicobar Islands',
      AP: 'Andhra Pradesh',
      AR: 'Arunachal Pradesh',
      AS: 'Assam',
      BR: 'Bihar',
      CH: 'Chandigarh',
      CT: 'Chhattisgarh',
      DD: 'Daman and Diu',
      DL: 'Delhi',
      DN: 'Dadra and Nagar Haveli',
      GA: 'Goa',
      GJ: 'Gujarat',
      HP: 'Himachal Pradesh',
      HR: 'Haryana',
      JH: 'Jharkhand',
      JK: 'Jammu and Kashmir',
      KA: 'Karnataka',
      KL: 'Kerala',
      LD: 'Lakshadweep',
      MH: 'Maharashtra',
      ML: 'Meghalaya',
      MN: 'Manipur',
      MP: 'Madhya Pradesh',
      MZ: 'Mizoram',
      NL: 'Nagaland',
      OR: 'Orissa',
      PB: 'Punjab',
      PY: 'Pondicherry',
      RJ: 'Rajasthan',
      SK: 'Sikkim',
      TG: 'Telangana',
      TN: 'Tamil Nadu',
      TR: 'Tripura',
      UL: 'Uttaranchal',
      UP: 'Uttar Pradesh',
      WB: 'West Bengal',
    }
  },
  {
    alpha2:   'IO',
    alpha3:   'IOT',
    currency: 'USD',
    name:     'British Indian Ocean Territory'
  },
  {
    alpha2:   'IQ',
    alpha3:   'IRQ',
    currency: 'IQD',
    name:     'Iraq'
  },
  {
    alpha2:   'IR',
    alpha3:   'IRN',
    currency: 'IRR',
    name:     'Iran, Islamic Republic Of'
  },
  {
    alpha2:   'IS',
    alpha3:   'ISL',
    currency: 'ISK',
    name:     'Iceland'
  },
  {
    alpha2:       'IT',
    alpha3:       'ITA',
    currency:     'EUR',
    name:         'Italy',
    states_label: 'Province',
    states: {
      AG: 'Agrigento',
      AL: 'Alessandria',
      AN: 'Ancona',
      AO: 'Aosta',
      AP: 'Ascoli Piceno',
      AQ: "L'Aquila",
      AR: 'Arezzo',
      AT: 'Asti',
      AV: 'Avellino',
      BA: 'Bari',
      BG: 'Bergamo',
      BI: 'Biella',
      BL: 'Belluno',
      BN: 'Benevento',
      BO: 'Bologna',
      BR: 'Brindisi',
      BS: 'Brescia',
      BT: 'Barletta-Andria-Trani',
      BZ: 'Bolzano',
      CA: 'Cagliari',
      CB: 'Campobasso',
      CE: 'Caserta',
      CH: 'Chieti',
      CI: 'Carbonia-Iglesias',
      CL: 'Caltanissetta',
      CN: 'Cuneo',
      CO: 'Como',
      CR: 'Cremona',
      CS: 'Cosenza',
      CT: 'Catania',
      CZ: 'Catanzaro',
      EN: 'Enna',
      FC: 'Forlì-Cesena',
      FE: 'Ferrara',
      FG: 'Foggia',
      FI: 'Firenze',
      FM: 'Fermo',
      FR: 'Frosinone ',
      GE: 'Genova',
      GO: 'Gorizia',
      GR: 'Grosseto',
      IM: 'Imperia',
      IS: 'Isernia',
      KR: 'Crotone',
      LC: 'Lecco',
      LE: 'Lecce',
      LI: 'Livorno',
      LO: 'Lodi',
      LT: 'Latina',
      LU: 'Lucca',
      MB: 'Monza e Brianza',
      MC: 'Macerata',
      ME: 'Messina',
      MI: 'Milano',
      MN: 'Mantova',
      MO: 'Modena',
      MS: 'Massa-Carrara',
      MT: 'Matera',
      NA: 'Napoli',
      NO: 'Novara',
      NU: 'Nuoro',
      OG: 'Ogliastra',
      OR: 'Oristano',
      OT: 'Olbia-Tempio',
      PA: 'Palermo',
      PC: 'Piacenza',
      PD: 'Padova',
      PE: 'Pescara',
      PG: 'Perugia',
      PI: 'Pisa',
      PN: 'Pordenone',
      PO: 'Prato',
      PR: 'Parma',
      PT: 'Pistoia',
      PU: 'Pesaro e Urbino',
      PV: 'Pavia',
      PZ: 'Potenza',
      RA: 'Ravenna',
      RC: 'Reggio Calabria',
      RE: 'Reggio Emilia',
      RG: 'Ragusa',
      RI: 'Rieti',
      RM: 'Roma',
      RN: 'Rimini',
      RO: 'Rovigo',
      SA: 'Salerno',
      SI: 'Siena',
      SO: 'Sondrio',
      SP: 'La Spezia',
      SR: 'Siracusa',
      SS: 'Sassari',
      SV: 'Savona',
      TA: 'Taranto',
      TE: 'Teramo',
      TN: 'Trento',
      TO: 'Torino',
      TP: 'Trapani',
      TR: 'Terni',
      TS: 'Trieste',
      TV: 'Treviso',
      UD: 'Udine',
      VA: 'Varese',
      VB: 'Verbano-Cusio-Ossola',
      VC: 'Vercelli',
      VE: 'Venezia',
      VI: 'Vicenza',
      VR: 'Verona',
      VS: 'Medio Campidano',
      VT: 'Viterbo',
      VV: 'Vibo Valentia',
    }
  },
  {
    alpha2:   'JE',
    alpha3:   'JEY',
    currency: 'JEP',
    name:     'Jersey'
  },
  {
    alpha2:   'JM',
    alpha3:   'JAM',
    currency: 'JMD',
    name:     'Jamaica'
  },
  {
    alpha2:   'JO',
    alpha3:   'JOR',
    currency: 'JOD',
    name:     'Jordan'
  },
  {
    alpha2:   'JP',
    alpha3:   'JPN',
    currency: 'JPY',
    name:     'Japan'
  },
  {
    alpha2:   'KE',
    alpha3:   'KEN',
    currency: 'KES',
    name:     'Kenya'
  },
  {
    alpha2:   'KG',
    alpha3:   'KGZ',
    currency: 'KGS',
    name:     'Kyrgyzstan'
  },
  {
    alpha2:   'KH',
    alpha3:   'KHM',
    currency: 'KHR',
    name:     'Cambodia'
  },
  {
    alpha2:   'KI',
    alpha3:   'KIR',
    currency: 'AUD',
    name:     'Kiribati'
  },
  {
    alpha2:   'KM',
    alpha3:   'COM',
    currency: 'KMF',
    name:     'Comoros'
  },
  {
    alpha2:   'KN',
    alpha3:   'KNA',
    currency: 'XCD',
    name:     'Saint Kitts And Nevis'
  },
  {
    alpha2:   'KP',
    alpha3:   'PRK',
    currency: 'KPW',
    name:     "Korea, Democratic People's Republic Of"
  },
  {
    alpha2:   'KR',
    alpha3:   'KOR',
    currency: 'KRW',
    name:     'Korea, Republic of'
  },
  {
    alpha2:   'KW',
    alpha3:   'KWT',
    currency: 'KWD',
    name:     'Kuwait'
  },
  {
    alpha2:   'KY',
    alpha3:   'CYM',
    currency: 'KYD',
    name:     'Cayman Islands'
  },
  {
    alpha2:   'KZ',
    alpha3:   'KAZ',
    currency: 'KZT',
    name:     'Kazakhstan'
  },
  {
    alpha2:   'LA',
    alpha3:   'LAO',
    currency: 'LAK',
    name:     "Lao People's Democratic Republic"
  },
  {
    alpha2:   'LB',
    alpha3:   'LBN',
    currency: 'LBP',
    name:     'Lebanon'
  },
  {
    alpha2:   'LC',
    alpha3:   'LCA',
    currency: 'XCD',
    name:     'Saint Lucia'
  },
  {
    alpha2:   'LI',
    alpha3:   'LIE',
    currency: 'CHF',
    name:     'Liechtenstein'
  },
  {
    alpha2:   'LK',
    alpha3:   'LKA',
    currency: 'LKR',
    name:     'Sri Lanka'
  },
  {
    alpha2:   'LR',
    alpha3:   'LBR',
    currency: 'LRD',
    name:     'Liberia'
  },
  {
    alpha2:   'LS',
    alpha3:   'LSO',
    currency: 'LSL',
    name:     'Lesotho'
  },
  {
    alpha2:   'LT',
    alpha3:   'LTU',
    currency: 'EUR',
    name:     'Lithuania'
  },
  {
    alpha2:   'LU',
    alpha3:   'LUX',
    currency: 'EUR',
    name:     'Luxembourg'
  },
  {
    alpha2:   'LV',
    alpha3:   'LVA',
    currency: 'EUR',
    name:     'Latvia'
  },
  {
    alpha2:   'LY',
    alpha3:   'LBY',
    currency: 'LYD',
    name:     'Libya'
  },
  {
    alpha2:   'MA',
    alpha3:   'MAR',
    currency: 'MAD',
    name:     'Morocco'
  },
  {
    alpha2:   'MC',
    alpha3:   'MCO',
    currency: 'EUR',
    name:     'Monaco'
  },
  {
    alpha2:   'MD',
    alpha3:   'MDA',
    currency: 'MDL',
    name:     'Moldova, Republic of'
  },
  {
    alpha2:   'ME',
    alpha3:   'MNE',
    currency: 'EUR',
    name:     'Montenegro'
  },
  {
    alpha2:   'MF',
    alpha3:   'MAF',
    currency: 'EUR',
    name:     'Saint Martin'
  },
  {
    alpha2:   'MG',
    alpha3:   'MDG',
    currency: 'MGA',
    name:     'Madagascar'
  },
  {
    alpha2:   'MH',
    alpha3:   'MHL',
    currency: 'USD',
    name:     'Marshall Islands'
  },
  {
    alpha2:   'MK',
    alpha3:   'MKD',
    currency: 'MKD',
    name:     'Macedonia, the Former Yugoslav Republic Of'
  },
  {
    alpha2:   'ML',
    alpha3:   'MLI',
    currency: 'XOF',
    name:     'Mali'
  },
  {
    alpha2:   'MM',
    alpha3:   'MMR',
    currency: 'MMK',
    name:     'Myanmar'
  },
  {
    alpha2:   'MN',
    alpha3:   'MNG',
    currency: 'MNT',
    name:     'Mongolia'
  },
  {
    alpha2:   'MO',
    alpha3:   'MAC',
    currency: 'MOP',
    name:     'Macao'
  },
  {
    alpha2:   'MP',
    alpha3:   'MNP',
    currency: 'USD',
    name:     'Northern Mariana Islands'
  },
  {
    alpha2:   'MQ',
    alpha3:   'MTQ',
    currency: 'EUR',
    name:     'Martinique'
  },
  {
    alpha2:   'MR',
    alpha3:   'MRT',
    currency: 'MRO',
    name:     'Mauritania'
  },
  {
    alpha2:   'MS',
    alpha3:   'MSR',
    currency: 'XCD',
    name:     'Montserrat'
  },
  {
    alpha2:   'MT',
    alpha3:   'MLT',
    currency: 'EUR',
    name:     'Malta'
  },
  {
    alpha2:   'MU',
    alpha3:   'MUS',
    currency: 'MUR',
    name:     'Mauritius'
  },
  {
    alpha2:   'MV',
    alpha3:   'MDV',
    currency: 'MVR',
    name:     'Maldives'
  },
  {
    alpha2:   'MW',
    alpha3:   'MWI',
    currency: 'MWK',
    name:     'Malawi'
  },
  {
    alpha2:       'MX',
    alpha3:       'MEX',
    currency:     'MXN',
    name:         'Mexico',
    states_label: 'State',
    states:       {
      AGU: 'Aguascalientes',
      BCN: 'Baja California',
      BCS: 'Baja California Sur',
      CAM: 'Campeche',
      CHH: 'Chihuahua',
      CHP: 'Chiapas',
      CMX: 'Ciudad de México',
      COA: 'Coahuila',
      COL: 'Colima',
      DUR: 'Durango',
      GRO: 'Guerrero',
      GUA: 'Guanajuato',
      HID: 'Hidalgo',
      JAL: 'Jalisco',
      MEX: 'México',
      MIC: 'Michoacán',
      MOR: 'Morelos',
      NAY: 'Nayarit',
      NLE: 'Nuevo León',
      OAX: 'Oaxaca',
      PUE: 'Puebla',
      QUE: 'Querétaro',
      ROO: 'Quintana Roo',
      SIN: 'Sinaloa',
      SLP: 'San Luis Potosí',
      SON: 'Sonora',
      TAB: 'Tabasco',
      TAM: 'Tamaulipas',
      TLA: 'Tlaxcala',
      VER: 'Veracruz',
      YUC: 'Yucatán',
      ZAC: 'Zacatecas',
    }
  },
  {
    alpha2:   'MY',
    alpha3:   'MYS',
    currency: 'MYR',
    name:     'Malaysia'
  },
  {
    alpha2:   'MZ',
    alpha3:   'MOZ',
    currency: 'MZN',
    name:     'Mozambique'
  },
  {
    alpha2:   'NA',
    alpha3:   'NAM',
    currency: 'NAD',
    name:     'Namibia'
  },
  {
    alpha2:   'NC',
    alpha3:   'NCL',
    currency: 'XPF',
    name:     'New Caledonia'
  },
  {
    alpha2:   'NE',
    alpha3:   'NER',
    currency: 'XOF',
    name:     'Niger'
  },
  {
    alpha2:   'NF',
    alpha3:   'NFK',
    currency: 'AUD',
    name:     'Norfolk Island'
  },
  {
    alpha2:   'NG',
    alpha3:   'NGA',
    currency: 'NGN',
    name:     'Nigeria'
  },
  {
    alpha2:   'NI',
    alpha3:   'NIC',
    currency: 'NIO',
    name:     'Nicaragua'
  },
  {
    alpha2:   'NL',
    alpha3:   'NLD',
    currency: 'EUR',
    name:     'Netherlands'
  },
  {
    alpha2:   'NO',
    alpha3:   'NOR',
    currency: 'NOK',
    name:     'Norway'
  },
  {
    alpha2:   'NP',
    alpha3:   'NPL',
    currency: 'NPR',
    name:     'Nepal'
  },
  {
    alpha2:   'NR',
    alpha3:   'NRU',
    currency: 'AUD',
    name:     'Nauru'
  },
  {
    alpha2:   'NU',
    alpha3:   'NIU',
    currency: 'NZD',
    name:     'Niue'
  },
  {
    alpha2:   'NZ',
    alpha3:   'NZL',
    currency: 'NZD',
    name:     'New Zealand'
  },
  {
    alpha2:   'OM',
    alpha3:   'OMN',
    currency: 'OMR',
    name:     'Oman'
  },
  {
    alpha2:   'PA',
    alpha3:   'PAN',
    currency: 'PAB',
    name:     'Panama'
  },
  {
    alpha2:   'PE',
    alpha3:   'PER',
    currency: 'PEN',
    name:     'Peru'
  },
  {
    alpha2:   'PF',
    alpha3:   'PYF',
    currency: 'XPF',
    name:     'French Polynesia'
  },
  {
    alpha2:   'PG',
    alpha3:   'PNG',
    currency: 'PGK',
    name:     'Papua New Guinea'
  },
  {
    alpha2:   'PH',
    alpha3:   'PHL',
    currency: 'PHP',
    name:     'Philippines'
  },
  {
    alpha2:   'PK',
    alpha3:   'PAK',
    currency: 'PKR',
    name:     'Pakistan'
  },
  {
    alpha2:   'PL',
    alpha3:   'POL',
    currency: 'PLN',
    name:     'Poland'
  },
  {
    alpha2:   'PM',
    alpha3:   'SPM',
    currency: 'EUR',
    name:     'Saint Pierre And Miquelon'
  },
  {
    alpha2:   'PN',
    alpha3:   'PCN',
    currency: 'NZD',
    name:     'Pitcairn'
  },
  {
    alpha2:   'PR',
    alpha3:   'PRI',
    currency: 'USD',
    name:     'Puerto Rico'
  },
  {
    alpha2:   'PS',
    alpha3:   'PSE',
    currency: 'ILS',
    name:     'Palestinian Territories'
  },
  {
    alpha2:   'PT',
    alpha3:   'PRT',
    currency: 'EUR',
    name:     'Portugal'
  },
  {
    alpha2:   'PW',
    alpha3:   'PLW',
    currency: 'USD',
    name:     'Palau'
  },
  {
    alpha2:   'PY',
    alpha3:   'PRY',
    currency: 'PYG',
    name:     'Paraguay'
  },
  {
    alpha2:   'QA',
    alpha3:   'QAT',
    currency: 'QAR',
    name:     'Qatar'
  },
  {
    alpha2:   'RE',
    alpha3:   'REU',
    currency: 'EUR',
    name:     'Réunion'
  },
  {
    alpha2:   'RO',
    alpha3:   'ROU',
    currency: 'RON',
    name:     'Romania'
  },
  {
    alpha2:   'RS',
    alpha3:   'SRB',
    currency: 'RSD',
    name:     'Serbia'
  },
  {
    alpha2:   'RU',
    alpha3:   'RUS',
    currency: 'RUB',
    name:     'Russian Federation'
  },
  {
    alpha2:   'RW',
    alpha3:   'RWA',
    currency: 'RWF',
    name:     'Rwanda'
  },
  {
    alpha2:   'SA',
    alpha3:   'SAU',
    currency: 'SAR',
    name:     'Saudi Arabia'
  },
  {
    alpha2:   'SB',
    alpha3:   'SLB',
    currency: 'SBD',
    name:     'Solomon Islands'
  },
  {
    alpha2:   'SC',
    alpha3:   'SYC',
    currency: 'SCR',
    name:     'Seychelles'
  },
  {
    alpha2:   'SD',
    alpha3:   'SDN',
    currency: 'SDG',
    name:     'Sudan'
  },
  {
    alpha2:   'SE',
    alpha3:   'SWE',
    currency: 'SEK',
    name:     'Sweden'
  },
  {
    alpha2:   'SG',
    alpha3:   'SGP',
    currency: 'SGD',
    name:     'Singapore'
  },
  {
    alpha2:   'SH',
    alpha3:   'SHN',
    currency: 'SHP',
    name:     'Saint Helena'
  },
  {
    alpha2:   'SI',
    alpha3:   'SVN',
    currency: 'EUR',
    name:     'Slovenia'
  },
  {
    alpha2:   'SJ',
    alpha3:   'SJM',
    currency: 'NOK',
    name:     'Svalbard And Jan Mayen'
  },
  {
    alpha2:   'SK',
    alpha3:   'SVK',
    currency: 'EUR',
    name:     'Slovakia'
  },
  {
    alpha2:   'SL',
    alpha3:   'SLE',
    currency: 'SLL',
    name:     'Sierra Leone'
  },
  {
    alpha2:   'SM',
    alpha3:   'SMR',
    currency: 'EUR',
    name:     'San Marino'
  },
  {
    alpha2:   'SN',
    alpha3:   'SEN',
    currency: 'XOF',
    name:     'Senegal'
  },
  {
    alpha2:   'SO',
    alpha3:   'SOM',
    currency: 'SOS',
    name:     'Somalia'
  },
  {
    alpha2:   'SR',
    alpha3:   'SUR',
    currency: 'SRD',
    name:     'Suriname'
  },
  {
    alpha2:   'SS',
    alpha3:   'SSD',
    currency: 'SSP',
    name:     'South Sudan'
  },
  {
    alpha2:   'ST',
    alpha3:   'STP',
    currency: 'STD',
    name:     'Sao Tome and Principe'
  },
  {
    alpha2:   'SV',
    alpha3:   'SLV',
    currency: 'USD',
    name:     'El Salvador'
  },
  {
    alpha2:   'SX',
    alpha3:   'SXM',
    currency: 'ANG',
    name:     'Sint Maarten'
  },
  {
    alpha2:   'SY',
    alpha3:   'SYR',
    currency: 'SYP',
    name:     'Syrian Arab Republic'
  },
  {
    alpha2:   'SZ',
    alpha3:   'SWZ',
    currency: 'SZL',
    name:     'Swaziland'
  },
  {
    alpha2:   'TC',
    alpha3:   'TCA',
    currency: 'USD',
    name:     'Turks and Caicos Islands'
  },
  {
    alpha2:   'TD',
    alpha3:   'TCD',
    currency: 'XAF',
    name:     'Chad'
  },
  {
    alpha2:   'TF',
    alpha3:   'ATF',
    currency: 'EUR',
    name:     'French Southern Territories'
  },
  {
    alpha2:   'TG',
    alpha3:   'TGO',
    currency: 'XOF',
    name:     'Togo'
  },
  {
    alpha2:   'TH',
    alpha3:   'THA',
    currency: 'THB',
    name:     'Thailand'
  },
  {
    alpha2:   'TJ',
    alpha3:   'TJK',
    currency: 'TJS',
    name:     'Tajikistan'
  },
  {
    alpha2:   'TK',
    alpha3:   'TKL',
    currency: 'NZD',
    name:     'Tokelau'
  },
  {
    alpha2:   'TL',
    alpha3:   'TLS',
    currency: 'IDR',
    name:     'Timor-Leste'
  },
  {
    alpha2:   'TM',
    alpha3:   'TKM',
    currency: 'TMT',
    name:     'Turkmenistan'
  },
  {
    alpha2:   'TN',
    alpha3:   'TUN',
    currency: 'TND',
    name:     'Tunisia'
  },
  {
    alpha2:   'TO',
    alpha3:   'TON',
    currency: 'TOP',
    name:     'Tonga'
  },
  {
    alpha2:   'TR',
    alpha3:   'TUR',
    currency: 'TRY',
    name:     'Turkey'
  },
  {
    alpha2:   'TT',
    alpha3:   'TTO',
    currency: 'TTD',
    name:     'Trinidad and Tobago'
  },
  {
    alpha2:   'TV',
    alpha3:   'TUV',
    currency: 'TVD',
    name:     'Tuvalu'
  },
  {
    alpha2:   'TW',
    alpha3:   'TWN',
    currency: 'TWD',
    name:     'Taiwan'
  },
  {
    alpha2:   'TZ',
    alpha3:   'TZA',
    currency: 'TZS',
    name:     'Tanzania, United Republic of'
  },
  {
    alpha2:   'UA',
    alpha3:   'UKR',
    currency: 'UAH',
    name:     'Ukraine'
  },
  {
    alpha2:   'UG',
    alpha3:   'UGA',
    currency: 'UGX',
    name:     'Uganda'
  },
  {
    alpha2:   'UM',
    alpha3:   'UMI',
    currency: 'USD',
    name:     'United States Minor Outlying Islands'
  },
  {
    alpha2:       'US',
    alpha3:       'USA',
    currency:     'USD',
    name:         'United States',
    states_label: 'State',
    states:       {
      AK: 'Alaska',
      AL: 'Alabama',
      AR: 'Arkansas',
      AZ: 'Arizona',
      CA: 'California',
      CO: 'Colorado',
      CT: 'Connecticut',
      DC: 'District of Columbia',
      DE: 'Delaware',
      FL: 'Florida',
      GA: 'Georgia',
      HI: 'Hawaii',
      IA: 'Iowa',
      ID: 'Idaho',
      IL: 'Illinois',
      IN: 'Indiana',
      KS: 'Kansas',
      KY: 'Kentucky',
      LA: 'Louisiana',
      MA: 'Massachusetts',
      MD: 'Maryland',
      ME: 'Maine',
      MI: 'Michigan',
      MN: 'Minnesota',
      MO: 'Missouri',
      MS: 'Mississippi',
      MT: 'Montana',
      NC: 'North Carolina',
      ND: 'North Dakota',
      NE: 'Nebraska',
      NH: 'New Hampshire',
      NJ: 'New Jersey',
      NM: 'New Mexico',
      NV: 'Nevada',
      NY: 'New York',
      OH: 'Ohio',
      OK: 'Oklahoma',
      OR: 'Oregon',
      PA: 'Pennsylvania',
      PR: 'Puerto Rico',
      RI: 'Rhode Island',
      SC: 'South Carolina',
      SD: 'South Dakota',
      TN: 'Tennessee',
      TX: 'Texas',
      UT: 'Utah',
      VA: 'Virginia',
      VT: 'Vermont',
      WA: 'Washington',
      WI: 'Wisconsin',
      WV: 'West Virginia',
      WY: 'Wyoming',
    }
  },
  {
    alpha2:   'UY',
    alpha3:   'URY',
    currency: 'UYU',
    name:     'Uruguay'
  },
  {
    alpha2:   'UZ',
    alpha3:   'UZB',
    currency: 'UZS',
    name:     'Uzbekistan'
  },
  {
    alpha2:   'VA',
    alpha3:   'VAT',
    currency: 'EUR',
    name:     'Holy See (Vatican City State)'
  },
  {
    alpha2:   'VC',
    alpha3:   'VCT',
    currency: 'XCD',
    name:     'Saint Vincent And The Grenedines'
  },
  {
    alpha2:   'VE',
    alpha3:   'VEN',
    currency: 'VEF',
    name:     'Venezuela, Bolivarian Republic of'
  },
  {
    alpha2:   'VG',
    alpha3:   'VGB',
    currency: 'USD',
    name:     'Virgin Islands, British'
  },
  {
    alpha2:   'VI',
    alpha3:   'VIR',
    currency: 'USD',
    name:     'Virgin Islands, U.S.'
  },
  {
    alpha2:   'VN',
    alpha3:   'VNM',
    currency: 'VND',
    name:     'Vietnam'
  },
  {
    alpha2:   'VU',
    alpha3:   'VUT',
    currency: 'VUV',
    name:     'Vanuatu'
  },
  {
    alpha2:   'WF',
    alpha3:   'WLF',
    currency: 'XPF',
    name:     'Wallis and Futuna'
  },
  {
    alpha2:   'WS',
    alpha3:   'WSM',
    currency: 'USD',
    name:     'Samoa'
  },
  {
    alpha2:   'YE',
    alpha3:   'YEM',
    currency: 'YER',
    name:     'Yemen'
  },
  {
    alpha2:   'YT',
    alpha3:   'MYT',
    currency: 'EUR',
    name:     'Mayotte'
  },
  {
    alpha2:   'ZA',
    alpha3:   'ZAF',
    currency: 'ZAR',
    name:     'South Africa'
  },
  {
    alpha2:   'ZM',
    alpha3:   'ZMB',
    currency: 'ZMK',
    name:     'Zambia'
  },
  {
    alpha2:   'ZW',
    alpha3:   'ZWE',
    currency: 'ZWD',
    name:     'Zimbabwe'
  }
];

export default Countries;
