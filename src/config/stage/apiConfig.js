/*
불러쓰는 메뉴에서 아래와 같이 사용하세요~
상위 임포트
let config require("../config/" + process.env.NODE_ENV + "/Portal/apiConfig");
사용
let apiAddress = config.testValue
 */

const apiConfig = {
    testValue: "stagy_Portal_apiConfig",
};

module.exports = apiConfig;
