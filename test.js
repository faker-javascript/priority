import test from 'ava';
import priority from './index.js';

test('priority return type to be string', t => {
    t.is(typeof priority(), 'string');
});
