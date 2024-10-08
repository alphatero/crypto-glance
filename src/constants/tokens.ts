export enum Tokens {
  wbtc= 'wbtc',
  usdt= 'usdt',
  link= 'link',
  aave= 'aave',
  usdc= 'usdc',
  dai= 'dai',
  eurs= 'eurs'
}

export const tokens: Record<string, { id: string; symbol: string; address: `0x${string}` }>
  = {
  wbtc: {
    id: '3717',
    symbol: 'WBTC',
    address: '0x29f2D40B0605204364af54EC677bD022dA425d03'
  },
  usdt:{ id: '825',symbol: 'USDT' , address: '0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0'},
  link: {id: '1957',symbol: 'LINK',address:'0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5'},
  aave: {  id: '7278',symbol: 'AAVE',address:'0x88541670E55cC00bEEFD87eB59EDd1b7C511AC9a'},
  usdc: {
      id: '3408',
      symbol: 'USDC',
      address:'0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8'},
  dai: {
      id:'4943',
      symbol: 'DAI',
      address: '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357'},
  eurs: {
    id: '2989',
    symbol: 'EURS',
    address:'0x6d906e526a4e2Ca02097BA9d0caA3c382F52278E'}
}

export const tokensIds = Object.values(tokens).map(token => token.id)

