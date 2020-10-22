import hello from '~PAGES/api/hello';

describe('hello API', () => {
  it('should exist', () => {
    const res = { json: jest.fn(v => v) };
    hello(null, res);
    expect(res).toEqual({
      statusCode: 200,
      json: expect.any(Function),
    });
  });
});
