export const SourceTypes: any = [
    {
        category: 'File Upload',
        children: [{
            text: 'Excel',
            image: 'excel',
            type: 'xlsx',
            options: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
        },
        {
            text: 'CSV',
            image: 'csv',
            type: 'csv',
            options: '.csv'
        },
        {
            text: 'JSON',
            image: 'json',
            type: 'json',
            options: '.json'
        },
        {
            text: 'XML',
            image: 'xml',
            type: 'xml',
            options: '.xml'
        }]
    }, {
        category: 'Database',
        children: [{
            text: 'Oracle',
            image: 'oracle',
        }, {
            text: 'MySQL',
            image: 'sql',
        }, {
            text: 'MongoDB',
            image: 'mango',
        }]
    },
    {
        category: 'Big Data',
        children: [{
            text: 'Kafka',
            image: 'kafka',
        }]
    },
    {
        category: 'Others',
        children: [{
            text: 'Google Drive',
            image: 'gdrive',
        }, {
            text: 'PowerBI',
            image: 'power',
        }]
    }
];

export const SourceSettings = {
    isMuliSourceData: 'true',
    multiSourceOptions: [],
    frequency: 'DAILY',
    uploadDate: '',
    multiSourceColumn: '',
    uploadTime: '',
    department: []
};