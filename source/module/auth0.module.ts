import { DynamicModule, Module } from '@nestjs/common';
import { Auth0Config } from '../config/auth0.config';
import { Auth0ManagementClient } from '../providers/management-client.provider';

@Module({})
export class Auth0Module 
{
  public static register({
    AUTH0_DOMAIN,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_AUDIENCE,
  }: Auth0Config): DynamicModule
  {
    return {
      module: Auth0Module,
      providers: [
        {
          provide: Auth0Config,
          useValue: { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_AUDIENCE }
        },
        {
          provide: Auth0ManagementClient,
          useValue: new Auth0ManagementClient({
            domain: AUTH0_DOMAIN,
            clientId: AUTH0_CLIENT_ID,
            clientSecret: AUTH0_CLIENT_SECRET,
            audience: AUTH0_AUDIENCE,
          })
        }
      ],
      exports: [
        Auth0ManagementClient,
        Auth0Config
      ]
    };
  }
}
