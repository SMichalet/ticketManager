import {Client, expect} from '@loopback/testlab';
import {TicketApplication} from '../index';
import {setupApplication} from './test-helper';

describe('TicketController', () => {
  let app: TicketApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /tickets', async () => {
    const res = await client.get('/tickets').expect(200);
    expect(res.body).to.deepEqual([]);
  });

  it('invokes POST /tickets', async () => {
    let ticket = {title: 'title', description: 'desc'};
    const res = await client.post('/tickets', ).send(ticket).expect(200);
    expect(res.body.title).to.equal(ticket.title);
    expect(res.body.description).to.equal(ticket.description);
    expect(res.body.id).to.not.be.null();
  });
});
