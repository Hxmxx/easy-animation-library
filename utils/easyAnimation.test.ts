// utils/easyAnimation.test.ts
import { fadeIn, fadeOut, slideIn, slideOut, zoomIn, zoomOut, queueAnimation, AnimationQueue } from './easyAnimation';

describe('Animation Tests', () => {
    let element: HTMLElement;

    beforeEach(() => {
        // 테스트를 위한 DOM 요소 생성
        element = document.createElement('div');
        document.body.appendChild(element);
    });

    afterEach(() => {
        // 테스트 후 DOM 요소 제거
        document.body.removeChild(element);
    });

    test('fadeIn should set opacity to 1', (done) => {
        fadeIn(element, 500);
        
        // 애니메이션이 완료된 후 opacity 확인
        setTimeout(() => {
            expect(element.style.opacity).toBe('1');
            done(); // 비동기 테스트 완료
        }, 600); // 애니메이션 시간보다 조금 더 긴 시간 대기
    });

    test('fadeOut should set opacity to 0 and display none', (done) => {
        // 먼저 fadeIn을 호출하여 opacity를 1로 설정
        fadeIn(element, 500);
        
        // fadeOut 호출
        fadeOut(element, 500);
        
        // 애니메이션이 완료된 후 opacity display 확인
        setTimeout(() => {
            expect(element.style.opacity).toBe('0');
            expect(element.style.display).toBe('none');
            done(); // 비동기 테스트 완료
        }, 600); // 애���메이션 시간보다 조금 더 긴 시간 대기
    });
});

describe('Slide Animation Tests', () => {
    let element: HTMLElement;

    beforeEach(() => {
        // 테스트를 위한 DOM 요소 생성
        element = document.createElement('div');
        document.body.appendChild(element);
    });

    afterEach(() => {
        // 테스트 후 DOM 요소 제거
        document.body.removeChild(element);
    });

    test('slideIn should move element from left', (done) => {
        slideIn(element, 500);
        
        setTimeout(() => {
            expect(element.style.transform).toBe('translateX(0)');
            done();
        }, 600);
    });

    test('slideOut should move element to left', (done) => {
        slideIn(element, 500);
        slideOut(element, 500);
        
        setTimeout(() => {
            expect(element.style.transform).toBe('translateX(-100%)');
            expect(element.style.display).toBe('none');
            done();
        }, 600);
    });
});

describe('Zoom Animation Tests', () => {
    let element: HTMLElement;

    beforeEach(() => {
        // 테스트를 위한 DOM 요소 생성
        element = document.createElement('div');
        document.body.appendChild(element);
    });

    afterEach(() => {
        // 테스트 후 DOM 요소 제거
        document.body.removeChild(element);
    });

    test('zoomIn should scale element to 1', (done) => {
        zoomIn(element, 500);
        
        setTimeout(() => {
            expect(element.style.transform).toBe('scale(1)');
            done();
        }, 600);
    });

    test('zoomOut should scale element to 0', (done) => {
        zoomIn(element, 500);
        zoomOut(element, 500);
        
        setTimeout(() => {
            expect(element.style.transform).toBe('scale(0)');
            expect(element.style.display).toBe('none');
            done();
        }, 600);
    });
});

describe('Animation Queue Tests', () => {
    let element: HTMLElement;
    let queue: AnimationQueue;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
        queue = new AnimationQueue();
    });

    afterEach(() => {
        document.body.removeChild(element);
    });

    test('should execute animations in queue', (done) => {
        let animationCount = 0;

        queueAnimation(queue, fadeIn, element, 500, () => {
            animationCount++;
            expect(element.style.opacity).toBe('1');
        });

        queueAnimation(queue, fadeOut, element, 500, () => {
            animationCount++;
            expect(element.style.opacity).toBe('0');
            expect(element.style.display).toBe('none');
            expect(animationCount).toBe(2); // 두 개의 애니메이션이 실행되었는지 확인
            done();
        });

        // 첫 번째 애니메이션을 시작합니다.
        queue.runNext();
    });
});