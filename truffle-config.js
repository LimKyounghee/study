// truffle.js config for klaytn.
//const { TextEncoder, TextDecoder } = require("util");
const PrivateKeyConnector = require('truffle-hdwallet-provider-klaytn')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0xeca2fa4763827c1ac8cc2b2fa34bce9211d537035aa654f2439270a8ea2e20fd' // 싱글 따옴표 안에 자신의 프라이빗 키 입력하세요.

// 스마트 컨트랙트를 배포할 수 있는 간단한 기본 설정
module.exports = {
    networks: {
        klaytn: {
            // host: '127.0.0.1'  ,
            // port: 8551,
            // from: '0xeca2fa4763827c1ac8cc2b2fa34bce9211d537035aa654f2439270a8ea2e20fd', // 계정 주소를 입력하세요
            provider: new PrivateKeyConnector(PRIVATE_KEY,URL),
            network_id: '1001', // Baobab 네트워크 id
            gas: 20000000, // 트랜잭션 가스 한도
            gasPrice: 25000000000, // Baobab의 gasPrice는 25 Gpeb입니다
        }
    },
    compilers: {
        solc: {
          version: "0.5.6"    // 컴파일러 버전을 0.5.6로 지정
        }
    }
}
