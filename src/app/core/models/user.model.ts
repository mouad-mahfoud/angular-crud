import { Company } from './company.model';

export interface User {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  createdAt: Date;
  publicId: string;
  roleDtoSet: string[];
  CompanyDto: Company;
}
