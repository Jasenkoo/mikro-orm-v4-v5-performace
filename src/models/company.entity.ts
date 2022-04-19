import { Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Contact } from './contact.entity';

@Entity({ tableName: 'companies' })
export class Company {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    @PrimaryKey()
    id!: number;

    @Property()
    name!: string;

    @Property({ default: false })
    isDepartment: boolean;

    @OneToMany(() => Company, (company) => company.parent, {
        name: 'parentId',
        fieldName: 'id',
        inverseJoinColumn: 'children',
    })
    children = new Collection<Company>(this);

    @ManyToOne(() => Company, { name: 'parentId', nullable: true })
    parent: Company;

    @OneToMany(() => Contact, (contact) => contact.contactDepartment)
    contacts = new Collection<Contact>(this);

    @Property({ columnType: 'timestamptz' })
    createdAt: Date;

    @Property({ columnType: 'timestamptz' })
    updatedAt: Date;

    @Property({ columnType: 'timestamptz', nullable: true })
    deletedAt: Date;
}
