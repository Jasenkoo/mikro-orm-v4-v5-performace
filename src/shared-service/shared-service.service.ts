import { Injectable } from '@nestjs/common';

import { MikroORM } from '@mikro-orm/core';
import { categorizeContactsForCompanies, prepareContactForImport } from './utils/formatters';
import { Contact } from '../models/contact.entity';
import { Company } from '../models/company.entity';

import { fetched } from '../data';
import { RemotePCMContact } from '../RemotePCMContact';

@Injectable()
export class SharedServiceService {
    constructor(private readonly orm: MikroORM) {}

    async pcmSync(): Promise<void> {
        try {
            const em = this.orm.em.fork();
            const mappedContacts = fetched
                .map((contact) => new RemotePCMContact(contact))
                .map((fetchedContact) => prepareContactForImport(fetchedContact));
            const companies = ['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company) => {
                const newCompany = new Company();
                newCompany.name = company;
                newCompany.isDepartment = false;
                return newCompany;
            });
            const departments = ['Department 1', 'Department 2', 'Department 3', 'Department 4'].map((department) => {
                const newDepartment = new Company();
                newDepartment.name = department;
                newDepartment.isDepartment = true;
                return newDepartment;
            });
            em.persist(mappedContacts);
            em.persist(companies.concat(departments));
            await em.flush();
            await this.linkContactsToCompaniesAndDepartments();
        } catch (e) {
            console.error(e);
            throw new Error();
        }
    }

    async linkContactsToCompaniesAndDepartments(): Promise<void> {
        const em = this.orm.em.fork();
        console.log('START POST CREATE ACTION');
        const start = process.hrtime();
        const [allCompaniesAndDepartments, allContacts] = await Promise.all([
            em.find(Company, {}),
            em.find(Contact, {}),
        ]);
        const companiesData = categorizeContactsForCompanies(allContacts, allCompaniesAndDepartments);
        const end = process.hrtime(start);
        console.log('It takes ' + (end[0] + end[1] / 1e9).toFixed(3) + 'seconds');
        // This logic persists data at the end, but in this reproduction, not needed
        // await em.persistAndFlush(companiesData);
    }
}
