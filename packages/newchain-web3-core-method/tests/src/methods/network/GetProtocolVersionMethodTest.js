import AbstractMethod from '../../../../lib/methods/AbstractMethod';
import GetProtocolVersionMethod from '../../../../src/methods/network/GetProtocolVersionMethod';

/**
 * GetProtocolVersionMethod test
 */
describe('GetProtocolVersionMethodTest', () => {
    let method;

    beforeEach(() => {
        method = new GetProtocolVersionMethod(null, null, {});
    });

    it('constructor check', () => {
        expect(method).toBeInstanceOf(AbstractMethod);

        expect(method.rpcMethod).toEqual('eth_protocolVersion');

        expect(method.parametersAmount).toEqual(0);

        expect(method.utils).toEqual(null);

        expect(method.formatters).toEqual(null);
    });
});
