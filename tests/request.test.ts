/* eslint-disable max-lines-per-function */
/* eslint-disable mocha/no-mocha-arrows */
import * as sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import connection from '../src/models/connetion';
import { app } from '../src/app';

chai.use(chaiHttp);

const fakeList = {
  id: 1,
  todo: 'limpar casa',
  criado: '10-02-2020',
  status: 'pendente',
};

describe('Verifica respontas dos métodos', () => {
  before(() => {
    sinon.stub((connection as any), 'execute').resolves([[fakeList]]);
  });
  after(() => {
    (connection.execute as sinon.SinonStub).restore();
  });
  it('Get', async () => {
    const chaiResponse = await chai
      .request(app)
      .get('/');
    
    expect(chaiResponse.status).to.be.equal(200);
    expect(chaiResponse.body).to.be.eql([fakeList]);
  });
  
  it('Put', async () => {
    const chaiResponse = await chai
      .request(app)
      .put('/')
      .send({ id: 2, todo: 'terminar projeto', status: 'pronto', criado: '24-03-2021' });
    
    expect(chaiResponse.status).to.be.equal(204);
  });
  it('Post', async () => {
    const chaiResponse = await chai
      .request(app)
      .post('/')
      .send({ todo: 'terminar projeto', status: 'pronto', criado: '24-03-2021' });
    
    expect(chaiResponse.status).to.be.equal(201);
  });
  it('Delete', async () => {
    const chaiResponse = await chai
      .request(app)
      .delete('/')
      .send({ id: 3 });
    
    expect(chaiResponse.status).to.be.equal(204);
  });
});
