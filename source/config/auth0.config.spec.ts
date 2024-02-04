import { Test } from '@nestjs/testing';
import { Auth0Module } from '../auth0.module';
import { Auth0Config } from './auth0.config';

describe('Auth0Config', () => 
{
    let config: Auth0Config;

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

        config = moduleRef.get<Auth0Config>(Auth0Config);
    });

    test('should be defined', () => 
    {
        expect(config).toBeDefined();
    });

    test('should be loaded properly', () =>
    {
        if (Object.values(config).includes('test'))
        {
            expect(config.AUTH0_CLIENT_ID).toBe('test');
            expect(config.AUTH0_CLIENT_SECRET).toBe('test');
            expect(config.AUTH0_AUDIENCE).toBe('test');
            expect(config.AUTH0_DOMAIN).toBe('test.com');
        }
        else
        {
            expect(config.AUTH0_CLIENT_ID).toBe(process.env['AUTH0_CLIENT_ID']);
            expect(config.AUTH0_CLIENT_SECRET).toBe(process.env['AUTH0_CLIENT_SECRET']);
            expect(config.AUTH0_AUDIENCE).toBe(process.env['AUTH0_AUDIENCE']);
            expect(config.AUTH0_DOMAIN).toBe(process.env['AUTH0_DOMAIN']);
        }
    });
});