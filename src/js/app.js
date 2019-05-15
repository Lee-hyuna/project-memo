/**
 * Front-end 해야할 리스트
 * 1. 메모 생성 ( absolute, 우클릭 생성 )
 * 2. 메모 좌표 이동
 *   - 마우스 드롭이 끝난 시점에서 옮겨지면 된다.
 * 3. 메모 순서 변경
 * 4. 메모 사이즈 변경
 * 5. 메모 저장 (localstorage)
 * 6. 메모 삭제
 */

/**
 * Prototype 생성자가 알아야 할 목록은 무엇일까?
 * - ID값
 * - 좌표
 * - 크기
 */

let hasMemo = false
let moveMemo = false
const WRAPPER = document.querySelector('#wrap')
const TYPE = 2
const postIt = {}

class Memo {
  constructor(x, y, id) {
    this.id = id
    this.x = x
    this.y = y
  }

  make() {
    let memoEl = document.createElement('div')
    memoEl.setAttribute('id', this.id)
    memoEl.innerHTML = `
    <div class="wrap_memo" style="top:${this.y}px;left:${this.x}px">
      <textarea placeholder="텍스트를 입력하세요"></textarea>
      <span class="btn_close">
        <svg version="1.1" viewBox="0 0 212.982 212.982" xml:space="preserve" ><g id="Close"><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z" /></g></svg>
      </span>
    </div>
    `

    WRAPPER.appendChild(memoEl)
  }

  move() {}
}

export default Memo

document.addEventListener('mousedown', function(e) {
  if (e.button === TYPE) {
    postIt.push()
    new Memo(e.layerX, e.layerY)
    // postIt.make(e.layerX, e.layerY)
  } else {
    moveMemo = true
  }
})

document.addEventListener('mousemove', function(e) {
  hasMemo = e.target.classList.contains('wrap_memo')
  if (hasMemo && moveMemo) {
    postIt.move(e.pageX, e.pageY)
  }
})

document.addEventListener('mouseup', function(e) {
  moveMemo = false
})

/**
 * - TODO:
 * - Memo 각각 인스턴스 생성
 */
