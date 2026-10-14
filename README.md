# 예술in 데모데이 발표

도트 게임 마을에서 포탈로 들어가면 슬라이드가 열리는 발표 자료.

## 실행

`index.html`을 Chrome에서 열면 된다. 앱 내장 브라우저처럼 로컬 파일 입력이 막히는 환경에서는 로컬 서버로 띄운다.

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

## 조작

| 화면 | 키 |
| --- | --- |
| 시작 | Enter 또는 클릭 |
| 마을 | 방향키·WASD 이동, `1` `2` `3` 포탈 바로가기, `F` 전체화면 |
| 슬라이드 | ←/→ 넘기기, ↓/↑ 사진 더미 넘기기, ESC 마을로 |

## 내용 수정

포탈별 슬라이드는 `slides/soft.js`, `slides/product.js`, `slides/tech.js`에 나뉘어 있다. 맡은 포탈 파일만 고치면 된다. 전광판 등 마을 설정은 `index.html` 상단의 `CONFIG`에 있다.

- 포탈 파일의 `slides` 배열을 채운다. 첫 장 목차는 `type: 'act'` 슬라이드에서 자동으로 만들어진다.
- 막은 `act: 1`(지난 무대), `act: 2`(지금 무대), `act: 3`(다음 무대)로 나눈다. `items`가 목차의 세부 항목이 된다.
- 주요 필드
  - `title`, `subtitle`, `kicker`, `big`(크게 강조할 단어)
  - `points`: 글머리 목록. `**강조**`는 형광펜 표시
  - `image`: 이미지 한 장, `images`: 클릭으로 넘기는 사진 더미
  - `type: 'hypothesis'` + `claims`: 가설 화면
  - `type: 'compare'` + `before`/`after`: 전후 비교
  - `type: 'gaps'` + `rows: [{ tag, who, why, need }]`: 누가, 왜, 무엇이 필요한지 비교하는 표
  - `say`: 캐릭터 대사창
- 이미지는 `assets/` 아래에 둔다. 전광판 사진은 `CONFIG.billboard.images`.
