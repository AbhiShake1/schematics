import { Injectable } from '@nestjs/common';
import { Create<%= singular(classify(name)) %>Dto } from './dto/create-<%= singular(name) %>.dto';
import { CRUDService } from 'common/service/crud.service';
import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= singular(name) %>.input';
import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= singular(name) %>.input';

@Injectable()
export class <%= classify(name) %>Service extends CRUDService<<%= classify(name) %>Entity, <%= classify(name) %>Dto> {
  constructor(
    @InjectRepository(<%= classify(name) %>Entity)
    readonly <%= lowercased(name) %>Repository: Repository<<%= classify(name) %>Entity>,
  ) {
    super(<%= lowercased(name) %>Repository);
  }
}
