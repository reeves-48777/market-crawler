import { ContractType, Mapper, RemoteMode } from './index';

export const FreeworkMapper: Mapper = {
  title: 'title',
  remoteMode: 'remoteMode',
  contractType: 'contracts',
  company: 'company',
  location: 'location',
  dailyIncome: 'dailySalary',
  annualIncome: 'annualSalary',
  currency: 'currency',
  duration: 'duration',
  publicationDate: 'publishedAt',
};

export type FreeworkAPIParams = Partial<{
  contracts: ContractType[];
  minDuration: number;
  maxDuration: number;
  minAnnualSalary: number;
  minDailySalary: number;
  remoteMode: RemoteMode[];
  publishedSince: string;
}> & {
  page: number;
  itemsPerPage: number;
  searchKeywords: string;
};

export type FreeworkAPIResponse = {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:totalItems': number;
  'hydra:member': object[];
  'hydra:view': {
    '@id': string;
    '@type': string;
  };
  'hydra:search': {
    '@type': string;
    'hydra:template': string;
    'hydra:mapping': Array<{
      '@type': string;
      variable: string;
      property: string;
      required: boolean;
    }>;
  };
};
