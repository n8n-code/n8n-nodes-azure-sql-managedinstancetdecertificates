import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlManagedinstancetdecertificates implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL Managedinstancetdecertificates',
                name: 'N8nDevAzureSqlManagedinstancetdecertificates',
                icon: { light: 'file:./azure-sql-managedinstancetdecertificates.png', dark: 'file:./azure-sql-managedinstancetdecertificates.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure SQL Database RESTful API manages databases via CRUD operations.',
                defaults: { name: 'Azure SQL Managedinstancetdecertificates' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlManagedinstancetdecertificatesApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
