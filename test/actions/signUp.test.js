import '../env'
import { expect } from 'chai';
import { signUp } from '../../src/actions';

const table = ['users']

describe('function signUp ', () => {
  it('should create a new row in the users table', () => {
    return signUp('test', 'test@t.com', '123')
      .then(() => {
        expect(table.length).to.equal(1)
      })
  })
})
