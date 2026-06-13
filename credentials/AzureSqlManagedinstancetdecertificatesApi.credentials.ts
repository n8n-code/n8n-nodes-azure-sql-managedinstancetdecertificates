import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlManagedinstancetdecertificatesApi implements ICredentialType {
        name = 'N8nDevAzureSqlManagedinstancetdecertificatesApi';

        displayName = 'Azure SQL Managedinstancetdecertificates API';

        icon: Icon = { light: 'file:../nodes/AzureSqlManagedinstancetdecertificates/azure-sql-managedinstancetdecertificates.png', dark: 'file:../nodes/AzureSqlManagedinstancetdecertificates/azure-sql-managedinstancetdecertificates.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Managedinstancetdecertificates API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
