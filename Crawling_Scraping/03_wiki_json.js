//Error : Cannot find module 'axios'
// npm install axios 필요
const fs = require("fs");
const puppeteer = require("puppeteer");

// 검색할 키워드
const searchQuery = "대한민국";

async function crawlWikipedia() {
  console.log(`'${searchQuery}'에 대한 위키백과 검색을 시작합니다...`);

  // 1. 브라우저 실행
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // 2. 위키백과 메인 페이지로 이동
  await page.goto("https://ko.wikipedia.org/");
  console.log("위키백과 페이지에 접속했습니다.");

  // 3. 검색창에 키워드 입력
  // '#searchInput'은 위키백과 검색창의 CSS 선택자입니다.
  await page.type("#searchInput", searchQuery);
  console.log(`검색창에 '${searchQuery}'를 입력했습니다.`);

  // 4. 검색 버튼 클릭
  await page.click('button[type="submit"]');
  console.log("검색 버튼을 클릭했습니다.");

  // 5. 검색 결과 페이지 로딩 기다리기
  // 'waitForNavigation'은 페이지 이동이 완료될 때까지 기다리는 함수입니다.
  await page.waitForNavigation();
  console.log("결과 페이지로 이동했습니다.");

  // 6. 결과 페이지에서 데이터 추출
  const articleData = await page.evaluate(() => {
    // #firstHeading은 문서의 메인 제목입니다.
    const title = document.querySelector("#firstHeading").innerText;

    // #mw-content-text p 는 본문 내용의 단락(p 태그)들입니다.
    // 그 중 첫 번째 단락의 텍스트만 가져옵니다.
    const firstParagraph = document.querySelector(
      "#mw-content-text .mw-parser-output p"
    ).innerText;

    return {
      title: title,
      summary: firstParagraph,
    };
  });

  // 7. 추출한 데이터를 JSON 파일로 저장
  fs.writeFileSync(
    "wikipedia_result.json",
    JSON.stringify(articleData, null, 2)
  );
  console.log("크롤링 완료! wikipedia_result.json 파일이 생성되었습니다.");
  console.log("--- 추출된 데이터 ---");
  console.log(articleData);

  // 8. 브라우저 닫기
  await browser.close();
}

// 함수 실행
crawlWikipedia();
