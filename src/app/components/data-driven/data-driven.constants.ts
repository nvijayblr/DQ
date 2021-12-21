export const SourceTypes = [
    {
        category: 'File Upload',
        children: [{
            text: 'Excel',
            image: 'excel',          
            options : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
        },
        {
            text: 'CSV',
            image: 'csv',           
            options : '.csv'
        },
        {
            text: 'JSON',
            image: 'json'
           
        },
        {
            text: 'XML',
            image: 'xml'            
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