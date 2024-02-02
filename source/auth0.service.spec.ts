import { Test } from '@nestjs/testing';
import axios from 'axios';
import { Auth0Config } from './auth0.config';
import { Auth0Module } from './auth0.module';
import { Auth0Service } from './auth0.service';

describe('Auth0Config', () => 
{
    let config: Auth0Config;
    let service: Auth0Service;

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
        service = moduleRef.get<Auth0Service>(Auth0Service);
    });

    test('should be defined', () => 
    {
        expect(service).toBeDefined();
    });

    test('getAccessToken', async() =>
    {
        if (![ config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_SECRET, config.AUTH0_AUDIENCE, config.AUTH0_DOMAIN ].includes('test'))
        {
            jest.spyOn(axios, 'post');
        }
        else
        {
            jest.spyOn(axios, 'post').mockResolvedValue({ data: { }} as any);
        }

        const result = await service.getAccessToken();
        expect(axios.post).toHaveBeenCalled();
        expect(result).toBeDefined();
    });
});