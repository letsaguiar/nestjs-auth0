import { Test } from '@nestjs/testing';
import { Auth0Module } from './auth0.module';

describe('Auth0Module', () => 
{
    let module: Auth0Module;

    beforeEach(async() => 
    {
        const moduleRef = await Test.createTestingModule({
            imports: [
                Auth0Module.register({
                    AUTH0_CLIENT_ID: 'test',
                    AUTH0_CLIENT_SECRET: 'test',
                    AUTH0_AUDIENCE: 'test',
                    AUTH0_DOMAIN: 'test.com'
                })
            ]
        }).compile();

        module = moduleRef.get<Auth0Module>(Auth0Module);
    });

    test('should be defined', () => 
    {
        expect(module).toBeDefined();
    });
});