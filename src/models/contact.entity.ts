import { Cascade, Entity, Enum, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { ContactSource } from '../enums';
import { Company } from './company.entity';

@Entity({ tableName: 'contacts' })
export class Contact {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    @PrimaryKey()
    id!: number;

    @Enum({ items: () => ContactSource, nullable: true })
    source: ContactSource;

    @Property({ nullable: true })
    xkey: string;

    @Property({ nullable: false })
    firstName: string;

    @Property({ nullable: true })
    lastName: string;

    @Property({ nullable: true })
    email: string;

    @Property({ nullable: true })
    title: string;

    @Property({ nullable: true })
    office: string;

    @Property({ nullable: true })
    address: string;

    @Property({ nullable: true })
    city: string;

    @Property({ nullable: true })
    region: string;

    @Property({ nullable: true })
    country: string;

    @Property({ nullable: true })
    countryCode: string;

    @Property({ nullable: true })
    phone: string;

    @Property({ nullable: true })
    mobilePhone: string;

    @ManyToOne(() => Company, {
        joinColumn: 'contactDepartmentId',
        cascade: [Cascade.ALL],
        nullable: true,
        name: 'contactDepartmentId',
    })
    contactDepartment: Company;

    @Property({ nullable: true })
    departmentDetails: string;

    @ManyToOne(() => Company, {
        joinColumn: 'contactCompanyId',
        cascade: [Cascade.ALL],
        nullable: true,
    })
    contactCompany: Company;

    @Property({ nullable: true })
    site: string;

    @Property({ nullable: true })
    supervisorName: string;

    @Property({ nullable: true })
    supervisorXkey: string;

    @Property({ nullable: true })
    supervisorCostCenter: string;

    @Property({ nullable: true })
    supervisorAccountingCode: string;

    @Property({ nullable: true })
    clientType: string;

    @Property({ nullable: true })
    sapId: string;

    @Property({ nullable: true })
    expat: string;

    @Property({ nullable: false })
    corporateId: string;

    @Property({ nullable: false })
    costCenterCode: string;

    @Property({ nullable: false })
    costCenterName: string;

    @Property({ nullable: false })
    accountingCode: string;

    @Property({ nullable: false })
    accountingName: string;

    @Property({ nullable: false })
    contractStartDate: string;

    @Property({ nullable: false })
    contractEndDate: string;

    @Property({ nullable: false })
    company: string;

    @Property({ nullable: false })
    department: string;

    @Property({ columnType: 'timestamptz' })
    createdAt: Date;

    @Property({ columnType: 'timestamptz' })
    updatedAt: Date;

    @Property({ columnType: 'timestamptz', nullable: true })
    deletedAt: Date;
}
