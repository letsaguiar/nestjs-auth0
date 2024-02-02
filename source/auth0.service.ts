import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Auth0Config } from './auth0.config';
import { Auth0Jwt } from './auth0.interface';

@Injectable()
export class Auth0Service 
{
  public constructor(private readonly auth0Config: Auth0Config) {}

  public async getAccessToken(): Promise<Auth0Jwt>
  {
    try 
    {
      const response = await axios.post(
        this.auth0Config.AUTH0_DOMAIN + '/oauth/token',
        {
          grant_type: 'client_credentials',
          client_id: this.auth0Config.AUTH0_CLIENT_ID,
          client_secret: this.auth0Config.AUTH0_CLIENT_SECRET,
          audience: this.auth0Config.AUTH0_AUDIENCE,
        },
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        },
      );

      return response.data as Auth0Jwt;
    }
    catch (err: any) 
    {
      throw new Error(err);
    }
  }
}
