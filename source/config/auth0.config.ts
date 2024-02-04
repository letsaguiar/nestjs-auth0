import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth0Config
{
    public readonly AUTH0_DOMAIN!: string;
    public readonly AUTH0_CLIENT_ID!: string;
    public readonly AUTH0_CLIENT_SECRET!: string;
    public readonly AUTH0_AUDIENCE!: string;
}