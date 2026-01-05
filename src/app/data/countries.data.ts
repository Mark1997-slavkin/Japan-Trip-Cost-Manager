export interface Country {
  name: string;
  code: string;
  currency: string;
  currencySymbol: string;
}

export const COUNTRIES: Country[] = [
  // A
  { name: 'Afghanistan', code: 'AF', currency: 'AFN', currencySymbol: '؋' },
  { name: 'Albania', code: 'AL', currency: 'ALL', currencySymbol: 'L' },
  { name: 'Algeria', code: 'DZ', currency: 'DZD', currencySymbol: 'د.ج' },
  { name: 'Argentina', code: 'AR', currency: 'ARS', currencySymbol: '$' },
  { name: 'Australia', code: 'AU', currency: 'AUD', currencySymbol: 'A$' },
  { name: 'Austria', code: 'AT', currency: 'EUR', currencySymbol: '€' },

  // B
  { name: 'Bahrain', code: 'BH', currency: 'BHD', currencySymbol: '.د.ب' },
  { name: 'Bangladesh', code: 'BD', currency: 'BDT', currencySymbol: '৳' },
  { name: 'Belgium', code: 'BE', currency: 'EUR', currencySymbol: '€' },
  { name: 'Brazil', code: 'BR', currency: 'BRL', currencySymbol: 'R$' },
  { name: 'Bulgaria', code: 'BG', currency: 'BGN', currencySymbol: 'лв' },

  // C
  { name: 'Cambodia', code: 'KH', currency: 'KHR', currencySymbol: '៛' },
  { name: 'Canada', code: 'CA', currency: 'CAD', currencySymbol: 'C$' },
  { name: 'Chile', code: 'CL', currency: 'CLP', currencySymbol: '$' },
  { name: 'China', code: 'CN', currency: 'CNY', currencySymbol: '¥' },
  { name: 'Colombia', code: 'CO', currency: 'COP', currencySymbol: '$' },
  { name: 'Costa Rica', code: 'CR', currency: 'CRC', currencySymbol: '₡' },
  { name: 'Croatia', code: 'HR', currency: 'EUR', currencySymbol: '€' },
  { name: 'Czech Republic', code: 'CZ', currency: 'CZK', currencySymbol: 'Kč' },

  // D
  { name: 'Denmark', code: 'DK', currency: 'DKK', currencySymbol: 'kr' },
  {
    name: 'Dominican Republic',
    code: 'DO',
    currency: 'DOP',
    currencySymbol: 'RD$',
  },

  // E
  { name: 'Ecuador', code: 'EC', currency: 'USD', currencySymbol: '$' },
  { name: 'Egypt', code: 'EG', currency: 'EGP', currencySymbol: 'E£' },
  { name: 'Estonia', code: 'EE', currency: 'EUR', currencySymbol: '€' },

  // F
  { name: 'Finland', code: 'FI', currency: 'EUR', currencySymbol: '€' },
  { name: 'France', code: 'FR', currency: 'EUR', currencySymbol: '€' },

  // G
  { name: 'Germany', code: 'DE', currency: 'EUR', currencySymbol: '€' },
  { name: 'Greece', code: 'GR', currency: 'EUR', currencySymbol: '€' },
  { name: 'Guatemala', code: 'GT', currency: 'GTQ', currencySymbol: 'Q' },

  // H
  { name: 'Hong Kong', code: 'HK', currency: 'HKD', currencySymbol: 'HK$' },
  { name: 'Hungary', code: 'HU', currency: 'HUF', currencySymbol: 'Ft' },

  // I
  { name: 'Iceland', code: 'IS', currency: 'ISK', currencySymbol: 'kr' },
  { name: 'India', code: 'IN', currency: 'INR', currencySymbol: '₹' },
  { name: 'Indonesia', code: 'ID', currency: 'IDR', currencySymbol: 'Rp' },
  { name: 'Iran', code: 'IR', currency: 'IRR', currencySymbol: '﷼' },
  { name: 'Iraq', code: 'IQ', currency: 'IQD', currencySymbol: 'ع.د' },
  { name: 'Ireland', code: 'IE', currency: 'EUR', currencySymbol: '€' },
  { name: 'Israel', code: 'IL', currency: 'ILS', currencySymbol: '₪' },
  { name: 'Italy', code: 'IT', currency: 'EUR', currencySymbol: '€' },

  // J
  { name: 'Jamaica', code: 'JM', currency: 'JMD', currencySymbol: 'J$' },
  { name: 'Japan', code: 'JP', currency: 'JPY', currencySymbol: '¥' },
  { name: 'Jordan', code: 'JO', currency: 'JOD', currencySymbol: 'د.ا' },

  // K
  { name: 'Kazakhstan', code: 'KZ', currency: 'KZT', currencySymbol: '₸' },
  { name: 'Kenya', code: 'KE', currency: 'KES', currencySymbol: 'KSh' },
  { name: 'Kuwait', code: 'KW', currency: 'KWD', currencySymbol: 'د.ك' },

  // L
  { name: 'Latvia', code: 'LV', currency: 'EUR', currencySymbol: '€' },
  { name: 'Lebanon', code: 'LB', currency: 'LBP', currencySymbol: 'ل.ل' },
  { name: 'Lithuania', code: 'LT', currency: 'EUR', currencySymbol: '€' },
  { name: 'Luxembourg', code: 'LU', currency: 'EUR', currencySymbol: '€' },

  // M
  { name: 'Malaysia', code: 'MY', currency: 'MYR', currencySymbol: 'RM' },
  { name: 'Maldives', code: 'MV', currency: 'MVR', currencySymbol: 'Rf' },
  { name: 'Malta', code: 'MT', currency: 'EUR', currencySymbol: '€' },
  { name: 'Mexico', code: 'MX', currency: 'MXN', currencySymbol: '$' },
  { name: 'Morocco', code: 'MA', currency: 'MAD', currencySymbol: 'د.م.' },

  // N
  { name: 'Nepal', code: 'NP', currency: 'NPR', currencySymbol: '₨' },
  { name: 'Netherlands', code: 'NL', currency: 'EUR', currencySymbol: '€' },
  { name: 'New Zealand', code: 'NZ', currency: 'NZD', currencySymbol: 'NZ$' },
  { name: 'Nigeria', code: 'NG', currency: 'NGN', currencySymbol: '₦' },
  { name: 'Norway', code: 'NO', currency: 'NOK', currencySymbol: 'kr' },

  // O
  { name: 'Oman', code: 'OM', currency: 'OMR', currencySymbol: 'ر.ع.' },

  // P
  { name: 'Pakistan', code: 'PK', currency: 'PKR', currencySymbol: '₨' },
  { name: 'Panama', code: 'PA', currency: 'PAB', currencySymbol: 'B/.' },
  { name: 'Peru', code: 'PE', currency: 'PEN', currencySymbol: 'S/' },
  { name: 'Philippines', code: 'PH', currency: 'PHP', currencySymbol: '₱' },
  { name: 'Poland', code: 'PL', currency: 'PLN', currencySymbol: 'zł' },
  { name: 'Portugal', code: 'PT', currency: 'EUR', currencySymbol: '€' },

  // Q
  { name: 'Qatar', code: 'QA', currency: 'QAR', currencySymbol: 'ر.ق' },

  // R
  { name: 'Romania', code: 'RO', currency: 'RON', currencySymbol: 'lei' },
  { name: 'Russia', code: 'RU', currency: 'RUB', currencySymbol: '₽' },

  // S
  { name: 'Saudi Arabia', code: 'SA', currency: 'SAR', currencySymbol: 'ر.س' },
  { name: 'Singapore', code: 'SG', currency: 'SGD', currencySymbol: 'S$' },
  { name: 'Slovakia', code: 'SK', currency: 'EUR', currencySymbol: '€' },
  { name: 'Slovenia', code: 'SI', currency: 'EUR', currencySymbol: '€' },
  { name: 'South Africa', code: 'ZA', currency: 'ZAR', currencySymbol: 'R' },
  { name: 'South Korea', code: 'KR', currency: 'KRW', currencySymbol: '₩' },
  { name: 'Spain', code: 'ES', currency: 'EUR', currencySymbol: '€' },
  { name: 'Sri Lanka', code: 'LK', currency: 'LKR', currencySymbol: 'Rs' },
  { name: 'Sweden', code: 'SE', currency: 'SEK', currencySymbol: 'kr' },
  { name: 'Switzerland', code: 'CH', currency: 'CHF', currencySymbol: 'CHF' },

  // T
  { name: 'Taiwan', code: 'TW', currency: 'TWD', currencySymbol: 'NT$' },
  { name: 'Thailand', code: 'TH', currency: 'THB', currencySymbol: '฿' },
  { name: 'Turkey', code: 'TR', currency: 'TRY', currencySymbol: '₺' },

  // U
  { name: 'Ukraine', code: 'UA', currency: 'UAH', currencySymbol: '₴' },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    currency: 'AED',
    currencySymbol: 'د.إ',
  },
  { name: 'United Kingdom', code: 'GB', currency: 'GBP', currencySymbol: '£' },
  { name: 'United States', code: 'US', currency: 'USD', currencySymbol: '$' },
  { name: 'Uruguay', code: 'UY', currency: 'UYU', currencySymbol: '$U' },

  // V
  { name: 'Venezuela', code: 'VE', currency: 'VES', currencySymbol: 'Bs' },
  { name: 'Vietnam', code: 'VN', currency: 'VND', currencySymbol: '₫' },

  // Z
  { name: 'Zimbabwe', code: 'ZW', currency: 'ZWL', currencySymbol: 'Z$' },
];

export function getCountryByCode(code: string): Country | undefined {
  return COUNTRIES.find((c) => c.code === code);
}

export function getCountryByName(name: string): Country | undefined {
  return COUNTRIES.find((c) => c.name.toLowerCase() === name.toLowerCase());
}

export const DEFAULT_COUNTRY = COUNTRIES.find((c) => c.code === 'JP')!;
