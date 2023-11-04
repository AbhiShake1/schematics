<% if (type === 'graphql-code-first') { %>import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseClassEntity } from 'common/entities/base.entity';

@ObjectType()
export class <%= singular(classify(name)) %>Entity extends BaseClassEntity {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}<% } else { %>export class <%= singular(classify(name)) %>Entity {}<% } %>
