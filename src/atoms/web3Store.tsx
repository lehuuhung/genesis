import { atom } from 'recoil';
import Web3 from 'web3';

export const providerState = atom<any>({
    key: 'w3provider',
    default: undefined,
    dangerouslyAllowMutability: true
})

export const web3State = atom<any>({
    key: 'web3object',
    default: undefined,
    dangerouslyAllowMutability: true
})

export const walletState = atom({
    key: 'walletOptions',
    default: {
        account: ''
    }
})