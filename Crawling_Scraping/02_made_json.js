/*
require("파일 이름"): node modules 중에서 fs 로 지칭되어 있는 파일 가져와서 사용
require("fr") : Node.js 최초로 만들 때 기본적으로 내장되어 있는 깅
                file System 줄임말
                파일을 다룰 때 사용
 require("puppeteer"): 인형조종사라는 의미로 웹브라우저를 
                       코드(인형)처럼 조종하는 라이브러리
                       웹사이트 접속, 버튼 클릭, 텍스트 입력, 화면 스크린샷 등
                       웹브라우저 자동화와 관련된 모든 기능 사용가능
                       npm install puppeteer 명령어로 미리 설치해야 사용가능
                       

            
*/
const fs = require("fs"); // 파일 시스템 모듈
const puppeteer = require("puppeteer");

/*
ajax = axios와 같은 비동기함수로 만들어 주는 키워드
async = 비동기 함수는 시간이 걸리는 작업을 기다리는 동안 다른 작업 계속 진행 가능

지금은 async 제거해도 무방, 그러나 여러작업을 한 프로그램 안에 실행시 필요

async - await : 
        async : 비동기 작업 준비
        await : 시간이 걸리는 작업이 끝날때까지 기다리라고 지시
             async내에서만 사용가능 결과값이 완료되기까지 함수의 실행 일시중지
*/
async function scrapeQuotes() {
  // 1. 브라우저 실행
  // puppeteer.launch 구글 크롬을 배경으로 새로운 크롬 시작
  // headless: "new" : 웹사이트를 화면에 보이지 않는 상태에서 실행
  // headless: false : 웹사이트를 화면에 보이는 상태에서 실행
  const browser = await puppeteer.launch({ headless: "new" });

  // 2. 새로운 페이지 열기
  const page = await browser.newPage();

  // 3. 원하는 웹사이트로 이동
  await page.goto("http://quotes.toscrape.com/");

  // 4. 페이지의 특정 요소들을 가져오기
  const quotes = await page.evaluate(() => {
    const quoteList = [];
    const quoteElements = document.querySelectorAll(".quote");

    quoteElements.forEach((element) => {
      // map과 같은 기능
      const text = element.querySelector(".text").innerText;
      const author = element.querySelector(".author").innerText;
      quoteList.push({ text, author });
    });

    return quoteList;
  });

  // 5. 수집한 결과를 JSON 파일로 저장
  // fs.writeFileSync() : 파일에 작성하는 작업이 순차적으로 끝날 때 까지 대기
  // .quote 내부에 작성된 데이터를 0번부터 순차적으로 작성하기 위해 동기작업
  // writeFileSync() : 단순 파일 저장
  // writeFile()     : 비동기 형태, 기존에 동기 방식으로 수십MB의 파일을 다룰 때 멈춤을 방지하기위해 사용
  // JSON.stringify(quotes, null, 2)
  // JSON.stringify() : 객체나 배열을 문자열 형태로 변환
  //            quotes: 객체나 배열 대상으로 자바스크립트 변수이름에 저장되어있는 목록을 파일명.json으로 저장할 리스트
  //              null: 데이터를 문자열로 변환하기 전에 특정 규칙에 따라 값을 바꾸거나 필터링하는 함수를 넣는자리
  //                 2: 2칸 들여쓰기
  fs.writeFileSync("quotes.json", JSON.stringify(quotes, null, 2));

  // 크롤링 확인용 log
  console.log("크롤링 완료 quotes.json 파일이 생성되었습니다.");

  // 6. 브라우저 닫기 = 닫기 싫으면 안해도 되나 닫지않으면 메모리 누수
  await browser.close();
}

// 함수 실행
scrapeQuotes();
