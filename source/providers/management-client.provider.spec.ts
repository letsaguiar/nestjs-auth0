import { Test } from '@nestjs/testing';
import { Auth0Module } from '../auth0.module';
import { Auth0ManagementClient } from './management-client.provider';

describe('Auth0Config', () => 
{
    let provider: Auth0ManagementClient;

    beforeEach(async() => 
    {
        const moduleRef = await Test.createTestingModule({
            imports: [
                Auth0Module.register({
                    AUTH0_CLIENT_ID: process.env['AUTH0_CLIENT_ID'] || 'test',
                    AUTH0_CLIENT_SECRET: process.env['AUTH0_CLIENT_SECRET'] || 'test',
                    AUTH0_AUDIENCE: process.env['AUTH0_AUDIENCE'] || 'test',
                    AUTH0_DOMAIN: process.env['AUTH0_DOMAIN'] || 'test.com'
                })
            ]
        }).compile();

        provider = moduleRef.get<Auth0ManagementClient>(Auth0ManagementClient);
    });

    test('should be defined', () => 
    {
        expect(provider).toBeDefined();
    });
});
