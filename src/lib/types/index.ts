export type ChartProps = {
  className?: string;
};

export type ContractType =
  | 'contractor'
  | 'permanent'
  | 'internship'
  | 'fixed-term'
  | 'apprenticeship';

export type RemoteMode = 'full' | 'partial' | 'none';

/**
 * Job Data
 * This interface keeps informations that are relevant for the user
 */
export interface JobData {
  title: string;
  remoteMode?: RemoteMode[];
  contractType: ContractType[];
  company: string;
  location: string;
  dailyIncome?: string; // daily income following the format 'min - max'
  annualIncome?: string; // annual income following the format 'min - max'
  currency: string;
  duration: string; // duration following the format 'min - max'
  // jobUrl: string; // Clickable link to the offer page on the website
  // source: string; // Website that provides the offer
  publicationDate: string; // Date of the publication of the offer
}

// maps the rawData object keys to JobData properties
export type Mapper = Record<keyof Omit<JobData, 'jobUrl' | 'source'>, string>;
