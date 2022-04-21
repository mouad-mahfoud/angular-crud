import { User } from './user.model';

export interface Company {
  publicId: string;
  name: string;
  address: string;
  logo: string;
  manager: User;
}

export interface AllCompaniesPagination {
  result: Company[];
  total: number;
}
