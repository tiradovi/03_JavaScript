// 01_app.js 파일 실행하는 방법
// node 01_app.js
// node_modules 폴더는 깃허브에 안올림
// .ignore-> 깃허브에 올리지말아야 할 파일 목록들 작성하는 공간
// 이 파일안에 node_modules/*을 작성하면 node_modules 폴더안 모든 파일이
// 깃허브에 안올라감

/*
robots.txt -> 다운로드, 웹페이지 둘중 하나로 보여짐, 도메인 회사마다 형식 다름

https://www.naver.com/robots.txt
모든 도메인 주소 뒤에 /robots.txt를 작성하면
특정 도메인에서 어느 범위까지 데이터 수집허용이 가능한지 나옴

User-agent: * : 모든 유저들은
Disallow: /   : 이 웹사이트의 어떤 페이지도 크롤링 금지, 가장 강력한 차단
Allow : /$    : 규칙에 대한 예외로
Allow : /.well-known/privacy-sandbox-attestations.json 
              : 위 파일 하나는 크롤링 허용

https://www.gmarket.co.kr/robots.txt
User-agent: *  : 모든 유저들은
Disallow: /    : 이 웹사이트의 어떤 페이지도 크롤링 금지

User-agent: GoogleBot 
User-agent: BingBot
User-agent: Yeti
User-agent: Daumoa
User-agent: Twitterbot
User-agent: GPTBot
User-agent: AdsBot-Google
User-agent: Ads-Naver
                 : 로봇들이 데이터를 수집허용           
Crawl-delay: 1   : 로봇들이 데이터를 수집할 때 최소 1의 간격을 두어 서버부담 감소
Allow: /n
Allow: /e        : n이나 a로 시작하는 건가능

User-agent: GoogleOther
Disallow: /n

User-agent: facebookexternalhit
Allow: /
User-agent: facebookcatalog
Allow: /
*/

console.log("nodeJs 실행확인");

console.log("현재시간 :", new Date());

//반복문
for (let i = 0; i < 5; i++) {
  console.log(`${i} 번째 출력`);
}
