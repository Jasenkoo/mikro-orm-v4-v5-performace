import { Contact } from '../../models/contact.entity';
import { Company } from '../../models/company.entity';
import { RemotePCMContact } from '../../RemotePCMContact';
import { ContactSource } from '../../enums';

export const prepareContactForImport = (fetchedContact: RemotePCMContact): Contact => {
    const contact = new Contact();
    Object.keys(JSON.parse(JSON.stringify(fetchedContact))).forEach((key) => {
        contact[key] = fetchedContact[key] ? fetchedContact[key] : '';
    });
    contact.source = ContactSource.EXTERNAL;

    return contact;
};

export const categorizeContactsForCompanies = (fetched: Contact[], companies: Company[]): Contact[] => {
    const allCompanies = companies;
    // Filtering takes too long on v5 compared to v4
    const topLevelSupervisors = fetched
        .filter(
            (contact) =>
                contact.xkey === contact.supervisorXkey ||
                !fetched.some((superior) => superior.xkey === contact.supervisorXkey) ||
                fetched.some(
                    (superior) => superior.xkey === contact.supervisorXkey && superior.company !== contact.company,
                ),
        )
        .filter((supervisor) =>
            allCompanies
                .filter((company) => !company.isDepartment)
                .some((company) => company.name === supervisor.company),
        );

    return fetched;
};
