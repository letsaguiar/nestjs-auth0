import { Injectable } from '@nestjs/common';
import { ManagementClient } from 'auth0';

@Injectable()
export class Auth0ManagementClient extends ManagementClient {}