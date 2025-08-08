/*
package.json
Node.js에서 프로젝트의 신분증,설계도 매우 중요한 설정파일
프로젝트에 대한 모든 정보와 외부도구를 사용하는지가 모두 이 파일 하나에 기록됨
요리 레시피 카드 = 레시피 카드에 담긴 요리이름, 설명 필요한 재료 목록, 조리순서가 적혀있듯이
프로젝트를 실행함에 있어 비슷한 정보가 담겨있음
{
  "name": "crawling_scraping",    : 폴더 이름 작성(프로젝트 이름)
  "version": "1.0.0",             : 최초 프로그램을 만들 때는 버전 1로 시작
  "description": "",              : 우리 회서 프로젝트 설명 공간
  "main": "index.js",             : js 파일이 여러가지 존재하고 한번에 실행할 때
                                    어디 js파일을 main으로 보고 실행해야하는지
  "scripts": {                    : cmd 창에서 명령어를 작성하고 수행하도록 설정하는 공간
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],                 : 우리 회사 외부에서 어떤 키워드로 검색하는지
  "author": "",                   : 프로젝트 만든이 
  "license": "ISC",               : 우리회사 라이센스 권한 자격
  "dependencies": {               : 프로젝트를 만듦에 있어 필요한 도구들과 도구들의 버전
    "puppeteer": "^24.16.0"       : puppteer 도구의 24.16.0 버전을 이용해서 프로젝트를 만듦
  }
}
*/
// package.json 삭제 x  반면 package-lock.json, node_modules 삭제가능 다시 만들 수 있기 때문

// package-lock.json
/*
package 에 작성되어있는 도구를 어디서 어떻게 가져올지에 대해 작성되어있는 목록
node_modules 폴더에 도구를 가져올 수 있도록 경로나 버전을 기록해 놓은 파일이기 때문에 잠금, 수정 x
*/

// node_modules
/*
프로젝트에 필요한 모든 외부 라이브러리들의 실제 소스코드가 저장되는 폴더

npm install 명령어를 실행하면 package.json에 도구이름-도구버전이 기록되고, 기록된 경로를 따라
package-lock에서 알아서 세팅, 세팅된 내용을 바탕으로 node_modules에 실제파일들이 만들어짐
*/
