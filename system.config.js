module.exports = {
    apps: [
        {
            name: 'myapp', // pm2에서 관리하는 어플리케이션의 이름 (pm2 list 치면 나오는 이름)
            script: 'dist/main.js', // "pm2 start ./dist/main.js" 처럼 실행시킬 파일의 경로
            instances: 'max', // cpu를 사용해서 어플리케이션 인스턴스를 몇개까지 실행할것인지.
            exec_mode: 'cluster', // `클러스터 모드` 여러 인스턴스가 병렬적으로 실행될수 있게 한다.
            watch: false, // 파일 변경을 감지할지 여부
            env: { // 환경 변수 정의할 객체(개발 단계) 앞에 env가 붙어야 함
                NODE_ENV: 'development', // 어플리케이션에 환경 변수를 설정한다.
                PORT: 3000,
            },
            env_production: { // 환경 변수 운영 모드에서 정의할 객체
                NODE_ENV: 'production',
                PORT: 3000,
            },
        },
    ],
};