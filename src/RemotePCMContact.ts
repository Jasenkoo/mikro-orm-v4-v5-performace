export class RemotePCMContact {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(fetchedData: any) {
        this.xkey = fetchedData.xkey;
        this.firstName = fetchedData.first_name;
        this.lastName = fetchedData.last_name;
        this.email = fetchedData.email_address;
        this.title = fetchedData.title;
        this.office = fetchedData.desk_location;
        this.address = fetchedData.site_street;
        this.city = fetchedData.site_city;
        this.region = fetchedData.region;
        this.country = fetchedData.site_country;
        this.countryCode = fetchedData.country_code;
        this.phone = fetchedData.phone_number_business;
        this.mobilePhone = fetchedData.phone_number_mobile;
        this.departmentDetails = fetchedData.department_details;
        this.site = fetchedData.site;
        this.supervisorName = fetchedData.direct_superior_name;
        this.supervisorXkey = fetchedData.direct_superior_xkey;
        this.supervisorCostCenter = fetchedData.direct_superior_cost_center;
        this.supervisorAccountingCode = fetchedData.direct_superior_accounting_code;
        this.clientType = fetchedData.client_type;
        this.sapId = fetchedData.sap_id;
        this.expat = fetchedData.expat;
        this.corporateId = fetchedData.corporate_id;
        this.costCenterCode = fetchedData.cost_center_code;
        this.costCenterName = fetchedData.cost_center_name;
        this.accountingCode = fetchedData.accounting_code;
        this.accountingName = fetchedData.accounting_name;
        this.contractStartDate = fetchedData.entry_date;
        this.contractEndDate = fetchedData.exit_date;
        this.company = fetchedData.company;
        this.department = fetchedData.department;
    }
    // 1. The unique key for external contacts
    xkey: string;

    // 2. firstName ~ first_name
    firstName: string;

    // 3. lastName ~ last_name
    lastName: string;

    //4. email_display_name ~ email_address
    email: string;

    //5. title ~ title
    title: string;

    // 6. office ~ desk_location
    office: string;

    // 7. address_work_1 ~ site_street
    address: string;

    // 8. town_work ~ site_city
    city: string;

    // 9. region_work ~ region
    region: string;

    // 10. country_work ~ site_country
    country: string;

    // 11. zip_code_work ~ country_code
    countryCode: string;

    /**
     * NOTE: using remote business phone as phone
     * 12. phone_work_1 ~ phone_number_business
     */
    phone: string;

    // 13. mobile_phone ~ phone_number_mobile
    mobilePhone: string;

    // 14. department_details ~ department_details
    departmentDetails: string;

    // 15. site ~ site
    site: string;

    // 16. supervisor_name ~ direct_superior_name
    supervisorName: string;

    // 17. supervisor_xkey ~ direct_superior_xkey
    supervisorXkey: string;

    // 18. supervisor_cost_center ~ direct_superior_cost_center
    supervisorCostCenter: string;

    // 19. supervisor_accounting_code ~ direct_superior_accounting_code
    supervisorAccountingCode: string;

    // 20. client_type ~ client_type
    clientType: string;

    // 21. sap_id ~ sap_id
    sapId: string;
    // 22. expat ~ expat
    expat: string;

    // 23. corporate_id ~ corporate_id
    corporateId: string;

    // 24. cost_center_code ~ cost_center_code
    costCenterCode: string;

    // 25. cost_center_name ~ cost_center_name
    costCenterName: string;

    // 26. accounting_code ~ accounting_code
    accountingCode: string;

    // 27. accounting_name ~ accounting_name
    accountingName: string;
    // // 30. contract_start_date ~ entry_date
    // 28. contract_start_date ~ entry_date
    contractStartDate: string;

    // 29. contract_end_date ~ exit_date
    contractEndDate: string;

    company: string;

    department: string;
}
