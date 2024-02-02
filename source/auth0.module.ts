import { DynamicModule, Module } from '@nestjs/common';
import { Auth0Config } from './auth0.config';
import { Auth0Service } from './auth0.service';

@Module({
  providers: [Auth0Config, Auth0Service],
  exports: [Auth0Service],
})
export class Auth0Module 
{
  public static register(options: Auth0Config): DynamicModule 
  {
    return {
      module: Auth0Module,
      providers: [{ provide: Auth0Config, useValue: options }],
    };
  }
}
