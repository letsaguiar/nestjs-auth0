import { Test } from '@nestjs/testing';
import { Auth0Config } from './auth0.config';
import { Auth0Module } from './auth0.module';

describe('Auth0Config', () => 
{
    let config: Auth0Config;

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

        config = moduleRef.get<Auth0Config>(Auth0Config);
    });

    test('should be defined', () => 
    {
        expect(config).toBeDefined();
    });

    test('should be loaded with the given parameters', () =>
    {
        expect(config.AUTH0_CLIENT_ID).toBe('test');
        expect(config.AUTH0_CLIENT_SECRET).toBe('test');
        expect(config.AUTH0_AUDIENCE).toBe('test');
        expect(config.AUTH0_DOMAIN).toBe('test.com');
    });
});