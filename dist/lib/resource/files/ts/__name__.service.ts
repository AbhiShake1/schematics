import { Injectable } from '@nestjs/common';<% if (crud && type !== 'graphql-code-first' && type !== 'graphql-schema-first') { %>
import { Create<%= singular(classify(name)) %>Dto } from './dto/create-<%= singular(name) %>.dto';
import { <%= singular(classify(name)) %>Entity } from './entities/<%= singular(name) %>.entity';
import { CRUDService } from 'common/service/crud.service';
import { Update<%= singular(classify(name)) %>Dto } from './dto/update-<%= singular(name) %>.dto';<% } else if (crud) { %>
import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input';
import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input';<% } %>
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class <%= classify(name) %>Service extends CRUDService<<%= singular(classify(name)) %>Entity, Create<%= singular(classify(name)) %>Dto> {
  constructor(
    @InjectRepository(<%= singular(classify(name)) %>Entity)
    readonly <%= lowercased(name) %>Repository: Repository<<%= singular(classify(name)) %>Entity>,
  ) {
    super(<%= lowercased(name) %>Repository);
  }
}
