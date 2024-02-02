import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth0Config 
{

  public AUTH0_DOMAIN!: string;

  public AUTH0_CLIENT_ID!: string;

  public AUTH0_CLIENT_SECRET!: string;

  public AUTH0_AUDIENCE!: string;

}
